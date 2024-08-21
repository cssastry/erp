

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/14.a110586f.js","_app/immutable/chunks/scheduler.4ea3d083.js","_app/immutable/chunks/index.647afbbe.js"];
export const stylesheets = ["_app/immutable/assets/14.04d51dfd.css"];
export const fonts = [];
