import { c as create_ssr_component, a as subscribe, e as escape, d as each, b as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { w as writable } from "../../../../chunks/index.js";
import { G as Grid } from "../../../../chunks/Grid.js";
import { a as addIcon } from "../../../../chunks/add.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".task.svelte-1ibl0gn.svelte-1ibl0gn.svelte-1ibl0gn{background-color:var(--side-nav-color);min-height:89%;padding:1rem 2rem;border-radius:0.3rem}.banner-text.svelte-1ibl0gn h6.svelte-1ibl0gn.svelte-1ibl0gn{font-size:24px;color:var(--color-banner-text-1);margin:0}.banner-text.svelte-1ibl0gn p.svelte-1ibl0gn.svelte-1ibl0gn{font-size:15px;color:var(--color-bg-1);margin-bottom:0}.head.svelte-1ibl0gn.svelte-1ibl0gn.svelte-1ibl0gn{display:flex;gap:0.5rem}.head.svelte-1ibl0gn select.svelte-1ibl0gn.svelte-1ibl0gn{border:none;background-color:var(--color-bg-4);color:var(--color-bg-1);padding:0.2rem 0.5rem;border-radius:0.2rem;cursor:pointer}.work.svelte-1ibl0gn.svelte-1ibl0gn.svelte-1ibl0gn{display:flex;margin-top:1rem}.todo.svelte-1ibl0gn.svelte-1ibl0gn.svelte-1ibl0gn,.progress.svelte-1ibl0gn.svelte-1ibl0gn.svelte-1ibl0gn,.done.svelte-1ibl0gn.svelte-1ibl0gn.svelte-1ibl0gn{background-color:var(--color-bg-4);width:90%;padding:0.5rem 0.5rem;border-radius:0.5rem}.heading.svelte-1ibl0gn.svelte-1ibl0gn.svelte-1ibl0gn{width:100%;display:flex;justify-content:space-between;align-items:center;padding-bottom:0.2rem;border-bottom:1px solid var(--color-bg-1)}.heading.svelte-1ibl0gn h2.svelte-1ibl0gn.svelte-1ibl0gn{padding:0;margin:0}.heading.svelte-1ibl0gn p.svelte-1ibl0gn.svelte-1ibl0gn{font-size:20px;padding:0;margin:0;font-weight:600}.heading.svelte-1ibl0gn img.svelte-1ibl0gn.svelte-1ibl0gn{width:7%;cursor:pointer}.data.svelte-1ibl0gn.svelte-1ibl0gn.svelte-1ibl0gn{display:flex;justify-content:space-between;align-items:end;background-color:var(--color-bg-3);padding:0.2rem 0.4rem;margin-top:0.8rem}.details.svelte-1ibl0gn p.svelte-1ibl0gn.svelte-1ibl0gn{padding:0;margin:0}.details.svelte-1ibl0gn .title.svelte-1ibl0gn.svelte-1ibl0gn{font-size:14px;font-weight:500}.details.svelte-1ibl0gn .duration.svelte-1ibl0gn.svelte-1ibl0gn{font-size:12px;color:var(--color-bg-0);display:flex;align-items:center;justify-content:center;width:70%;margin-top:0.3rem;border-radius:0.3rem;font-weight:500}.data.svelte-1ibl0gn img.svelte-1ibl0gn.svelte-1ibl0gn{width:6%;padding:0.5rem;height:1.2rem;width:1.2rem;background-color:var(--color-bg-4);border-radius:50%}.done.svelte-1ibl0gn .title.svelte-1ibl0gn.svelte-1ibl0gn{text-decoration:line-through}.popup-overlay.svelte-1ibl0gn.svelte-1ibl0gn.svelte-1ibl0gn{z-index:10;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.632);display:flex;justify-content:center;align-items:center}.popup.svelte-1ibl0gn.svelte-1ibl0gn.svelte-1ibl0gn{background-color:var(--color-bg-3);width:50%;height:auto;padding:2rem;border-radius:8px;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1)}.popup.svelte-1ibl0gn form.svelte-1ibl0gn.svelte-1ibl0gn{display:grid;grid-template-columns:auto;grid-row-gap:10px}form.svelte-1ibl0gn input.svelte-1ibl0gn.svelte-1ibl0gn,form.svelte-1ibl0gn select.svelte-1ibl0gn.svelte-1ibl0gn{background-color:var(--color-text);padding:0.8rem 0.8rem;border:none;margin-top:0.2rem;border-radius:0.5rem;color:var(--color-bg-4);font-size:1rem}select.svelte-1ibl0gn.svelte-1ibl0gn.svelte-1ibl0gn{background-color:var(--color-text);padding:0.8rem 0.8rem;border:none;margin-top:0.2rem;border-radius:0.5rem;color:var(--color-bg-4);font-size:1rem}form.svelte-1ibl0gn input.svelte-1ibl0gn.svelte-1ibl0gn::placeholder,form.svelte-1ibl0gn select.svelte-1ibl0gn.svelte-1ibl0gn::placeholder{color:var(--color-bg-4)}select.svelte-1ibl0gn.svelte-1ibl0gn.svelte-1ibl0gn::placeholder{color:var(--color-bg-4)}form.svelte-1ibl0gn select.svelte-1ibl0gn option.svelte-1ibl0gn{background-color:var(--color-bg-4);color:var(--color-bg-0)}select.svelte-1ibl0gn option.svelte-1ibl0gn.svelte-1ibl0gn{background-color:var(--color-bg-4);color:var(--color-bg-0)}.popup.svelte-1ibl0gn h2.svelte-1ibl0gn.svelte-1ibl0gn{margin-top:0;color:var(--color-bg-0);font-size:25px}.form-button.svelte-1ibl0gn.svelte-1ibl0gn.svelte-1ibl0gn{width:100%;display:flex;justify-content:flex-end}form.svelte-1ibl0gn button.svelte-1ibl0gn.svelte-1ibl0gn{background-color:var(--color-banner-text-2);border:none;padding:0.8rem 2.5rem;margin-top:0.8rem;border-radius:0.3rem;color:var(--color-bg-1);font-weight:600;cursor:pointer}.details.svelte-1ibl0gn.svelte-1ibl0gn.svelte-1ibl0gn{margin-top:1rem}.level.svelte-1ibl0gn.svelte-1ibl0gn.svelte-1ibl0gn{display:flex;align-items:center;justify-content:space-between}.level.svelte-1ibl0gn p span.svelte-1ibl0gn.svelte-1ibl0gn{font-weight:500;color:var(--color-bg-1)}.heading.svelte-1ibl0gn .type.svelte-1ibl0gn.svelte-1ibl0gn{font-size:1rem;font-weight:400;color:var(--color-bg-0);padding:0.1rem 0.8rem;border-radius:0.5rem}.details.svelte-1ibl0gn .desc.svelte-1ibl0gn.svelte-1ibl0gn{margin-top:1rem;color:var(--color-bg-2)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let todoTasks;
  let progressTasks;
  let doneTasks;
  let $showPopup, $$unsubscribe_showPopup;
  let $taskDetailsPopup, $$unsubscribe_taskDetailsPopup;
  let $$unsubscribe_selectedProject;
  let projects = [];
  let employes = [];
  let type = ["Issue", "Bug"];
  let priorityLevels = [{ id: 1, name: "Low" }, { id: 2, name: "Medium" }, { id: 3, name: "High" }];
  let status = [{ id: 0, name: "TODO" }, { id: 1, name: "Progress" }, { id: 2, name: "Done" }];
  let taskList = [];
  const getBackgroundColor = (type2) => {
    if (type2 === "Bug") {
      return "#D70C0C";
    }
    if (type2 === "Issue") {
      return "#007DE9";
    }
  };
  const selectedProject = writable(projects[0]);
  $$unsubscribe_selectedProject = subscribe(selectedProject, (value) => value);
  let selectedProjectValue;
  selectedProject.subscribe((value) => {
    selectedProjectValue = value;
  });
  const showPopup = writable({ visible: false, formType: 0 });
  $$unsubscribe_showPopup = subscribe(showPopup, (value) => $showPopup = value);
  const taskDetailsPopup = writable({ visible: false, task: null });
  $$unsubscribe_taskDetailsPopup = subscribe(taskDetailsPopup, (value) => $taskDetailsPopup = value);
  const getPriorityName = (priorityId) => {
    const priority = priorityLevels.find((p) => p.id === priorityId);
    return priority ? priority.name : "Unknown";
  };
  $$result.css.add(css);
  todoTasks = taskList.filter((task) => task.projectId._id === selectedProjectValue && task.status === 0);
  progressTasks = taskList.filter((task) => task.projectId._id === selectedProjectValue && task.status === 1);
  doneTasks = taskList.filter((task) => task.projectId._id === selectedProjectValue && task.status === 2);
  $$unsubscribe_showPopup();
  $$unsubscribe_taskDetailsPopup();
  $$unsubscribe_selectedProject();
  return `${$$result.head += `<!-- HEAD_svelte-btxu9m_START -->${$$result.title = `<title>Tasks</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-btxu9m_END -->`, ""} <div class="task svelte-1ibl0gn"> ${$showPopup.visible ? `    <div class="popup-overlay svelte-1ibl0gn"><div class="popup svelte-1ibl0gn"><h2 class="svelte-1ibl0gn">${escape($showPopup.formType === 0 ? "Add Task to TODO" : "Add Task to PROGRESS")}</h2> <form class="svelte-1ibl0gn"><select name="project" required class="svelte-1ibl0gn"><option value="" disabled selected hidden class="svelte-1ibl0gn" data-svelte-h="svelte-1r6l1kl">Choose Project</option>${each(projects, (project) => {
    return `<option${add_attribute("value", project._id, 0)} class="svelte-1ibl0gn">${escape(project.title)}</option>`;
  })}</select> <input type="text" name="title" placeholder="Enter Title" required class="svelte-1ibl0gn"> <input type="text" name="points" placeholder="Enter Points" required class="svelte-1ibl0gn"> <select name="priority" required class="svelte-1ibl0gn"><option value="" disabled selected hidden class="svelte-1ibl0gn" data-svelte-h="svelte-1xqe4bm">Choose Priority</option>${each(priorityLevels, (priority) => {
    return `<option${add_attribute("value", priority.id, 0)} class="svelte-1ibl0gn">${escape(priority.name)}</option>`;
  })}</select> <select name="assignedTo" required class="svelte-1ibl0gn"><option value="" disabled selected hidden class="svelte-1ibl0gn" data-svelte-h="svelte-1lhhauh">Assign To</option>${each(employes, (employe) => {
    return `<option${add_attribute("value", employe.employeeId, 0)} class="svelte-1ibl0gn">${escape(employe.email)}</option>`;
  })}</select> <select name="type" required class="svelte-1ibl0gn"><option value="" disabled selected hidden class="svelte-1ibl0gn" data-svelte-h="svelte-1y59yca">Choose Type</option>${each(type, (t) => {
    return `<option${add_attribute("value", t, 0)} class="svelte-1ibl0gn">${escape(t)}</option>`;
  })}</select> <textarea name="description" placeholder="Enter Description"></textarea> <div class="form-button svelte-1ibl0gn" data-svelte-h="svelte-18r0hfg"><button type="submit" class="svelte-1ibl0gn">Add Task</button></div></form></div></div>` : ``} ${$taskDetailsPopup.visible ? `  <div class="popup-overlay svelte-1ibl0gn"> <div class="popup svelte-1ibl0gn">${$taskDetailsPopup.task ? `<div class="heading svelte-1ibl0gn"><div class="titleType" style="display: flex; gap: 0.4rem"><h2 class="svelte-1ibl0gn">${escape($taskDetailsPopup.task.title)}</h2> <p class="type svelte-1ibl0gn" style="${"background-color: " + escape(getBackgroundColor($taskDetailsPopup.task.type), true) + ";"}">${escape($taskDetailsPopup.task.type)}</p></div> <select name="status"${add_attribute("value", $taskDetailsPopup.task.status, 0)} required class="svelte-1ibl0gn">${each(status, (status2) => {
    return `<option${add_attribute("value", status2.id, 0)} class="svelte-1ibl0gn">${escape(status2.name)}</option>`;
  })}</select></div> <div class="details svelte-1ibl0gn"><div class="level svelte-1ibl0gn"><p class="svelte-1ibl0gn">Priority: <span class="svelte-1ibl0gn">${escape(getPriorityName($taskDetailsPopup.task.priority))}</span></p> <p class="svelte-1ibl0gn">Points: <span class="svelte-1ibl0gn">${escape($taskDetailsPopup.task.points)}</span></p> <p class="svelte-1ibl0gn">Created By: <span class="svelte-1ibl0gn">${escape($taskDetailsPopup.task.createdBy)}</span></p></div> <p class="desc svelte-1ibl0gn">${escape($taskDetailsPopup.task.description)}</p></div>` : ``}</div></div>` : ``} <div class="banner-text svelte-1ibl0gn"><div class="head svelte-1ibl0gn"><h6 class="svelte-1ibl0gn" data-svelte-h="svelte-5fdj41">Projects /</h6> <select class="svelte-1ibl0gn"><option value="" disabled selected class="svelte-1ibl0gn" data-svelte-h="svelte-1gb3di8">Select Project</option>${each(projects, (project) => {
    return `<option${add_attribute("value", project._id, 0)} class="svelte-1ibl0gn">${escape(project.title)}</option>`;
  })}</select></div> <div class="work svelte-1ibl0gn">${selectedProjectValue ? `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
    default: () => {
      return `<div class="todo svelte-1ibl0gn"><div class="heading svelte-1ibl0gn"><p class="svelte-1ibl0gn" data-svelte-h="svelte-1hdefok">ToDo</p>   <img${add_attribute("src", addIcon, 0)} alt="icon" class="svelte-1ibl0gn"></div> ${todoTasks.length > 0 ? `${each(todoTasks, (task) => {
        return `  <div class="data svelte-1ibl0gn"><div class="details svelte-1ibl0gn"><p class="title svelte-1ibl0gn">${escape(task.title)}</p> <p class="duration svelte-1ibl0gn" style="${"background-color: " + escape(getBackgroundColor(task.type), true) + ";"}">${escape(task.type)}</p></div> <img${add_attribute("src", task.assigned, 0)} alt="assigned" class="svelte-1ibl0gn"> </div>`;
      })}` : `<p class="svelte-1ibl0gn" data-svelte-h="svelte-1kzqvt4">You have no tasks</p>`}</div>`;
    }
  })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
    default: () => {
      return `<div class="progress svelte-1ibl0gn"><div class="heading svelte-1ibl0gn"><p class="svelte-1ibl0gn" data-svelte-h="svelte-olg809">Progress</p>   <img${add_attribute("src", addIcon, 0)} alt="icon" class="svelte-1ibl0gn"></div>  ${progressTasks.length > 0 ? `${each(progressTasks, (task) => {
        return ` <div class="data svelte-1ibl0gn"><div class="details svelte-1ibl0gn"><p class="title svelte-1ibl0gn">${escape(task.title)}</p> <p class="duration svelte-1ibl0gn" style="${"background-color: " + escape(getBackgroundColor(task.type), true) + ";"}">${escape(task.type)}</p></div> <img${add_attribute("src", task.assigned, 0)} alt="assigned" class="svelte-1ibl0gn"> </div>`;
      })}` : `<p class="svelte-1ibl0gn" data-svelte-h="svelte-1kzqvt4">You have no tasks</p>`}</div>`;
    }
  })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
    default: () => {
      return `<div class="done svelte-1ibl0gn"><div class="heading svelte-1ibl0gn" data-svelte-h="svelte-97c0pq"><p class="svelte-1ibl0gn">Done</p></div>  ${doneTasks.length > 0 ? `${each(doneTasks, (task) => {
        return ` <div class="data svelte-1ibl0gn"><div class="details svelte-1ibl0gn"><p class="title svelte-1ibl0gn">${escape(task.title)}</p> <p class="duration svelte-1ibl0gn" style="${"background-color: " + escape(getBackgroundColor(task.type), true) + ";"}">${escape(task.type)}</p></div> <img${add_attribute("src", task.assigned, 0)} alt="assigned" class="svelte-1ibl0gn"> </div>`;
      })}` : `<p class="svelte-1ibl0gn" data-svelte-h="svelte-1kzqvt4">You have no tasks</p>`}</div>`;
    }
  })}` : `<p class="svelte-1ibl0gn" data-svelte-h="svelte-19apkn0">Please select the project</p>`}</div></div> </div>`;
});
export {
  Page as default
};
