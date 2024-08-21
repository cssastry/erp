

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/all/services/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.f4b0e02d.js","_app/immutable/chunks/scheduler.4ea3d083.js","_app/immutable/chunks/index.647afbbe.js","_app/immutable/chunks/each.cda2efdc.js","_app/immutable/chunks/VerticalSpacer.930d603e.js","_app/immutable/chunks/Grid.84575ac7.js","_app/immutable/chunks/index.d16ca3b7.js"];
export const stylesheets = ["_app/immutable/assets/10.9e8d4380.css","_app/immutable/assets/VerticalSpacer.f4b01684.css","_app/immutable/assets/Grid.8c88aa22.css"];
export const fonts = [];
