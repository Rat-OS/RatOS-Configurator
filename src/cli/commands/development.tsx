import { Command } from 'commander';
import { ensureSudo, loadEnvironment, renderError } from '@/cli/util';
import { createSignal } from '@/app/_helpers/signal';
import { getLogger } from '@/cli/logger';
import { $ } from 'zx';
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { replaceInFileByLine } from '@/server/helpers/file-operations';
import { InstallProgress, InstallAction, skipActionIfAborted } from '@/cli/components/install-progress';
import { confirm } from '@/cli/components/confirm';
import { render } from 'ink';
import React from 'react';

const ensureLocalEnvFile = async () => {
	if (!existsSync('./.env.local')) {
		getLogger().info('Creating .env.local file');
		await writeFile('./.env.local', await readFile('.env'));
	}
};

/**
 * Replaces lines in local env file with new lines.
 * @param searchOrReplacer  String or RegExp to search for, or a function that takes a line and returns a new line, if the function returns null the line will be removed.
 * @param replace String to replace with, or null to remove the line.
 * @returns Number of lines changed
 */
const replaceInLocalEnvFile = async (
	searchOrReplacer: string | RegExp | ((line: string, lineNumber: number) => string | null),
	replace?: string | null,
) => {
	await ensureLocalEnvFile();
	await replaceInFileByLine('./.env.local', searchOrReplacer, replace);
};

const isDeploymentBranch = (branch: string) => branch.indexOf('-deployment') > -1;

const development = (program: Command) => {
	const development = program.command('development').description('Development commands');
	development
		.command('branch')
		.description('Switch between development and deployment branches')
		.argument('<branch>', 'The new branch to switch to, eg. "development" or "dev-deployment"')
		.action(async (newBranch: string) => {
			await ensureSudo();

			const cmdSignal = createSignal<string | null>();
			const $$ = $({
				quiet: true,
				log(entry) {
					if (entry.kind === 'cmd') {
						cmdSignal(entry.cmd);
						getLogger().info('Running command: ' + entry.cmd);
					}
				},
			});

			const currentBranch = (await $$`git branch --show-current`).lines()[0];
			const hasDirtyWorkingDirectory = (await $$`git status --porcelain`).lines().length > 0;

			getLogger().info(
				{
					currentBranch,
					currentBranchIsDeploymentBranch: isDeploymentBranch(currentBranch),
					hasDirtyWorkingDirectory,
				},
				`Switching from ${currentBranch} to ${newBranch}...`,
			);

			if (
				hasDirtyWorkingDirectory &&
				!(await confirm('Working directory is dirty and will be forcefully reset, do you want to continue?', false))
			) {
				getLogger().info(
					`Aborting switch to ${newBranch}, working directory is dirty and user did not confirm the reset`,
				);
				renderError('Branch switching aborted because the working directory is dirty.');
				return;
			}

			getLogger().info(`Switching from ${currentBranch} to ${newBranch}...`);

			const installActions: (InstallAction | null)[] = [
				{
					name: `Switching to ${newBranch}...`,
					execute: async (abortSignal, helpers) => {
						await $$({ signal: abortSignal })`git checkout ${newBranch}`;
						if (abortSignal.aborted) {
							await $$`git checkout ${currentBranch}`;
							return { stepText: 'Aborted', stepStatus: 'error' };
						}
						// If the app directory exists, we are on a deployment branch
						if (existsSync('../app')) {
							getLogger().info(`Switched to deployment branch "${newBranch}"`);
							helpers.insertStep({
								name: `Adjusting environment for deployment branch ${newBranch}`,
								execute: skipActionIfAborted(async (abortSignal, helpers) => {
									await replaceInLocalEnvFile((line) => {
										if (line.startsWith('RATOS_SCRIPT_DIR=')) {
											return line.replace('/src/', '/app/');
										}
										return line;
									});
									return { stepText: 'Adjusted environment for deployment branch', stepStatus: 'success' };
								}),
								status: 'pending',
							});
						} else if (newBranch.indexOf('-deployment') > -1) {
							getLogger().info(`Deployment branch detected (${newBranch}) but app directory wasn't found`);
							throw new Error('Deployment branch detected but app directory not found');
						} else {
							getLogger().info(`Switched to development branch "${newBranch}"`);
							helpers.insertStep({
								name: `Adjusting environment for development branch ${newBranch}`,
								execute: skipActionIfAborted(async (abortSignal, helpers) => {
									await replaceInLocalEnvFile((line) => {
										if (line.startsWith('RATOS_SCRIPT_DIR=')) {
											return line.replace('/app/', '/src/');
										}
										return line;
									});
									return { stepText: 'Adjusted environment for development branch', stepStatus: 'success' };
								}),
								status: 'pending',
							});
						}
						return abortSignal.aborted
							? { stepText: 'Aborted', stepStatus: 'error' }
							: { stepText: 'Switched branch to ' + newBranch, stepStatus: 'success' };
					},
				},
				// {
				// 	name: 'Updating RatOS configurator',
				// 	execute: skipActionIfAborted(async (abortSignal, helpers) => {
				// 		await $$({ signal: abortSignal })`sudo ${loadEnvironment().RATOS_SCRIPT_DIR}/update.sh`;
				// 		return { stepText: 'Updated RatOS configurator', stepStatus: 'success' };
				// 	}),
				// },
				// {
				// 	name: 'Restarting RatOS configurator',
				// 	execute: skipActionIfAborted(async (abortSignal, helpers) => {
				// 		await $$({ signal: abortSignal })`sudo systemctl restart ratos-configurator`;
				// 		await $$({
				// 			signal: abortSignal,
				// 		})`sleep 1 && curl -s -o /dev/null --retry 20 --retry-all-errors --retry-delay 1 --retry-max-time 60 "http://localhost:3000/configure" &> /dev/null`;
				// 		return { stepText: 'Restarted RatOS configurator', stepStatus: 'success' };
				// 	}),
				// },
				// {
				// 	name: 'Updating RatOS configuration',
				// 	execute: skipActionIfAborted(async (abortSignal, helpers) => {
				// 		await $$({
				// 			signal: abortSignal,
				// 		})`sudo ${loadEnvironment().RATOS_CONFIGURATION_PATH}/scripts/ratos-update.sh`;
				// 		return { stepText: 'Updated RatOS configuration', stepStatus: 'success' };
				// 	}),
				// },
				// {
				// 	name: 'Restarting Klipper',
				// 	execute: skipActionIfAborted(async (abortSignal, helpers) => {
				// 		await $$({ signal: abortSignal })`sudo systemctl restart klipper`;
				// 		return { stepText: 'Restarted Klipper', stepStatus: 'success' };
				// 	}),
				// },
				// {
				// 	name: 'Restarting Moonraker',
				// 	execute: skipActionIfAborted(async (abortSignal, helpers) => {
				// 		await $$({ signal: abortSignal })`sudo systemctl restart moonraker`;
				// 		return { stepText: 'Restarted Moonraker', stepStatus: 'success' };
				// 	}),
				// },
			];

			render(
				<InstallProgress
					initialStatusText={`Switching branch to ${newBranch}...`}
					cmdSignal={cmdSignal}
					steps={installActions.filter(Boolean)}
				/>,
			);
		});
};

export default development;
