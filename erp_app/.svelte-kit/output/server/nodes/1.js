

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.523b24b8.js","_app/immutable/chunks/scheduler.4ea3d083.js","_app/immutable/chunks/index.647afbbe.js","_app/immutable/chunks/stores.96e651c1.js","_app/immutable/chunks/singletons.072167d8.js","_app/immutable/chunks/index.d16ca3b7.js"];
export const stylesheets = [];
export const fonts = [];
