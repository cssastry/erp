import { c as create_ssr_component, v as validate_component, d as each, b as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { G as Grid } from "../../../../chunks/Grid.js";
import { p as personIcon } from "../../../../chunks/profile.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1d0b9bs.svelte-1d0b9bs{margin:0;padding:0}.leaves.svelte-1d0b9bs.svelte-1d0b9bs{background-color:var(--side-nav-color);min-height:93%;padding:1rem 2rem;border-radius:0.3rem}.banner-text.svelte-1d0b9bs h6.svelte-1d0b9bs{font-size:24px;color:var(--color-banner-text-1);margin:0}.banner-text.svelte-1d0b9bs p.svelte-1d0b9bs{font-size:15px;color:var(--color-bg-1);margin-bottom:0}.head.svelte-1d0b9bs.svelte-1d0b9bs{display:flex;justify-content:space-between;padding-bottom:0.5rem;border-bottom:1px solid var(--color-bg-2)}.buttons.svelte-1d0b9bs.svelte-1d0b9bs{display:flex;justify-content:space-between;gap:1rem;border:none}.buttons.svelte-1d0b9bs .approve.svelte-1d0b9bs{background-color:#249929}.buttons.svelte-1d0b9bs .reject.svelte-1d0b9bs{background-color:#D70C0C}.leaves-list.svelte-1d0b9bs.svelte-1d0b9bs{margin-top:1.5rem}.leaves-tab.svelte-1d0b9bs.svelte-1d0b9bs{background-color:var(--color-bg-3);padding:0.5rem 1rem;border-radius:0.5rem;min-height:10rem;max-height:10rem;overflow-y:scroll}.leaves-head.svelte-1d0b9bs.svelte-1d0b9bs{margin-bottom:0.5rem;display:flex;justify-content:space-between;align-items:center;padding:0 0 0.5rem 0;border-bottom:1px solid var(--color-bg-0)}.data.svelte-1d0b9bs.svelte-1d0b9bs{display:flex;gap:1rem}.details.svelte-1d0b9bs .title.svelte-1d0b9bs{font-size:1.2rem}.details.svelte-1d0b9bs .duration.svelte-1d0b9bs{font-size:0.8rem;color:var(--color-text)}.status.svelte-1d0b9bs p.svelte-1d0b9bs{font-size:0.8rem}.status.svelte-1d0b9bs.svelte-1d0b9bs{padding:0.2rem 0.8rem;border-radius:0.3rem}.leaves-tab.svelte-1d0b9bs .reason.svelte-1d0b9bs{font-size:0.7rem;color:var(--color-text)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let leaves = [];
  const formatDuration = (startDate, endDate) => {
    return `${startDate} - ${endDate}`;
  };
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1fh00ok_START -->${$$result.title = `<title>Approvals</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-1fh00ok_END -->`, ""} <div class="leaves svelte-1d0b9bs"><div class="banner-text svelte-1d0b9bs"><div class="head svelte-1d0b9bs" data-svelte-h="svelte-1o9z0j4"><h6 class="svelte-1d0b9bs">Approvals</h6></div> <div class="leaves-list svelte-1d0b9bs">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${each(leaves, (item) => {
        return `${item.status === 0 ? `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
          default: () => {
            return `<div class="leaves-tab svelte-1d0b9bs"><div class="leaves-head svelte-1d0b9bs"><div class="data svelte-1d0b9bs"><img${add_attribute("src", personIcon, 0)} alt="avatar"> <div class="details svelte-1d0b9bs"><p class="title svelte-1d0b9bs">${escape(item.title)}</p> <p class="duration svelte-1d0b9bs">${escape(formatDuration(item.startDate, item.endDate))}</p> </div></div> <div class="buttons svelte-1d0b9bs"><button class="status approve buttons svelte-1d0b9bs" data-svelte-h="svelte-1pa8iei"><p class="svelte-1d0b9bs">Approve</p></button> <button class="status reject buttons svelte-1d0b9bs" data-svelte-h="svelte-1rtswpt"><p class="svelte-1d0b9bs">Reject</p></button> </div></div> <p class="reason svelte-1d0b9bs">${escape(item.reason)}</p></div> `;
          }
        })}` : ``}`;
      })}`;
    }
  })}</div></div> </div>`;
});
export {
  Page as default
};
