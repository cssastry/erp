

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/calender/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.ebe7b788.js","_app/immutable/chunks/scheduler.4ea3d083.js","_app/immutable/chunks/index.647afbbe.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/leaves_api.5c98fa64.js","_app/immutable/chunks/axios.e7e8a860.js","_app/immutable/chunks/holidays_api.a58a5ea5.js"];
export const stylesheets = ["_app/immutable/assets/12.f3de5658.css"];
export const fonts = [];
