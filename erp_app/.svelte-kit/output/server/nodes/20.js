

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/payslips/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.630d52a3.js","_app/immutable/chunks/scheduler.4ea3d083.js","_app/immutable/chunks/index.647afbbe.js","_app/immutable/chunks/each.cda2efdc.js","_app/immutable/chunks/Grid.84575ac7.js","_app/immutable/chunks/index.d16ca3b7.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/typeof.a9f1a881.js"];
export const stylesheets = ["_app/immutable/assets/20.7a7ae0b6.css","_app/immutable/assets/Grid.8c88aa22.css"];
export const fonts = [];
