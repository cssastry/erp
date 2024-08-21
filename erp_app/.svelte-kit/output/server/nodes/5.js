

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.7e22c21b.js","_app/immutable/chunks/scheduler.4ea3d083.js","_app/immutable/chunks/index.647afbbe.js"];
export const stylesheets = [];
export const fonts = [];
