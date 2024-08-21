import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, d as each, e as escape } from "../../../chunks/ssr.js";
/* empty css                      */import { G as Grid } from "../../../chunks/Grid.js";
import { p as page } from "../../../chunks/stores.js";
import { l as logo } from "../../../chunks/logoS_M.js";
import { m as menuIcon } from "../../../chunks/menu.js";
import { p as personIcon } from "../../../chunks/profile.js";
const canUseDOM = () => typeof window !== "undefined" && "document" in window && "location" in window;
const getLocation = (source) => {
  return {
    ...source.location,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};
const createHistory = (source) => {
  const listeners = [];
  let location = getLocation(source);
  return {
    get location() {
      return location;
    },
    listen(listener) {
      listeners.push(listener);
      const popstateListener = () => {
        location = getLocation(source);
        listener({ location, action: "POP" });
      };
      source.addEventListener("popstate", popstateListener);
      return () => {
        source.removeEventListener("popstate", popstateListener);
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    },
    navigate(to, { state, replace = false, preserveScroll = false, blurActiveElement = true } = {}) {
      state = { ...state, key: Date.now() + "" };
      try {
        if (replace)
          source.history.replaceState(state, "", to);
        else
          source.history.pushState(state, "", to);
      } catch (e) {
        source.location[replace ? "replace" : "assign"](to);
      }
      location = getLocation(source);
      listeners.forEach(
        (listener) => listener({ location, action: "PUSH", preserveScroll })
      );
      if (blurActiveElement)
        document.activeElement.blur();
    }
  };
};
const createMemorySource = (initialPathname = "/") => {
  let index = 0;
  const stack = [{ pathname: initialPathname, search: "" }];
  const states = [];
  return {
    get location() {
      return stack[index];
    },
    addEventListener(name, fn) {
    },
    removeEventListener(name, fn) {
    },
    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState(state, _, uri) {
        const [pathname, search = ""] = uri.split("?");
        index++;
        stack.push({ pathname, search });
        states.push(state);
      },
      replaceState(state, _, uri) {
        const [pathname, search = ""] = uri.split("?");
        stack[index] = { pathname, search };
        states[index] = state;
      }
    }
  };
};
createHistory(
  canUseDOM() ? window : createMemorySource()
);
const dashboardIcon = "/_app/immutable/assets/dashboard.e4c0c347.svg";
const employesIcon = "/_app/immutable/assets/team.be24b5c4.svg";
const taskIcon = "/_app/immutable/assets/tasks.5d87bc3e.svg";
const chatIcon = "/_app/immutable/assets/chat.817c838f.svg";
const ticketIcon = "/_app/immutable/assets/tickets.fb631e5c.svg";
const payslipIcon = "/_app/immutable/assets/payslip.2ded8e0f.svg";
const leavesIcon = "/_app/immutable/assets/leaves.1434290e.svg";
const approvalIcon = "/_app/immutable/assets/approvals.42531afe.svg";
const SideNav_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.sideNav.svelte-1u476ck.svelte-1u476ck{min-height:100%;border-radius:0.2rem;background-color:var(--side-nav-color);padding:1rem 0.5rem}.brand.svelte-1u476ck.svelte-1u476ck{display:flex;align-items:center}h2.svelte-1u476ck.svelte-1u476ck{font-size:17px;margin:0;font-weight:600;color:var(--color-bg-2)}hr.svelte-1u476ck.svelte-1u476ck{margin:1rem 0;border-color:var(--color-bg-2);border-width:0.2px}.item.svelte-1u476ck.svelte-1u476ck{background-color:transparent;display:flex;align-items:center;padding:0.8rem 0 0.8rem 0.8rem;border-radius:0.5rem;font-size:20px;margin:0.1rem 0;cursor:pointer}.item.svelte-1u476ck p.svelte-1u476ck{margin:0;padding:0;font-weight:500;font-size:0.9rem}.item.svelte-1u476ck.svelte-1u476ck:hover{background-color:var(--color-bg-3)}.item[aria-current ="page"].svelte-1u476ck.svelte-1u476ck{background-color:var(--color-bg-4);color:var(--color-banner-text-2)}a.svelte-1u476ck.svelte-1u476ck{color:var(--color-text);text-decoration:none}a.svelte-1u476ck.svelte-1u476ck:hover{text-decoration:none}',
  map: null
};
const SideNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const sideNavList = [
    {
      id: 1,
      name: "Dashboard",
      icon: dashboardIcon,
      path: "/app/dashboard"
    },
    {
      id: 2,
      name: "Employees",
      icon: employesIcon,
      path: "/app/employes"
    },
    {
      id: 3,
      name: "My Tasks",
      icon: taskIcon,
      path: "/app/tasks"
    },
    {
      id: 4,
      name: "Chat",
      icon: chatIcon,
      path: "/app/chat"
    },
    {
      id: 5,
      name: "Tickets",
      icon: ticketIcon,
      path: "/app/tickets"
    },
    {
      id: 6,
      name: "Payslips",
      icon: payslipIcon,
      path: "/app/payslips"
    },
    {
      id: 8,
      name: "Leaves",
      icon: leavesIcon,
      path: "/app/leaves"
    },
    {
      id: 9,
      name: "Approvals",
      icon: approvalIcon,
      path: "/app/approvals"
    },
    {
      id: 10,
      name: "Holidays",
      icon: approvalIcon,
      path: "/app/holidays"
    },
    {
      id: 11,
      name: "Employ Roles",
      icon: leavesIcon,
      path: "/app/employapprovals"
    },
    {
      id: 12,
      name: "Registrations",
      icon: approvalIcon,
      path: "/app/registrations"
    },
    {
      id: 13,
      name: "Projects",
      icon: payslipIcon,
      path: "/app/projects"
    },
    {
      id: 14,
      name: "Tech Stack",
      icon: payslipIcon,
      path: "/app/techstack"
    }
  ];
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<div class="sideNav svelte-1u476ck" style="width:15%;"><a href="/app/dashboard" class="svelte-1u476ck"><div class="brand svelte-1u476ck" style="cursor: pointer;">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 4, md: 4, lg: 4 }, {}, {
        default: () => {
          return `<img${add_attribute("src", logo, 0)} alt="logo" width="80%">`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 7, md: 7, lg: 7 }, {}, {
        default: () => {
          return `<h2 class="svelte-1u476ck" data-svelte-h="svelte-eey0kj">Employe Portal</h2>`;
        }
      })}`;
    }
  })}</div></a> <hr class="svelte-1u476ck"> <div class="navigations">${each(sideNavList, (item) => {
    return `<a${add_attribute("href", item.path, 0)} class="svelte-1u476ck"><div class="item svelte-1u476ck"${add_attribute("aria-current", $page.url.pathname === item.path ? "page" : void 0, 0)}>${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 2, lg: 2 }, {}, {
      default: () => {
        return `<img${add_attribute("src", item.icon, 0)} alt="icon" width="55%"> `;
      }
    })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 0, md: 7, lg: 7 }, {}, {
      default: () => {
        return `<p class="svelte-1u476ck">${escape(item.name)}</p> `;
      }
    })}</div> </a>`;
  })}</div> </div>`;
});
const notificationIcon = "/_app/immutable/assets/notification.14e35efc.svg";
const calendarIcon = "/_app/immutable/assets/viewcalender.43cb5022.svg";
const Head_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.header.svelte-1gj9ube{background-color:var(--side-nav-color);padding:0 0.5rem;margin-bottom:0.3rem;border-radius:0.2rem;height:3rem;display:flex;align-items:center}p.svelte-1gj9ube{margin:0.25rem 0 0 0;padding:0;font-size:1.2rem;color:var(--color-bg-2)}.icons.svelte-1gj9ube{width:100%;display:flex;justify-content:flex-end}.icon-div.svelte-1gj9ube{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;background-color:var(--color-bg-3);margin:0 0.5rem;border-radius:50%}.icon-div[aria-current = "page"].svelte-1gj9ube{background-color:var(--color-banner-text-2)}',
  map: null
};
const Head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<div class="header svelte-1gj9ube">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 1, md: 1, lg: 1 }, {}, {
        default: () => {
          return `<div class="" data-svelte-h="svelte-11ref1s"><img${add_attribute("src", menuIcon, 0)} alt="icon" width="20%" style="margin-top: 0.8rem; cursor: pointer"></div>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 7, md: 7, lg: 7 }, {}, {
        default: () => {
          return `<p class="svelte-1gj9ube" data-svelte-h="svelte-1ghq5vi">S&amp;M Scholarly Solutions Employe Portal</p>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 4, md: 4, lg: 4 }, {}, {
        default: () => {
          return ` <div class="icons svelte-1gj9ube"><a href="/app/calender"><div class="icon-div svelte-1gj9ube"${add_attribute(
            "aria-current",
            $page.url.pathname === "/app/calender" ? "page" : void 0,
            0
          )}><img${add_attribute("src", calendarIcon, 0)} alt="icon" width="50%"></div></a> <a href="/app/notifications"><div class="icon-div svelte-1gj9ube"${add_attribute(
            "aria-current",
            $page.url.pathname === "/app/notifications" ? "page" : void 0,
            0
          )}><img${add_attribute("src", notificationIcon, 0)} alt="icon" width="50%"></div></a> <a href="/app/profile"><div class="icon-div svelte-1gj9ube"${add_attribute(
            "aria-current",
            $page.url.pathname === "/app/profile" ? "page" : void 0,
            0
          )}><img${add_attribute("src", personIcon, 0)} alt="icon" width="50%"></div></a></div>`;
        }
      })}`;
    }
  })} </div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-fackwf{display:flex;min-height:98.5vh;padding:0.3rem;gap:0.3rem}main.svelte-fackwf{flex:1;display:flex;flex-direction:column;width:70%;margin:0 auto;box-sizing:border-box;border-radius:0.5rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-fackwf">${validate_component(SideNav, "SideNav").$$render($$result, {}, {}, {})} <main class="svelte-fackwf">${validate_component(Head, "Head").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}</main> </div>`;
});
export {
  Layout as default
};
