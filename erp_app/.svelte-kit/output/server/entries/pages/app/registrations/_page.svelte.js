import { c as create_ssr_component, a as subscribe, d as each, v as validate_component, b as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { G as Grid } from "../../../../chunks/Grid.js";
import { p as personIcon } from "../../../../chunks/profile.js";
import { w as writable } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-6n7qcv.svelte-6n7qcv{margin:0;padding:0}.leaves.svelte-6n7qcv.svelte-6n7qcv{background-color:var(--side-nav-color);min-height:93%;padding:1rem 2rem;border-radius:0.3rem}.banner-text.svelte-6n7qcv h6.svelte-6n7qcv{font-size:24px;color:var(--color-banner-text-1);margin:0}.banner-text.svelte-6n7qcv p.svelte-6n7qcv{font-size:15px;color:var(--color-bg-1);margin-bottom:0}.head.svelte-6n7qcv.svelte-6n7qcv{display:flex;justify-content:space-between;padding-bottom:0.5rem;border-bottom:1px solid var(--color-bg-2)}.buttons.svelte-6n7qcv button.svelte-6n7qcv{cursor:pointer}.buttons.svelte-6n7qcv.svelte-6n7qcv{display:flex;justify-content:space-between;gap:1rem;border:none}.buttons.svelte-6n7qcv .approve.svelte-6n7qcv{background-color:#249929}.buttons.svelte-6n7qcv .reject.svelte-6n7qcv{background-color:#D70C0C}.leaves-list.svelte-6n7qcv.svelte-6n7qcv{margin-top:1.5rem}.leaves-tab.svelte-6n7qcv.svelte-6n7qcv{background-color:var(--color-bg-3);padding:0.5rem 1rem;border-radius:0.5rem;overflow-y:scroll}.leaves-head.svelte-6n7qcv.svelte-6n7qcv{margin-bottom:0.5rem;display:flex;justify-content:space-between;align-items:center}.data.svelte-6n7qcv.svelte-6n7qcv{display:flex;gap:1rem}.details.svelte-6n7qcv .title.svelte-6n7qcv{font-size:1.2rem}.details.svelte-6n7qcv .duration.svelte-6n7qcv{font-size:0.8rem;color:var(--color-text)}.status.svelte-6n7qcv p.svelte-6n7qcv{font-size:0.8rem}.status.svelte-6n7qcv.svelte-6n7qcv{padding:0.2rem 0.8rem;border-radius:0.3rem}.popup-overlay.svelte-6n7qcv.svelte-6n7qcv{z-index:10;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.632);display:flex;justify-content:center;align-items:center}.popup.svelte-6n7qcv.svelte-6n7qcv{background-color:var(--color-bg-3);width:50%;height:auto;padding:2rem;border-radius:8px;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1)}.popup.svelte-6n7qcv form.svelte-6n7qcv{display:grid;grid-template-columns:auto;grid-row-gap:10px}form.svelte-6n7qcv input.svelte-6n7qcv,form.svelte-6n7qcv select.svelte-6n7qcv{background-color:var(--color-text);padding:0.8rem 0.8rem;border:none;margin-top:0.2rem;border-radius:0.5rem;color:var(--color-bg-4);font-size:1rem}form.svelte-6n7qcv input.svelte-6n7qcv::placeholder,form.svelte-6n7qcv select.svelte-6n7qcv::placeholder{color:var(--color-bg-4)}.popup.svelte-6n7qcv h2.svelte-6n7qcv{margin-top:0;color:var(--color-bg-0);font-size:25px}.form-button.svelte-6n7qcv.svelte-6n7qcv{width:100%;display:flex;justify-content:flex-end}form.svelte-6n7qcv select option.svelte-6n7qcv{background-color:var(--color-bg-4);color:var(--color-bg-0)}form.svelte-6n7qcv button.svelte-6n7qcv{background-color:var(--color-banner-text-2);border:none;padding:0.8rem 2.5rem;margin-top:0.8rem;border-radius:0.3rem;color:var (--color-bg-1);font-weight:600;cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedEmployeeId;
  let $selectedDepartment, $$unsubscribe_selectedDepartment;
  let $showpopup, $$unsubscribe_showpopup;
  let $filteredRoles, $$unsubscribe_filteredRoles;
  let employes = [];
  let departments = [];
  let roles = [];
  let selectedDepartment = writable(null);
  $$unsubscribe_selectedDepartment = subscribe(selectedDepartment, (value) => $selectedDepartment = value);
  let filteredRoles = writable([]);
  $$unsubscribe_filteredRoles = subscribe(filteredRoles, (value) => $filteredRoles = value);
  const selectedEmployeeId = writable(null);
  $$unsubscribe_selectedEmployeeId = subscribe(selectedEmployeeId, (value) => value);
  const showpopup = writable({ visible: false });
  $$unsubscribe_showpopup = subscribe(showpopup, (value) => $showpopup = value);
  $$result.css.add(css);
  {
    if ($selectedDepartment) {
      filteredRoles.set(roles.filter((role) => role.departmentId._id === $selectedDepartment));
    }
  }
  $$unsubscribe_selectedEmployeeId();
  $$unsubscribe_selectedDepartment();
  $$unsubscribe_showpopup();
  $$unsubscribe_filteredRoles();
  return `${$$result.head += `<!-- HEAD_svelte-1wzsxgc_START -->${$$result.title = `<title>Employ Registrations</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-1wzsxgc_END -->`, ""} <div class="leaves svelte-6n7qcv"> ${$showpopup.visible ? `  <div class="popup-overlay svelte-6n7qcv">  <div class="popup svelte-6n7qcv"><h2 class="svelte-6n7qcv" data-svelte-h="svelte-z9e4qf">Update Employ Details</h2> <form class="svelte-6n7qcv"><select name="department" required class="svelte-6n7qcv"><option value="" disabled selected class="svelte-6n7qcv" data-svelte-h="svelte-orl0wz">Select Department</option>${each(departments, (department) => {
    return `<option${add_attribute("value", department._id, 0)} class="svelte-6n7qcv">${escape(department.title)}</option>`;
  })}</select> ${$selectedDepartment ? `<select name="role" required class="svelte-6n7qcv"><option value="" disabled selected class="svelte-6n7qcv" data-svelte-h="svelte-ihgom1">Select Role</option>${each($filteredRoles, (role) => {
    return `<option${add_attribute("value", role._id, 0)} class="svelte-6n7qcv">${escape(role.title)}</option>`;
  })}</select>` : ``} <input type="text" name="title" placeholder="Enter Title" required class="svelte-6n7qcv"> <div class="form-button svelte-6n7qcv" data-svelte-h="svelte-13yvcx9"><button type="submit" class="svelte-6n7qcv">Update</button></div></form></div></div>` : ``} <div class="banner-text svelte-6n7qcv"><div class="head svelte-6n7qcv" data-svelte-h="svelte-oex47g"><h6 class="svelte-6n7qcv">Employ Registrations</h6></div> <div class="leaves-list svelte-6n7qcv">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${each(employes, (item) => {
        return `${item.status === 0 ? `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
          default: () => {
            return `<div class="leaves-tab svelte-6n7qcv"><div class="leaves-head svelte-6n7qcv"><div class="data svelte-6n7qcv"><img${add_attribute("src", personIcon, 0)} alt="avatar"> <div class="details svelte-6n7qcv"><p class="title svelte-6n7qcv">${escape(item.email)}</p> <p class="duration svelte-6n7qcv">${escape(item.employeeId)}</p> </div></div> <div class="buttons svelte-6n7qcv"><button class="status approve buttons svelte-6n7qcv" data-svelte-h="svelte-1a2ne7u"><p class="svelte-6n7qcv">Approve</p></button> <button class="status reject buttons svelte-6n7qcv" data-svelte-h="svelte-fcczn"><p class="svelte-6n7qcv">Reject</p> </button></div> </div></div> `;
          }
        })}` : ``}`;
      })}`;
    }
  })}</div></div> </div>`;
});
export {
  Page as default
};
