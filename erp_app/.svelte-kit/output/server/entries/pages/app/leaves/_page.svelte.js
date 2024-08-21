import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component, d as each, e as escape } from "../../../../chunks/ssr.js";
import { G as Grid } from "../../../../chunks/Grid.js";
import { c as calenderIcon } from "../../../../chunks/calender.js";
import { w as writable } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-snk9kp.svelte-snk9kp{margin:0;padding:0}.leaves.svelte-snk9kp.svelte-snk9kp{background-color:var(--side-nav-color);min-height:93%;padding:1rem 2rem;border-radius:0.3rem}.banner-text.svelte-snk9kp h6.svelte-snk9kp{font-size:24px;color:var(--color-banner-text-1);margin:0}.banner-text.svelte-snk9kp p.svelte-snk9kp{font-size:15px;color:var(--color-bg-1);margin-bottom:0}.head.svelte-snk9kp.svelte-snk9kp{display:flex;justify-content:space-between}.buttons.svelte-snk9kp.svelte-snk9kp{display:flex;justify-content:space-between;gap:2rem}.buttons.svelte-snk9kp button.svelte-snk9kp{font-size:16px;font-weight:500;padding:0.5rem 1.2rem;border-radius:0.3rem;cursor:pointer}.calender.svelte-snk9kp.svelte-snk9kp{background-color:transparent;border:1px solid var(--color-special-text);color:var(--color-special-text)}.calender.svelte-snk9kp img.svelte-snk9kp{width:13%}.leave.svelte-snk9kp.svelte-snk9kp{background-color:var(--color-special-text);color:var(--color-bg-2);border:none}.leaves-list.svelte-snk9kp.svelte-snk9kp{margin-top:1.5rem}.leaves-tab.svelte-snk9kp.svelte-snk9kp{background-color:var(--color-bg-3);padding:0.5rem 1rem;border-radius:0.5rem;min-height:10rem;max-height:10rem;overflow-y:scroll}.leaves-head.svelte-snk9kp.svelte-snk9kp{margin-bottom:0.5rem;display:flex;justify-content:space-between;align-items:center;padding:0 0 0.5rem 0;border-bottom:1px solid var(--color-bg-0)}.details.svelte-snk9kp .title.svelte-snk9kp{font-size:1.2rem}.details.svelte-snk9kp .duration.svelte-snk9kp{font-size:0.8rem;color:var(--color-text)}.status.svelte-snk9kp p.svelte-snk9kp{font-size:0.8rem}.status.svelte-snk9kp.svelte-snk9kp{padding:0.2rem 0.8rem;background-color:#249929;border-radius:0.3rem}.leaves-tab.svelte-snk9kp .reason.svelte-snk9kp{font-size:0.7rem;color:var(--color-text)}.popup-overlay.svelte-snk9kp.svelte-snk9kp{z-index:10;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.632);display:flex;justify-content:center;align-items:center}.popup.svelte-snk9kp.svelte-snk9kp{background-color:var(--color-bg-3);width:50%;height:auto;padding:2rem;border-radius:8px;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1)}.popup.svelte-snk9kp form.svelte-snk9kp{display:grid;grid-template-columns:auto;grid-row-gap:10px}form.svelte-snk9kp input.svelte-snk9kp,form.svelte-snk9kp textarea.svelte-snk9kp{background-color:var(--color-text);padding:0.8rem 0.8rem;border:none;margin-top:0.2rem;border-radius:0.5rem;color:var(--color-bg-4);font-size:1rem}form.svelte-snk9kp input.svelte-snk9kp::placeholder,form.svelte-snk9kp textarea.svelte-snk9kp::placeholder{color:var(--color-bg-4)}.popup.svelte-snk9kp h2.svelte-snk9kp{margin-top:0;color:var(--color-bg-0);font-size:25px}.form-button.svelte-snk9kp.svelte-snk9kp{width:100%;display:flex;justify-content:flex-end}form.svelte-snk9kp button.svelte-snk9kp{background-color:var(--color-banner-text-2);border:none;padding:0.8rem 2.5rem;margin-top:0.8rem;border-radius:0.3rem;color:var(--color-bg-1);font-weight:600;cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showpopup, $$unsubscribe_showpopup;
  let leaves = [];
  const formatDuration = (startDate, endDate) => {
    return `${startDate} - ${endDate}`;
  };
  const getStatusText = (status) => {
    if (status === 0)
      return "Pending";
    else if (status === 1)
      return "Approved";
    else if (status === 2)
      return "Rejected";
    else
      return "Unknown";
  };
  const getStatusColor = (
    /** @type {number} */
    (status) => {
      if (status === 0)
        return "#AFA806";
      else if (status === 1)
        return "#249929";
      else if (status === 2)
        return "#D70C0C";
      else
        return "transparent";
    }
  );
  const showpopup = writable({ visible: false });
  $$unsubscribe_showpopup = subscribe(showpopup, (value) => $showpopup = value);
  $$result.css.add(css);
  $$unsubscribe_showpopup();
  return `${$$result.head += `<!-- HEAD_svelte-1oyom3k_START -->${$$result.title = `<title>Leaves</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-1oyom3k_END -->`, ""} <div class="leaves svelte-snk9kp"> ${$showpopup.visible ? `    <div class="popup-overlay svelte-snk9kp"><div class="popup svelte-snk9kp"><h2 class="svelte-snk9kp" data-svelte-h="svelte-qzc0m7">Raise a Ticket</h2> <form class="svelte-snk9kp" data-svelte-h="svelte-sq9v25"><input type="text" name="title" placeholder="Enter Title" required class="svelte-snk9kp"> <input type="date" name="startDate" placeholder="Start Date" required class="svelte-snk9kp"> <input type="date" name="endDate" placeholder="End Date" required class="svelte-snk9kp"> <textarea name="reason" placeholder="Enter Reason" rows="4" required class="svelte-snk9kp"></textarea> <div class="form-button svelte-snk9kp"><button type="submit" class="svelte-snk9kp">Apply Leave</button></div></form></div></div>` : ``} <div class="banner-text svelte-snk9kp"><div class="head svelte-snk9kp"><h6 class="svelte-snk9kp" data-svelte-h="svelte-pltcgr">Leave Managment</h6> <div class="buttons svelte-snk9kp"><button class="calender svelte-snk9kp" data-svelte-h="svelte-1c45q0q"><img${add_attribute("src", calenderIcon, 0)} alt="" class="svelte-snk9kp">
                    Calender</button> <button class="leave svelte-snk9kp" data-svelte-h="svelte-p4zci2">Apply Leave</button></div></div> <div class="leaves-list svelte-snk9kp">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${leaves.length > 0 ? `${each(leaves, (item) => {
        return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 3, lg: 3 }, {}, {
          default: () => {
            return `<div class="leaves-tab svelte-snk9kp"><div class="leaves-head svelte-snk9kp"><div class="details svelte-snk9kp"><p class="title svelte-snk9kp">${escape(item.title)}</p> <p class="duration svelte-snk9kp">${escape(formatDuration(item.startDate, item.endDate))}</p></div> <div class="status svelte-snk9kp" style="${"background-color: " + escape(getStatusColor(item.status), true) + ";"}"><p class="svelte-snk9kp">${escape(getStatusText(item.status))}</p> </div></div> <p class="reason svelte-snk9kp">${escape(item.reason)}</p></div> `;
          }
        })}`;
      })}` : `<p class="svelte-snk9kp" data-svelte-h="svelte-6j2ijw">No leaves applied</p>`}`;
    }
  })}</div></div> </div>`;
});
export {
  Page as default
};
