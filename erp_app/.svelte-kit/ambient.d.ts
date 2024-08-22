
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const pm_out_log_path: string;
	export const MAIL: string;
	export const SSH_CLIENT: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const restart_time: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_node_execpath: string;
	export const PM2_USAGE: string;
	export const SHLVL: string;
	export const npm_config_noproxy: string;
	export const username: string;
	export const OLDPWD: string;
	export const HOME: string;
	export const PM2_HOME: string;
	export const SSH_TTY: string;
	export const NVM_BIN: string;
	export const created_at: string;
	export const npm_package_json: string;
	export const pm_cwd: string;
	export const NVM_INC: string;
	export const node_version: string;
	export const namespace: string;
	export const version: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const pm_exec_path: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const filter_env: string;
	export const kill_retry_time: string;
	export const pm_id: string;
	export const unstable_restarts: string;
	export const COLOR: string;
	export const NVM_DIR: string;
	export const npm_config_metrics_registry: string;
	export const node_args: string;
	export const LOGNAME: string;
	export const _: string;
	export const versioning: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const XDG_SESSION_CLASS: string;
	export const exec_mode: string;
	export const XDG_SESSION_ID: string;
	export const TERM: string;
	export const npm_config_cache: string;
	export const windowsHide: string;
	export const NODE_APP_INSTANCE: string;
	export const axm_monitor: string;
	export const status: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const watch: string;
	export const exec_interpreter: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XDG_RUNTIME_DIR: string;
	export const prev_restart_delay: string;
	export const axm_options: string;
	export const axm_dynamic: string;
	export const vizion: string;
	export const pm_err_log_path: string;
	export const pm_pid_path: string;
	export const LANG: string;
	export const treekill: string;
	export const erp_app_DEV: string;
	export const LS_COLORS: string;
	export const npm_lifecycle_script: string;
	export const PM2_JSON_PROCESSING: string;
	export const SSH_AUTH_SOCK: string;
	export const pmx: string;
	export const SHELL: string;
	export const unique_id: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const automation: string;
	export const exit_code: string;
	export const vizion_running: string;
	export const args: string;
	export const instance_var: string;
	export const name: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const env: string;
	export const NVM_CD_FLAGS: string;
	export const SSH_CONNECTION: string;
	export const npm_config_global_prefix: string;
	export const merge_logs: string;
	export const instances: string;
	export const km_link: string;
	export const axm_actions: string;
	export const npm_command: string;
	export const autorestart: string;
	export const pm_uptime: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		pm_out_log_path: string;
		MAIL: string;
		SSH_CLIENT: string;
		USER: string;
		npm_config_user_agent: string;
		restart_time: string;
		XDG_SESSION_TYPE: string;
		npm_node_execpath: string;
		PM2_USAGE: string;
		SHLVL: string;
		npm_config_noproxy: string;
		username: string;
		OLDPWD: string;
		HOME: string;
		PM2_HOME: string;
		SSH_TTY: string;
		NVM_BIN: string;
		created_at: string;
		npm_package_json: string;
		pm_cwd: string;
		NVM_INC: string;
		node_version: string;
		namespace: string;
		version: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		pm_exec_path: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		filter_env: string;
		kill_retry_time: string;
		pm_id: string;
		unstable_restarts: string;
		COLOR: string;
		NVM_DIR: string;
		npm_config_metrics_registry: string;
		node_args: string;
		LOGNAME: string;
		_: string;
		versioning: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		XDG_SESSION_CLASS: string;
		exec_mode: string;
		XDG_SESSION_ID: string;
		TERM: string;
		npm_config_cache: string;
		windowsHide: string;
		NODE_APP_INSTANCE: string;
		axm_monitor: string;
		status: string;
		npm_config_node_gyp: string;
		PATH: string;
		watch: string;
		exec_interpreter: string;
		NODE: string;
		npm_package_name: string;
		XDG_RUNTIME_DIR: string;
		prev_restart_delay: string;
		axm_options: string;
		axm_dynamic: string;
		vizion: string;
		pm_err_log_path: string;
		pm_pid_path: string;
		LANG: string;
		treekill: string;
		erp_app_DEV: string;
		LS_COLORS: string;
		npm_lifecycle_script: string;
		PM2_JSON_PROCESSING: string;
		SSH_AUTH_SOCK: string;
		pmx: string;
		SHELL: string;
		unique_id: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		automation: string;
		exit_code: string;
		vizion_running: string;
		args: string;
		instance_var: string;
		name: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		npm_execpath: string;
		env: string;
		NVM_CD_FLAGS: string;
		SSH_CONNECTION: string;
		npm_config_global_prefix: string;
		merge_logs: string;
		instances: string;
		km_link: string;
		axm_actions: string;
		npm_command: string;
		autorestart: string;
		pm_uptime: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
