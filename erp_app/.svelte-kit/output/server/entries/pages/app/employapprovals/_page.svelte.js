import { c as create_ssr_component, a as subscribe, e as escape, d as each, v as validate_component, b as add_attribute } from "../../../../chunks/ssr.js";
import { w as writable } from "../../../../chunks/index.js";
import { G as Grid } from "../../../../chunks/Grid.js";
import { a as addIcon } from "../../../../chunks/add.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".task.svelte-15jlo0w.svelte-15jlo0w{background-color:var(--side-nav-color);min-height:89%;padding:1rem 2rem;border-radius:0.3rem}.banner-text.svelte-15jlo0w p.svelte-15jlo0w{font-size:15px;color:var(--color-bg-1);margin-bottom:0}.work.svelte-15jlo0w.svelte-15jlo0w{display:flex;margin-top:1rem}.todo.svelte-15jlo0w.svelte-15jlo0w,.progress.svelte-15jlo0w.svelte-15jlo0w{background-color:var(--color-bg-4);width:90%;padding:0.5rem 0.5rem;border-radius:0.5rem}.heading.svelte-15jlo0w.svelte-15jlo0w{width:100%;display:flex;justify-content:space-between;padding-bottom:0.2rem;border-bottom:1px solid var(--color-bg-1)}.heading.svelte-15jlo0w p.svelte-15jlo0w{font-size:20px;padding:0;margin:0;font-weight:600}.heading.svelte-15jlo0w img.svelte-15jlo0w{width:7%;cursor:pointer}.data.svelte-15jlo0w.svelte-15jlo0w{display:flex;justify-content:space-between;align-items:end;background-color:var(--color-bg-3);padding:0.2rem 0.4rem;margin-top:0.8rem}.details.svelte-15jlo0w p.svelte-15jlo0w{padding:0;margin:0}.details.svelte-15jlo0w .title.svelte-15jlo0w{font-size:14px;font-weight:500}.roleDepartment.svelte-15jlo0w.svelte-15jlo0w{font-size:10px !important;color:var(--color-text) !important}.popup-overlay.svelte-15jlo0w.svelte-15jlo0w{z-index:10;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.632);display:flex;justify-content:center;align-items:center}.popup.svelte-15jlo0w.svelte-15jlo0w{background-color:var(--color-bg-3);width:50%;height:auto;padding:2rem;border-radius:8px;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1)}.popup.svelte-15jlo0w form.svelte-15jlo0w{display:grid;grid-template-columns:auto;grid-row-gap:10px}form.svelte-15jlo0w input.svelte-15jlo0w,form.svelte-15jlo0w select.svelte-15jlo0w{background-color:var(--color-text);padding:0.8rem 0.8rem;border:none;margin-top:0.2rem;border-radius:0.5rem;color:var(--color-bg-4);font-size:1rem}form.svelte-15jlo0w input.svelte-15jlo0w::placeholder,form.svelte-15jlo0w select.svelte-15jlo0w::placeholder{color:var(--color-bg-4)}form.svelte-15jlo0w select option.svelte-15jlo0w{background-color:var(--color-bg-4);color:var(--color-bg-0)}.popup.svelte-15jlo0w h2.svelte-15jlo0w{margin-top:0;color:var(--color-bg-0);font-size:25px}.form-button.svelte-15jlo0w.svelte-15jlo0w{width:100%;display:flex;justify-content:flex-end}form.svelte-15jlo0w button.svelte-15jlo0w{background-color:var(--color-banner-text-2);border:none;padding:0.8rem 2.5rem;margin-top:0.8rem;border-radius:0.3rem;color:var(--color-bg-1);font-weight:600;cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showPopup, $$unsubscribe_showPopup;
  let departments = [];
  let roles = [];
  const showPopup = writable({ visible: false, formType: 0 });
  $$unsubscribe_showPopup = subscribe(showPopup, (value) => $showPopup = value);
  $$result.css.add(css);
  $$unsubscribe_showPopup();
  return `${$$result.head += `<!-- HEAD_svelte-rnwr90_START -->${$$result.title = `<title>Tasks</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-rnwr90_END -->`, ""} <div class="task svelte-15jlo0w"> ${$showPopup.visible ? `    <div class="popup-overlay svelte-15jlo0w"><div class="popup svelte-15jlo0w"><h2 class="svelte-15jlo0w">${escape($showPopup.formType === 0 ? "Add Department" : "Add Role")}</h2> <form class="svelte-15jlo0w">${$showPopup.formType === 0 ? `<input type="text" name="title" placeholder="Enter Department Name" required class="svelte-15jlo0w">` : `<select name="department" required class="svelte-15jlo0w"><option value="" disabled selected class="svelte-15jlo0w" data-svelte-h="svelte-orl0wz">Select Department</option>${each(departments, (department) => {
    return `<option${add_attribute("value", department._id, 0)} class="svelte-15jlo0w">${escape(department.title)}</option>`;
  })}</select> <input type="text" name="title" placeholder="Enter Role" required class="svelte-15jlo0w">`} <div class="form-button svelte-15jlo0w"><button type="submit" class="svelte-15jlo0w">${escape($showPopup.formType === 0 ? "Add Department" : "Add Role")}</button></div></form></div></div>` : ``} <div class="banner-text svelte-15jlo0w"><div class="work svelte-15jlo0w">${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
    default: () => {
      return `<div class="todo svelte-15jlo0w"><div class="heading svelte-15jlo0w"><p class="svelte-15jlo0w" data-svelte-h="svelte-1psq0m3">Departments</p>   <img${add_attribute("src", addIcon, 0)} alt="icon" class="svelte-15jlo0w"></div> ${each(departments, (item) => {
        return `<div class="data svelte-15jlo0w"><div class="details svelte-15jlo0w"><p class="title svelte-15jlo0w">${escape(item.title)}</p></div> </div>`;
      })}</div>`;
    }
  })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
    default: () => {
      return `<div class="progress svelte-15jlo0w"><div class="heading svelte-15jlo0w"><p class="svelte-15jlo0w" data-svelte-h="svelte-anf965">Roles</p>   <img${add_attribute("src", addIcon, 0)} alt="icon" class="svelte-15jlo0w"></div> ${each(roles, (item) => {
        return `<div class="data svelte-15jlo0w"><div class="details svelte-15jlo0w"><p class="title svelte-15jlo0w">${escape(item.title)}</p> <p class="roleDepartment svelte-15jlo0w">${escape(item.departmentId.title)}</p></div> </div>`;
      })}</div>`;
    }
  })}</div></div> </div>`;
});
export {
  Page as default
};
