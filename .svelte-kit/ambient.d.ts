
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
	export const NODE_VERSION: string;
	export const ALLUSERSPROFILE: string;
	export const APPDATA: string;
	export const COLOR: string;
	export const COLORTERM: string;
	export const COMMONPROGRAMFILES: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const COMSPEC: string;
	export const DriverData: string;
	export const EDITOR: string;
	export const FIG_JETBRAINS_SHELL_INTEGRATION: string;
	export const FPS_BROWSER_APP_PROFILE_STRING: string;
	export const FPS_BROWSER_USER_PROFILE_STRING: string;
	export const GIT_EXEC_PATH: string;
	export const GIT_PREFIX: string;
	export const GNUPLOT_LIB: string;
	export const HOME: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const husky_skip_init: string;
	export const IDEA_INITIAL_DIRECTORY: string;
	export const INIT_CWD: string;
	export const LC_CTYPE: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const MSYSTEM: string;
	export const NODE: string;
	export const npm_command: string;
	export const npm_config_cache: string;
	export const npm_config_engine_strict: string;
	export const npm_config_globalconfig: string;
	export const npm_config_global_prefix: string;
	export const npm_config_init_module: string;
	export const npm_config_local_prefix: string;
	export const npm_config_metrics_registry: string;
	export const npm_config_node_gyp: string;
	export const npm_config_noproxy: string;
	export const npm_config_prefix: string;
	export const npm_config_resolution_mode: string;
	export const npm_config_userconfig: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_json: string;
	export const npm_package_name: string;
	export const npm_package_version: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const OneDrive: string;
	export const OS: string;
	export const PATH: string;
	export const PATHEXT: string;
	export const PLINK_PROTOCOL: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const PROGRAMFILES: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const PWD: string;
	export const SESSIONNAME: string;
	export const SHLVL: string;
	export const SYSTEMDRIVE: string;
	export const SYSTEMROOT: string;
	export const TEMP: string;
	export const TERM: string;
	export const TERMINAL_EMULATOR: string;
	export const TERM_SESSION_ID: string;
	export const TMP: string;
	export const TMPDIR: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VBOX_MSI_INSTALL_PATH: string;
	export const WINDIR: string;
	export const ZES_ENABLE_SYSMAN: string;
	export const _: string;
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
		NODE_VERSION: string;
		ALLUSERSPROFILE: string;
		APPDATA: string;
		COLOR: string;
		COLORTERM: string;
		COMMONPROGRAMFILES: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		COMSPEC: string;
		DriverData: string;
		EDITOR: string;
		FIG_JETBRAINS_SHELL_INTEGRATION: string;
		FPS_BROWSER_APP_PROFILE_STRING: string;
		FPS_BROWSER_USER_PROFILE_STRING: string;
		GIT_EXEC_PATH: string;
		GIT_PREFIX: string;
		GNUPLOT_LIB: string;
		HOME: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		husky_skip_init: string;
		IDEA_INITIAL_DIRECTORY: string;
		INIT_CWD: string;
		LC_CTYPE: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		MSYSTEM: string;
		NODE: string;
		npm_command: string;
		npm_config_cache: string;
		npm_config_engine_strict: string;
		npm_config_globalconfig: string;
		npm_config_global_prefix: string;
		npm_config_init_module: string;
		npm_config_local_prefix: string;
		npm_config_metrics_registry: string;
		npm_config_node_gyp: string;
		npm_config_noproxy: string;
		npm_config_prefix: string;
		npm_config_resolution_mode: string;
		npm_config_userconfig: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_json: string;
		npm_package_name: string;
		npm_package_version: string;
		NUMBER_OF_PROCESSORS: string;
		OneDrive: string;
		OS: string;
		PATH: string;
		PATHEXT: string;
		PLINK_PROTOCOL: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		PROGRAMFILES: string;
		ProgramW6432: string;
		PROMPT: string;
		PSModulePath: string;
		PUBLIC: string;
		PWD: string;
		SESSIONNAME: string;
		SHLVL: string;
		SYSTEMDRIVE: string;
		SYSTEMROOT: string;
		TEMP: string;
		TERM: string;
		TERMINAL_EMULATOR: string;
		TERM_SESSION_ID: string;
		TMP: string;
		TMPDIR: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VBOX_MSI_INSTALL_PATH: string;
		WINDIR: string;
		ZES_ENABLE_SYSMAN: string;
		_: string;
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