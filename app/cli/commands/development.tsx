import { Command } from 'commander';
import { constructSignalShell, ensureSudo, loadEnvironment, renderError } from '@/cli/util';
import { getLogger } from '@/cli/logger';
import { cd, path, Shell, syncProcessCwd } from 'zx';
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { replaceInFileByLine } from '@/server/helpers/file-operations';
import { InstallProgress, InstallAction, skipActionIfAborted } from '@/cli/components/install-progress';
import { confirm } from '@/cli/components/confirm';
import { render, Static, Text } from 'ink';
import React from 'react';
import { Container } from '@/cli/components/container';

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

const renderBranchInfo = async ($: Shell) => {
	render(
		<Container>
			<Text bold>Current branch:</Text>
			<Text color="green">{await $`git branch --show-current`.text()}</Text>
			<Text bold>Available upstream branches:</Text>
			<Text>
				{(await $`git branch -r`)
					.lines()
					.map((line) => line.trim())
					.join('\n')}
			</Text>
		</Container>,
	);
};

const development = (program: Command) => {
	const development = program.command('development').description('Development commands');
	development
		.command('branch')
		.description('Switch between development and deployment branches')
		.argument('[remote]', 'The remote to fetch from, eg. "origin" or "upstream"')
		.argument('[branch]', 'The new branch to switch to, eg. "development" or "dev-deployment"')
		.action(async (remote?: string, newBranch?: string | null) => {
			const { cmdSignal, $ } = constructSignalShell();
			syncProcessCwd();

			if (remote == null) {
				await renderBranchInfo($);
				return;
			}
			if (newBranch == null) {
				newBranch = remote;
				remote = 'origin';
			}
			try {
				if ((await $`git remote get-url ${remote}`).text().trim() === '') {
					renderError(`Remote "${remote}" not found`);
				}
			} catch (e) {
				renderError(`Remote "${remote}" not found`);
			}
			if (
				(await $`git branch -r`)
					.lines()
					.map((line) => line.trim())
					.filter((line) => line.startsWith(`${remote}/${newBranch}`)).length === 0
			) {
				renderError(`Branch "${newBranch}" not found on remote "${remote}"`);
			}
			await ensureSudo();

			const currentBranch = (await $`git branch --show-current`).lines()[0];
			const hasDirtyWorkingDirectory =
				(await $`git status --porcelain`).lines().filter((line) => line.trim() !== '').length > 0;

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
				!(await confirm(
					'Working directory is dirty and will be forcefully reset, do you want to continue?',
					(await $`git diff --name-only HEAD`)
						.lines()
						.map((line) => 'Would remove ' + path.relative(process.cwd(), line.trim()))
						.join('\n') +
						'\n' +
						(await $`git clean -d -n`)
							.lines()
							.map((line) => line.trim())
							.join('\n'),
					false,
				))
			) {
				getLogger().info(
					`Aborting switch to ${newBranch}, working directory is dirty and user did not confirm the reset`,
				);
				renderError('Branch switching aborted because the working directory is dirty.');
				return;
			}

			getLogger().info(`Switching from ${currentBranch} to ${newBranch}...`);

			const installActions: (InstallAction | null)[] = [
				hasDirtyWorkingDirectory
					? {
							name: 'Resetting working directory',
							execute: skipActionIfAborted(async (abortSignal, helpers) => {
								await $`git reset --hard HEAD`;
								await $`git clean -d -f`;
								return { newName: 'Reset working directory', stepStatus: 'success' };
							}),
						}
					: null,
				{
					name: 'Fetching latest changes',
					execute: skipActionIfAborted(async (abortSignal, helpers) => {
						await $`git fetch ${remote} ${newBranch}`;
						return { newName: 'Fetched latest changes', stepStatus: 'success' };
					}),
				},
				{
					name: `Switching to ${newBranch}...`,
					execute: async (abortSignal, helpers) => {
						await $({ signal: abortSignal })`git checkout -b ${newBranch} ${remote}/${newBranch}`;
						if (abortSignal.aborted) {
							await $`git checkout ${currentBranch}`;
							return { newName: 'Aborted', stepStatus: 'error' };
						}
						// Conventionally, deployment branches have a "-deployment" suffix
						if (newBranch.endsWith('-deployment')) {
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
									if (process.cwd().endsWith('/src')) {
										cd('../app');
										await $({ signal: abortSignal })`cp -r ../src/.env.local ./.env.local`;
										const filesToDelete = await $`git clean -d -n ..`;
										helpers.insertStep({
											name: 'Cleaning up src directory',
											prompt:
												'The following files/directories will be deleted:\n\n' +
												filesToDelete
													.lines()
													.map((line) => line.trim())
													.join('\n') +
												'\n\nDo you want to continue?',
											execute: skipActionIfAborted(async (abortSignal, helpers) => {
												await $({ signal: abortSignal })`git clean -d -f`;
												return { newName: 'Cleaned up src directory', stepStatus: 'success' };
											}),
											status: 'pending',
										});
										helpers.insertStep({
											name: 'Enabling configurator service',
											execute: skipActionIfAborted(async (abortSignal, helpers) => {
												await $({ signal: abortSignal })`sudo systemctl enable ratos-configurator`;
												helpers.pushWarning(
													'Configurator service has been enabled and will start automatically on boot.',
												);
												return { newName: 'Enabled configurator service', stepStatus: 'success' };
											}),
											status: 'pending',
										});
									}
									return { newName: 'Adjusted environment for deployment branch', stepStatus: 'success' };
								}),
								status: 'pending',
							});
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
									if (process.cwd().endsWith('/app')) {
										cd('../src');
										await $({ signal: abortSignal })`cp -r ../app/.env.local ./.env.local`;
										const filesToDelete = await $`git clean -d -n ..`;
										helpers.insertStep({
											name: 'Cleaning up app directory',
											prompt:
												'The following files/directories will be deleted:\n\n' +
												filesToDelete
													.lines()
													.map((line) => line.trim())
													.join('\n') +
												'\n\nDo you want to continue?',
											execute: skipActionIfAborted(async (abortSignal, helpers) => {
												await $({ signal: abortSignal })`git clean -d -f`;
												return { newName: 'Cleaned up app directory', stepStatus: 'success' };
											}),
											status: 'pending',
										});
										helpers.insertStep({
											name: 'Disabling configurator service',
											execute: skipActionIfAborted(async (abortSignal, helpers) => {
												await $({ signal: abortSignal })`sudo systemctl disable ratos-configurator`;
												helpers.pushWarning(
													'Configurator service has been disabled, use `pnpm run dev` to start the configurator.',
												);
												return { newName: 'Disabled configurator service', stepStatus: 'success' };
											}),
											status: 'pending',
										});
									}
									return { newName: 'Adjusted environment for development branch', stepStatus: 'success' };
								}),
								status: 'pending',
							});
						}
						return abortSignal.aborted
							? { newName: 'Aborted branch switch', stepStatus: 'error' }
							: { newName: 'Switched branch to ' + newBranch, stepStatus: 'success' };
					},
				},
				{
					name: 'Updating RatOS configurator',
					execute: skipActionIfAborted(async (abortSignal, helpers) => {
						await $({ signal: abortSignal })`sudo ${loadEnvironment().RATOS_SCRIPT_DIR}/update.sh`;
						return { newName: 'Updated RatOS configurator', stepStatus: 'success' };
					}),
				},
				{
					name: 'Restarting RatOS configurator',
					execute: skipActionIfAborted(async (abortSignal, helpers) => {
						await $({ signal: abortSignal })`sudo systemctl restart ratos-configurator`;
						await $({
							signal: abortSignal,
						})`sleep 1 && curl -s -o /dev/null --retry 20 --retry-all-errors --retry-delay 1 --retry-max-time 60 "http://localhost:3000/configure" &> /dev/null`;
						return { newName: 'Restarted RatOS configurator', stepStatus: 'success' };
					}),
				},
				{
					name: 'Updating RatOS configuration',
					execute: skipActionIfAborted(async (abortSignal, helpers) => {
						await $({
							signal: abortSignal,
						})`sudo ${loadEnvironment().RATOS_CONFIGURATION_PATH}/scripts/ratos-update.sh`;
						return { newName: 'Updated RatOS configuration', stepStatus: 'success' };
					}),
				},
				{
					name: 'Restarting Klipper',
					execute: skipActionIfAborted(async (abortSignal, helpers) => {
						await $({ signal: abortSignal })`sudo systemctl restart klipper`;
						return { newName: 'Restarted Klipper', stepStatus: 'success' };
					}),
				},
				{
					name: 'Restarting Moonraker',
					execute: skipActionIfAborted(async (abortSignal, helpers) => {
						await $({ signal: abortSignal })`sudo systemctl restart moonraker`;
						return { newName: 'Restarted Moonraker', stepStatus: 'success' };
					}),
				},
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
