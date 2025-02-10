import { serverSchema } from '@/env/schema.mjs';
import { existsSync, readFileSync } from 'node:fs';
import dotenv from 'dotenv';
import path from 'node:path';

let alreadyLoaded = false;
export function loadEnvironment(filePath?: string) {
	if (alreadyLoaded) {
		return serverSchema.parse(process.env);
	}
	const envFilePath = filePath ?? (existsSync('./.env.local') ? '.env.local' : '.env');
	if (!existsSync(envFilePath)) {
		throw new Error(`Environment file ${path.resolve(envFilePath)} not found`);
	}
	const envFile = readFileSync(envFilePath, 'utf8');
	const env = serverSchema.parse({ NODE_ENV: 'production', ...dotenv.parse(envFile) });
	dotenv.populate(process.env as any, env, { override: true });
	alreadyLoaded = true;
	return env;
}

export function resetEnvironment() {
	alreadyLoaded = false;
}

export function reloadEnvironment(filePath?: string) {
	resetEnvironment();
	return loadEnvironment(filePath);
}
