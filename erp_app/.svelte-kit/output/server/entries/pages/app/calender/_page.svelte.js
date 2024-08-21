import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#calendar.svelte-3tx8j6{background-color:var(--side-nav-color);max-height:70%;padding:1rem 5rem;border-radius:0.3rem}.holiday.svelte-3tx8j6{background-color:var(--color-special-text)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1pxrysa_START -->${$$result.title = `<title>Calendar</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-1pxrysa_END -->`, ""} <div id="calendar" class="svelte-3tx8j6" data-svelte-h="svelte-91y12"><div class="holiday svelte-3tx8j6"></div> </div>`;
});
export {
  Page as default
};
