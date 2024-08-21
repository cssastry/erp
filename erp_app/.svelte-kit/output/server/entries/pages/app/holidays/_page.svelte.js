import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component, d as each, e as escape } from "../../../../chunks/ssr.js";
import { G as Grid } from "../../../../chunks/Grid.js";
import { c as calenderIcon } from "../../../../chunks/calender.js";
import { w as writable } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-d251bs.svelte-d251bs{margin:0;padding:0}.leaves.svelte-d251bs.svelte-d251bs{background-color:var(--side-nav-color);min-height:93%;padding:1rem 2rem;border-radius:0.3rem}.banner-text.svelte-d251bs h6.svelte-d251bs{font-size:24px;color:var(--color-banner-text-1);margin:0}.banner-text.svelte-d251bs p.svelte-d251bs{font-size:15px;color:var(--color-bg-1);margin-bottom:0}.head.svelte-d251bs.svelte-d251bs{display:flex;justify-content:space-between}.buttons.svelte-d251bs.svelte-d251bs{display:flex;justify-content:space-between;gap:2rem}.buttons.svelte-d251bs button.svelte-d251bs{font-size:16px;font-weight:500;padding:0.5rem 1.2rem;border-radius:0.3rem;cursor:pointer}.calender.svelte-d251bs.svelte-d251bs{background-color:transparent;border:1px solid var(--color-special-text);color:var(--color-special-text)}.calender.svelte-d251bs img.svelte-d251bs{width:13%}.leave.svelte-d251bs.svelte-d251bs{background-color:var(--color-special-text);color:var(--color-bg-2);border:none}.leaves-list.svelte-d251bs.svelte-d251bs{margin-top:1.5rem}.leaves-tab.svelte-d251bs.svelte-d251bs{background-color:var(--color-bg-3);padding:0.5rem 1rem;border-radius:0.5rem;overflow-y:scroll}.leaves-head.svelte-d251bs.svelte-d251bs{margin-bottom:0.5rem;display:flex;justify-content:space-between;align-items:center}.details.svelte-d251bs .title.svelte-d251bs{font-size:1.2rem}.details.svelte-d251bs .duration.svelte-d251bs{font-size:0.8rem;color:var(--color-text)}.popup-overlay.svelte-d251bs.svelte-d251bs{z-index:10;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.632);display:flex;justify-content:center;align-items:center}.popup.svelte-d251bs.svelte-d251bs{background-color:var(--color-bg-3);width:50%;height:auto;padding:2rem;border-radius:8px;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1)}.popup.svelte-d251bs form.svelte-d251bs{display:grid;grid-template-columns:auto;grid-row-gap:10px}form.svelte-d251bs input.svelte-d251bs{background-color:var(--color-text);padding:0.8rem 0.8rem;border:none;margin-top:0.2rem;border-radius:0.5rem;color:var(--color-bg-4);font-size:1rem}form.svelte-d251bs input.svelte-d251bs::placeholder{color:var(--color-bg-4)}.popup.svelte-d251bs h2.svelte-d251bs{margin-top:0;color:var(--color-bg-0);font-size:25px}.form-button.svelte-d251bs.svelte-d251bs{width:100%;display:flex;justify-content:flex-end}form.svelte-d251bs button.svelte-d251bs{background-color:var(--color-banner-text-2);border:none;padding:0.8rem 2.5rem;margin-top:0.8rem;border-radius:0.3rem;color:var(--color-bg-1);font-weight:600;cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showpopup, $$unsubscribe_showpopup;
  let leaves = [];
  const showpopup = writable({ visible: false });
  $$unsubscribe_showpopup = subscribe(showpopup, (value) => $showpopup = value);
  $$result.css.add(css);
  $$unsubscribe_showpopup();
  return `${$$result.head += `<!-- HEAD_svelte-1doixgz_START -->${$$result.title = `<title>Holidays</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-1doixgz_END -->`, ""} <div class="leaves svelte-d251bs"> ${$showpopup.visible ? `    <div class="popup-overlay svelte-d251bs"><div class="popup svelte-d251bs"><h2 class="svelte-d251bs" data-svelte-h="svelte-1egccu7">Add Holiday</h2> <form class="svelte-d251bs" data-svelte-h="svelte-1qbbsmh"><input type="text" name="title" placeholder="Enter Title" required class="svelte-d251bs"> <input type="date" name="date" placeholder="Start Date" required class="svelte-d251bs"> <div class="form-button svelte-d251bs"><button type="submit" class="svelte-d251bs">Add</button></div></form></div></div>` : ``} <div class="banner-text svelte-d251bs"><div class="head svelte-d251bs"><h6 class="svelte-d251bs" data-svelte-h="svelte-126wlx7">Holidays</h6> <div class="buttons svelte-d251bs"><button class="calender svelte-d251bs" data-svelte-h="svelte-9sw262"><img${add_attribute("src", calenderIcon, 0)} alt="" class="svelte-d251bs">
                        Calender</button> <button class="leave svelte-d251bs" data-svelte-h="svelte-1nrlvem">Add Holiday</button></div></div> <div class="leaves-list svelte-d251bs">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${each(leaves, (item) => {
        return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 3, lg: 3 }, {}, {
          default: () => {
            return `<div class="leaves-tab svelte-d251bs"><div class="leaves-head svelte-d251bs"><div class="details svelte-d251bs"><p class="title svelte-d251bs">${escape(item.title)}</p> <p class="duration svelte-d251bs">${escape(item.date)}</p></div> </div></div> `;
          }
        })}`;
      })}`;
    }
  })}</div></div> </div>`;
});
export {
  Page as default
};
