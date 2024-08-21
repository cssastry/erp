import { c as create_ssr_component, a as subscribe, v as validate_component, d as each, e as escape } from "../../../../chunks/ssr.js";
import { G as Grid } from "../../../../chunks/Grid.js";
import { w as writable } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-xju7ya.svelte-xju7ya{margin:0;padding:0}.leaves.svelte-xju7ya.svelte-xju7ya{background-color:var(--side-nav-color);min-height:93%;padding:1rem 2rem;border-radius:0.3rem}.banner-text.svelte-xju7ya h6.svelte-xju7ya{font-size:24px;color:var(--color-banner-text-1);margin:0}.banner-text.svelte-xju7ya p.svelte-xju7ya{font-size:15px;color:var(--color-bg-1);margin-bottom:0}.head.svelte-xju7ya.svelte-xju7ya{display:flex;justify-content:space-between}.buttons.svelte-xju7ya.svelte-xju7ya{display:flex;justify-content:space-between;gap:2rem}.buttons.svelte-xju7ya button.svelte-xju7ya{font-size:16px;font-weight:500;padding:0.5rem 1.2rem;border-radius:0.3rem;cursor:pointer}.leave.svelte-xju7ya.svelte-xju7ya{background-color:var(--color-special-text);color:var(--color-bg-2);border:none}.leaves-list.svelte-xju7ya.svelte-xju7ya{margin-top:1.5rem}.leaves-tab.svelte-xju7ya.svelte-xju7ya{background-color:var(--color-bg-3);padding:0.5rem 1rem;border-radius:0.5rem;overflow-y:scroll}.leaves-head.svelte-xju7ya.svelte-xju7ya{margin-bottom:0.5rem;display:flex;justify-content:space-between;align-items:center}.details.svelte-xju7ya .title.svelte-xju7ya{font-size:1.2rem}.popup-overlay.svelte-xju7ya.svelte-xju7ya{z-index:10;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.632);display:flex;justify-content:center;align-items:center}.popup.svelte-xju7ya.svelte-xju7ya{background-color:var(--color-bg-3);width:50%;height:auto;padding:2rem;border-radius:8px;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1)}.popup.svelte-xju7ya form.svelte-xju7ya{display:grid;grid-template-columns:auto;grid-row-gap:10px}form.svelte-xju7ya input.svelte-xju7ya{background-color:var(--color-text);padding:0.8rem 0.8rem;border:none;margin-top:0.2rem;border-radius:0.5rem;color:var(--color-bg-4);font-size:1rem}form.svelte-xju7ya input.svelte-xju7ya::placeholder{color:var(--color-bg-4)}.popup.svelte-xju7ya h2.svelte-xju7ya{margin-top:0;color:var(--color-bg-0);font-size:25px}.form-button.svelte-xju7ya.svelte-xju7ya{width:100%;display:flex;justify-content:flex-end}form.svelte-xju7ya button.svelte-xju7ya{background-color:var(--color-banner-text-2);border:none;padding:0.8rem 2.5rem;margin-top:0.8rem;border-radius:0.3rem;color:var(--color-bg-1);font-weight:600;cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showpopup, $$unsubscribe_showpopup;
  let leaves = [];
  const showpopup = writable({ visible: false });
  $$unsubscribe_showpopup = subscribe(showpopup, (value) => $showpopup = value);
  $$result.css.add(css);
  $$unsubscribe_showpopup();
  return `${$$result.head += `<!-- HEAD_svelte-igo6gg_START -->${$$result.title = `<title>Tech Stack</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-igo6gg_END -->`, ""} <div class="leaves svelte-xju7ya"> ${$showpopup.visible ? `    <div class="popup-overlay svelte-xju7ya"><div class="popup svelte-xju7ya"><h2 class="svelte-xju7ya" data-svelte-h="svelte-h27uuz">Add TechStack</h2> <form class="svelte-xju7ya" data-svelte-h="svelte-xus2ot"><input type="text" name="title" placeholder="Enter Title" required class="svelte-xju7ya"> <div class="form-button svelte-xju7ya"><button type="submit" class="svelte-xju7ya">Add</button></div></form></div></div>` : ``} <div class="banner-text svelte-xju7ya"><div class="head svelte-xju7ya"><h6 class="svelte-xju7ya" data-svelte-h="svelte-1fto6gy">Tech Stack</h6> <div class="buttons svelte-xju7ya"><button class="leave svelte-xju7ya" data-svelte-h="svelte-w49sgq">Add TechStack</button></div></div> <div class="leaves-list svelte-xju7ya">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${each(leaves, (item) => {
        return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 3, lg: 3 }, {}, {
          default: () => {
            return `<div class="leaves-tab svelte-xju7ya"><div class="leaves-head svelte-xju7ya"><div class="details svelte-xju7ya"><p class="title svelte-xju7ya">${escape(item.title)}</p></div> </div></div> `;
          }
        })}`;
      })}`;
    }
  })}</div></div> </div>`;
});
export {
  Page as default
};
