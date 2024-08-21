import { c as create_ssr_component, a as subscribe, d as each, v as validate_component, b as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { w as writable } from "../../../../chunks/index.js";
import { G as Grid } from "../../../../chunks/Grid.js";
import { p as personIcon } from "../../../../chunks/profile.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".ticket.svelte-sm6wh2.svelte-sm6wh2.svelte-sm6wh2{background-color:var(--side-nav-color);min-height:93%;padding:1rem 2rem;border-radius:0.3rem}.banner-text.svelte-sm6wh2 h6.svelte-sm6wh2.svelte-sm6wh2{font-size:24px;color:var(--color-banner-text-1);margin:0}.banner-text.svelte-sm6wh2 p.svelte-sm6wh2.svelte-sm6wh2{font-size:15px;color:var(--color-bg-1);margin-bottom:0}.head-tab.svelte-sm6wh2.svelte-sm6wh2.svelte-sm6wh2{display:flex;justify-content:space-between}.head-tab.svelte-sm6wh2 button.svelte-sm6wh2.svelte-sm6wh2{background-color:var(--color-special-text);color:var(--color-bg-2);border:none;padding:0.5rem 1rem;border-radius:0.2rem;font-weight:600;cursor:pointer}.head.svelte-sm6wh2.svelte-sm6wh2.svelte-sm6wh2{display:flex;gap:0.5rem}.head.svelte-sm6wh2 select.svelte-sm6wh2.svelte-sm6wh2{border:none;background-color:var(--color-bg-4);color:var(--color-bg-1);padding:0.2rem 0.5rem;border-radius:0.2rem;cursor:pointer}.work.svelte-sm6wh2.svelte-sm6wh2.svelte-sm6wh2{display:flex;margin-top:1rem}.todo.svelte-sm6wh2.svelte-sm6wh2.svelte-sm6wh2,.progress.svelte-sm6wh2.svelte-sm6wh2.svelte-sm6wh2,.done.svelte-sm6wh2.svelte-sm6wh2.svelte-sm6wh2{background-color:var(--color-bg-4);width:90%;padding:0.5rem 0.5rem;border-radius:0.5rem}.heading.svelte-sm6wh2.svelte-sm6wh2.svelte-sm6wh2{width:100%;display:flex;justify-content:space-between;padding-bottom:0.2rem;border-bottom:1px solid var(--color-bg-1)}.heading.svelte-sm6wh2 p.svelte-sm6wh2.svelte-sm6wh2{font-size:20px;padding:0;margin:0;font-weight:600}.data.svelte-sm6wh2.svelte-sm6wh2.svelte-sm6wh2{display:flex;justify-content:space-between;align-items:end;background-color:var(--color-bg-3);padding:0.2rem 0.4rem;margin-top:0.8rem}.details.svelte-sm6wh2 p.svelte-sm6wh2.svelte-sm6wh2{padding:0;margin:0}.details.svelte-sm6wh2 .title.svelte-sm6wh2.svelte-sm6wh2{font-size:14px;font-weight:500}.details.svelte-sm6wh2 .duration.svelte-sm6wh2.svelte-sm6wh2{font-size:12px;color:var(--color-text)}.data.svelte-sm6wh2 img.svelte-sm6wh2.svelte-sm6wh2{width:6%;padding:0.5rem;height:1.2rem;width:1.2rem;background-color:var(--color-bg-4);border-radius:50%}.done.svelte-sm6wh2 .title.svelte-sm6wh2.svelte-sm6wh2{text-decoration:line-through}.popup-overlay.svelte-sm6wh2.svelte-sm6wh2.svelte-sm6wh2{z-index:10;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.632);display:flex;justify-content:center;align-items:center}.popup.svelte-sm6wh2.svelte-sm6wh2.svelte-sm6wh2{background-color:var(--color-bg-3);width:50%;height:auto;padding:2rem;border-radius:8px;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1)}.popup.svelte-sm6wh2 form.svelte-sm6wh2.svelte-sm6wh2{display:grid;grid-template-columns:auto;grid-row-gap:10px}form.svelte-sm6wh2 input.svelte-sm6wh2.svelte-sm6wh2,form.svelte-sm6wh2 select.svelte-sm6wh2.svelte-sm6wh2{background-color:var(--color-text);padding:0.8rem 0.8rem;border:none;margin-top:0.2rem;border-radius:0.5rem;color:var(--color-bg-4);font-size:1rem}form.svelte-sm6wh2 input.svelte-sm6wh2.svelte-sm6wh2::placeholder,form.svelte-sm6wh2 select.svelte-sm6wh2.svelte-sm6wh2::placeholder{color:var(--color-bg-4)}form.svelte-sm6wh2 select.svelte-sm6wh2 option.svelte-sm6wh2{background-color:var(--color-bg-4);color:var(--color-bg-0)}.popup.svelte-sm6wh2 h2.svelte-sm6wh2.svelte-sm6wh2{margin-top:0;color:var(--color-bg-0);font-size:25px}.form-button.svelte-sm6wh2.svelte-sm6wh2.svelte-sm6wh2{width:100%;display:flex;justify-content:flex-end}form.svelte-sm6wh2 button.svelte-sm6wh2.svelte-sm6wh2{background-color:var(--color-banner-text-2);border:none;padding:0.8rem 2.5rem;margin-top:0.8rem;border-radius:0.3rem;color:var(--color-bg-1);font-weight:600;cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let todoTasks;
  let progressTasks;
  let doneTasks;
  let $showPopup, $$unsubscribe_showPopup;
  let $$unsubscribe_selectedProject;
  const projects = ["SRBS", "JagBandhu", "Nehwe", "ERP Solutions"];
  const ticketList = [
    {
      id: 1,
      project: projects[0],
      status: 0,
      title: "Task 1",
      duration: "12 hours",
      assigned: personIcon
    },
    {
      id: 2,
      project: projects[0],
      status: 0,
      title: "Task 2",
      duration: "5 hours",
      assigned: personIcon
    },
    {
      id: 3,
      project: projects[0],
      status: 1,
      title: "Task 3",
      duration: "12 hours",
      assigned: personIcon
    },
    {
      id: 4,
      project: projects[0],
      status: 2,
      title: "Task 4",
      duration: "12 hours",
      assigned: personIcon
    },
    {
      id: 5,
      project: projects[0],
      status: 0,
      title: "Task 5",
      duration: "12 hours",
      assigned: personIcon
    },
    {
      id: 6,
      project: projects[0],
      status: 0,
      title: "Task 6",
      duration: "12 hours",
      assigned: personIcon
    },
    {
      id: 7,
      project: projects[0],
      status: 2,
      title: "Task 7",
      duration: "12 hours",
      assigned: personIcon
    },
    {
      id: 8,
      project: projects[1],
      status: 0,
      title: "Task 8",
      duration: "12 hours",
      assigned: personIcon
    },
    {
      id: 9,
      project: projects[1],
      status: 1,
      title: "Task 9",
      duration: "12 hours",
      assigned: personIcon
    },
    {
      id: 10,
      project: projects[1],
      status: 2,
      title: "Task 10",
      duration: "12 hours",
      assigned: personIcon
    },
    {
      id: 11,
      project: projects[1],
      status: 1,
      title: "Task 11",
      duration: "12 hours",
      assigned: personIcon
    },
    {
      id: 12,
      project: projects[1],
      status: 2,
      title: "Task 12",
      duration: "12 hours",
      assigned: personIcon
    },
    {
      id: 13,
      project: projects[2],
      status: 0,
      title: "Task 13",
      duration: "12 hours",
      assigned: personIcon
    },
    {
      id: 14,
      project: projects[2],
      status: 0,
      title: "Task 14",
      duration: "12 hours",
      assigned: personIcon
    }
  ];
  const selectedProject = writable(projects[0]);
  $$unsubscribe_selectedProject = subscribe(selectedProject, (value) => value);
  let selectedProjectValue;
  selectedProject.subscribe((value) => {
    selectedProjectValue = value;
  });
  const showPopup = writable({ visible: false });
  $$unsubscribe_showPopup = subscribe(showPopup, (value) => $showPopup = value);
  $$result.css.add(css);
  todoTasks = ticketList.filter((ticket) => ticket.project === selectedProjectValue && ticket.status === 0);
  progressTasks = ticketList.filter((ticket) => ticket.project === selectedProjectValue && ticket.status === 1);
  doneTasks = ticketList.filter((ticket) => ticket.project === selectedProjectValue && ticket.status === 2);
  $$unsubscribe_showPopup();
  $$unsubscribe_selectedProject();
  return `${$$result.head += `<!-- HEAD_svelte-tu1kfr_START -->${$$result.title = `<title>Tickets</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-tu1kfr_END -->`, ""} <div class="ticket svelte-sm6wh2"> ${$showPopup.visible ? `    <div class="popup-overlay svelte-sm6wh2"><div class="popup svelte-sm6wh2"><h2 class="svelte-sm6wh2" data-svelte-h="svelte-qzc0m7">Raise a Ticket</h2> <form class="svelte-sm6wh2"><select name="project" required class="svelte-sm6wh2"><option value="" disabled selected hidden class="svelte-sm6wh2" data-svelte-h="svelte-1r6l1kl">Choose Project</option>${each(projects, (project) => {
    return `<option${add_attribute("value", project, 0)} class="svelte-sm6wh2">${escape(project)}</option>`;
  })}</select> <input type="text" name="title" placeholder="Enter Title" required class="svelte-sm6wh2"> <input type="text" name="duration" placeholder="Enter Duration" required class="svelte-sm6wh2"> <div class="form-button svelte-sm6wh2" data-svelte-h="svelte-1crbdtk"><button type="submit" class="svelte-sm6wh2">Raise Ticket</button></div></form></div></div>` : ``} <div class="banner-text svelte-sm6wh2"><div class="head-tab svelte-sm6wh2"><div class="head svelte-sm6wh2"><h6 class="svelte-sm6wh2" data-svelte-h="svelte-5fdj41">Projects /</h6> <select class="svelte-sm6wh2">${each(projects, (project) => {
    return `<option${add_attribute("value", project, 0)} class="svelte-sm6wh2">${escape(project)}</option>`;
  })}</select></div> <button class="svelte-sm6wh2" data-svelte-h="svelte-xtg7wz">Raise Ticket</button></div> <div class="work svelte-sm6wh2">${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
    default: () => {
      return `<div class="todo svelte-sm6wh2"><div class="heading svelte-sm6wh2" data-svelte-h="svelte-1jksa8b"><p class="svelte-sm6wh2">Tickets Raised</p></div> ${each(todoTasks, (ticket) => {
        return `<div class="data svelte-sm6wh2"><div class="details svelte-sm6wh2"><p class="title svelte-sm6wh2">${escape(ticket.title)}</p> <p class="duration svelte-sm6wh2">${escape(ticket.duration)}</p></div> <img${add_attribute("src", ticket.assigned, 0)} alt="assigned" class="svelte-sm6wh2"> </div>`;
      })}</div>`;
    }
  })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
    default: () => {
      return `<div class="progress svelte-sm6wh2"><div class="heading svelte-sm6wh2" data-svelte-h="svelte-1tktj33"><p class="svelte-sm6wh2">Progress</p></div> ${each(progressTasks, (ticket) => {
        return `<div class="data svelte-sm6wh2"><div class="details svelte-sm6wh2"><p class="title svelte-sm6wh2">${escape(ticket.title)}</p> <p class="duration svelte-sm6wh2">${escape(ticket.duration)}</p></div> <img${add_attribute("src", ticket.assigned, 0)} alt="assigned" class="svelte-sm6wh2"> </div>`;
      })}</div>`;
    }
  })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
    default: () => {
      return `<div class="done svelte-sm6wh2"><div class="heading svelte-sm6wh2" data-svelte-h="svelte-16mpcix"><p class="svelte-sm6wh2">Solved</p></div> ${each(doneTasks, (ticket) => {
        return `<div class="data svelte-sm6wh2"><div class="details svelte-sm6wh2"><p class="title svelte-sm6wh2">${escape(ticket.title)}</p> <p class="duration svelte-sm6wh2">${escape(ticket.duration)}</p></div> <img${add_attribute("src", ticket.assigned, 0)} alt="assigned" class="svelte-sm6wh2"> </div>`;
      })}</div>`;
    }
  })}</div></div> </div>`;
});
export {
  Page as default
};
