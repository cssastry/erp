import { c as create_ssr_component } from "../../../chunks/ssr.js";
/* empty css                      */const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-1bedqpq{display:flex;flex-direction:column;min-height:100vh}main.svelte-1bedqpq{flex:1;display:flex;flex-direction:column;width:100%;margin:0 auto;box-sizing:border-box}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-1bedqpq"><main class="svelte-1bedqpq">${slots.default ? slots.default({}) : ``}</main></div> <footer data-svelte-h="svelte-ix7jxo"></footer>`;
});
export {
  Layout as default
};
