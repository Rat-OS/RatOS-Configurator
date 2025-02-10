import { serverSchema } from '@/env/schema.mjs';
import { existsSync, readFileSync } from 'node:fs';
import dotenv from 'dotenv';

let alreadyLoaded = false;
export function loadEnvironment() {
	if (alreadyLoaded) {
		return serverSchema.parse(process.env);
	}
	const envFilePath = existsSync('./.env.local') ? '.env.local' : '.env';
	const envFile = readFileSync(envFilePath, 'utf8');
	const env = serverSchema.parse({ NODE_ENV: 'production', ...dotenv.parse(envFile) });
	dotenv.populate(process.env as any, env);
	alreadyLoaded = true;
	return env;
}

export function resetEnvironment() {
	alreadyLoaded = false;
}

export function reloadEnvironment() {
	resetEnvironment();
	return loadEnvironment();
}
