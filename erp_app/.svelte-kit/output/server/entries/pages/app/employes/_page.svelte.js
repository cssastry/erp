import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component, d as each, e as escape } from "../../../../chunks/ssr.js";
import { G as Grid } from "../../../../chunks/Grid.js";
import { w as writable } from "../../../../chunks/index.js";
const employeProfilePhoto = "/_app/immutable/assets/employeeProfilePhoto.94cf4e3b.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".employees.svelte-1vhlf2u.svelte-1vhlf2u{background-color:var(--side-nav-color);min-height:93%;padding:1rem 3rem;border-radius:0.3rem;display:flex;flex-direction:column;align-items:start}input.svelte-1vhlf2u.svelte-1vhlf2u{margin-bottom:1rem;width:100%;padding:0.5rem 0.8rem;border-radius:0.5rem;background-color:var(--color-text);color:var(--color-bg-3);border:none}.employee-card.svelte-1vhlf2u.svelte-1vhlf2u{display:flex;align-items:center;background:var(--color-bg-3);padding:0 1rem;border-radius:1rem;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);cursor:pointer;transition:background-color 0.3s ease}.employee-card.svelte-1vhlf2u .id.svelte-1vhlf2u{font-size:1.4rem;padding:0;margin:0;color:var(--color-bg-0)}.employee-card.svelte-1vhlf2u .role.svelte-1vhlf2u{font-size:0.8rem;padding:0;margin:0;color:var(--color-text)}.popup.svelte-1vhlf2u.svelte-1vhlf2u{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;z-index:1000}.popup-content.svelte-1vhlf2u.svelte-1vhlf2u{background-color:var(--color-bg-4);padding:2rem;border-radius:0.5rem;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);max-width:80%;max-height:80%;overflow:auto;text-align:left;position:relative}.close.svelte-1vhlf2u.svelte-1vhlf2u{position:absolute;top:1rem;right:1rem;font-size:2rem;cursor:pointer;color:var(--color-bg-0)}.heading.svelte-1vhlf2u.svelte-1vhlf2u{display:flex;align-items:center;justify-content:space-between}.heading.svelte-1vhlf2u h2.svelte-1vhlf2u{font-size:1.5rem;color:var(--color-bg-0);font-weight:600}.tech.svelte-1vhlf2u.svelte-1vhlf2u{display:flex;align-items:center;padding:0 0 0 0.5rem;margin-top:-1rem;color:#ddd\n    }.techHeading.svelte-1vhlf2u.svelte-1vhlf2u{font-size:1rem;font-weight:600;padding:0;margin-right:0.5rem}.technology.svelte-1vhlf2u.svelte-1vhlf2u{font-size:0.8rem;margin:0 0.2rem}.add.svelte-1vhlf2u.svelte-1vhlf2u{background-color:var(--color-special-text);padding:0.3rem 0.8rem;border:none;color:var(--color-bg-0);border-radius:0.3rem;cursor:pointer}.showAlltech.svelte-1vhlf2u.svelte-1vhlf2u{margin-bottom:1rem}.techName.svelte-1vhlf2u.svelte-1vhlf2u{background-color:var(--color-text);color:var(--color-bg-0);margin:0 0.2rem;padding:0.2rem 0.5rem;border-radius:0.5rem;font-size:0.8rem;cursor:pointer}.showSelected.svelte-1vhlf2u.svelte-1vhlf2u{width:100%;background-color:transparent;height:auto;min-height:2rem;border:1px solid var(--color-bg-0);margin-bottom:1rem;border-radius:0.5rem;padding:0.6rem 0.5rem 0 0.8rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredEmployees;
  let $searchQuery, $$unsubscribe_searchQuery;
  let employees = [];
  let searchQuery = writable("");
  $$unsubscribe_searchQuery = subscribe(searchQuery, (value) => $searchQuery = value);
  $$result.css.add(css);
  filteredEmployees = employees.filter((employee) => {
    return employee.employeeId.toLowerCase().includes($searchQuery.toLowerCase()) || employee.email.toLowerCase().includes($searchQuery.toLowerCase()) || employee.title.toLowerCase().includes($searchQuery.toLowerCase());
  });
  $$unsubscribe_searchQuery();
  return `${$$result.head += `<!-- HEAD_svelte-1495cp7_START -->${$$result.title = `<title>Employees</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-1495cp7_END -->`, ""} <div class="employees svelte-1vhlf2u">${``} <input type="text" placeholder="Search employees by id, email, role..." class="svelte-1vhlf2u"${add_attribute("value", $searchQuery, 0)}> ${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 18 }, {}, {
    default: () => {
      return `${each(filteredEmployees, (employee) => {
        return ` ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
          default: () => {
            return ` <div class="employee-card svelte-1vhlf2u">${validate_component(Grid, "Grid").$$render($$result, { xs: 3, md: 3, lg: 3 }, {}, {
              default: () => {
                return `<img${add_attribute("src", employeProfilePhoto, 0)} alt="profilePhoto" width="50rem"> `;
              }
            })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 8, md: 8, lg: 8 }, {}, {
              default: () => {
                return `<p class="id svelte-1vhlf2u">${escape(employee.employeeId)}</p> <p class="role svelte-1vhlf2u">${escape(employee.title)}</p> `;
              }
            })}</div> `;
          }
        })}`;
      })}`;
    }
  })} </div>`;
});
export {
  Page as default
};
