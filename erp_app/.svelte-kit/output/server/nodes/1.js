

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e333c662.js","_app/immutable/chunks/scheduler.4ea3d083.js","_app/immutable/chunks/index.647afbbe.js","_app/immutable/chunks/stores.17846a09.js","_app/immutable/chunks/singletons.9c3bf49e.js","_app/immutable/chunks/index.d16ca3b7.js"];
export const stylesheets = [];
export const fonts = [];
