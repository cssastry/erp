import * as universal from '../entries/pages/all/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/all/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/all/+page.ts";
export const imports = ["_app/immutable/nodes/6.74cda4ed.js","_app/immutable/chunks/scheduler.4ea3d083.js","_app/immutable/chunks/index.647afbbe.js","_app/immutable/chunks/Grid.84575ac7.js","_app/immutable/chunks/index.d16ca3b7.js","_app/immutable/chunks/VerticalSpacer.930d603e.js","_app/immutable/chunks/each.cda2efdc.js","_app/immutable/chunks/nehwe.297b419f.js","_app/immutable/chunks/about us image.f8a4cc5d.js","_app/immutable/chunks/location.a782c661.js","_app/immutable/chunks/mail.ad6e57be.js","_app/immutable/chunks/phone.3cb193be.js"];
export const stylesheets = ["_app/immutable/assets/6.b6c8f682.css","_app/immutable/assets/Grid.8c88aa22.css","_app/immutable/assets/VerticalSpacer.f4b01684.css"];
export const fonts = [];
