import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component, b as add_attribute, d as each } from "../../../../chunks/ssr.js";
import { G as Grid } from "../../../../chunks/Grid.js";
import { w as writable } from "../../../../chunks/index.js";
import { e as employ } from "../../../../chunks/1.js";
import { m as mailIcon } from "../../../../chunks/mail.js";
import { p as phoneIcon } from "../../../../chunks/phone.js";
import { a as addIcon } from "../../../../chunks/add.js";
import "chart.js/auto";
const personIcon = "/_app/immutable/assets/person.f52f8826.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".profile.svelte-8wi4ps.svelte-8wi4ps{background-color:var(--side-nav-color);min-height:83%;padding:2rem 2rem;border-radius:0.3rem;min-width:95%;margin:0 auto;overflow-y:scroll}.banner-text.svelte-8wi4ps h6.svelte-8wi4ps{font-size:24px;color:var(--color-banner-text-1);margin:0}.banner-text.svelte-8wi4ps p.svelte-8wi4ps{font-size:15px;color:var(--color-bg-1);margin-bottom:0}.details.svelte-8wi4ps.svelte-8wi4ps,.work.svelte-8wi4ps.svelte-8wi4ps{display:flex;justify-content:space-between}.details-card.svelte-8wi4ps.svelte-8wi4ps{background-color:var(--color-bg-3);width:90%;padding:1rem 1.5rem;border-radius:0.5rem}.details-card-head.svelte-8wi4ps.svelte-8wi4ps{width:100%;display:flex}.details-card-head.svelte-8wi4ps img.svelte-8wi4ps{width:5rem;height:5rem;border-radius:50%}.data.svelte-8wi4ps.svelte-8wi4ps{width:100%;display:flex;align-items:center}.data.svelte-8wi4ps img.svelte-8wi4ps{width:1.5rem;margin-top:1.4rem;height:1.5rem}.data.svelte-8wi4ps p.svelte-8wi4ps{font-size:15px;margin-top:1.5rem;margin-left:0.5rem;margin-bottom:0}form.svelte-8wi4ps.svelte-8wi4ps{margin:2rem 0}form.svelte-8wi4ps input.svelte-8wi4ps{width:95%;margin:0.2rem 0;padding:0.8rem 0.5rem;background-color:transparent;border:1px solid var(--color-bg-2);border-radius:0.5rem;color:var(--color-bg-2)}.button.svelte-8wi4ps.svelte-8wi4ps{width:100%;display:flex;justify-content:flex-end}form.svelte-8wi4ps button.svelte-8wi4ps{margin-top:1.5rem;width:30%;padding:0.6rem;border-radius:0.5rem;background-color:var(--color-banner-text-2);border:none;color:var(--color-bg-2);font-weight:600}.input-field.svelte-8wi4ps.svelte-8wi4ps::placeholder{color:#aaa;font-weight:300;font-size:0.8rem}.input-field.svelte-8wi4ps.svelte-8wi4ps:focus{outline:none;border-color:var(--color-bg-2)}.techstack.svelte-8wi4ps.svelte-8wi4ps{display:flex;justify-content:flex-start;align-items:flex-start}.techstack.svelte-8wi4ps .head.svelte-8wi4ps{font-size:1rem;font-weight:600;color:var(--color-bg-2);display:inline}.techstack.svelte-8wi4ps .technology.svelte-8wi4ps{margin-top:7px;margin-left:0.5rem;display:flex}.technology.svelte-8wi4ps p.svelte-8wi4ps{font-size:0.8rem;margin-right:2px;width:max-content}.work.svelte-8wi4ps.svelte-8wi4ps{display:flex;margin-top:2rem}.work.svelte-8wi4ps h6.svelte-8wi4ps{font-size:20px;margin-bottom:0.5rem}.projects.svelte-8wi4ps.svelte-8wi4ps,.documents.svelte-8wi4ps.svelte-8wi4ps,.Tasks.svelte-8wi4ps.svelte-8wi4ps{background-color:var(--color-bg-3);padding:0.5rem 0.8rem;border-radius:0.3rem}.document-name.svelte-8wi4ps.svelte-8wi4ps{background-color:var(--side-nav-color);padding:0.5rem 0.5rem;font-size:1rem;font-weight:500;margin:0.3rem 0;border-radius:0.3rem}.project-tab.svelte-8wi4ps.svelte-8wi4ps{background-color:var(--side-nav-color);padding:0.5rem 0.5rem;margin:0.3rem 0;border-radius:0.3rem}.project-name.svelte-8wi4ps.svelte-8wi4ps{margin-top:0;font-size:1rem;font-weight:600}.project-tab.svelte-8wi4ps .client.svelte-8wi4ps{font-size:0.6rem;margin-top:0.1rem;color:#ccc}.card.svelte-8wi4ps.svelte-8wi4ps{margin:0 0.5rem}.documents-head.svelte-8wi4ps.svelte-8wi4ps{display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem}.documents-head.svelte-8wi4ps img.svelte-8wi4ps{width:7%;cursor:pointer}.popup-overlay.svelte-8wi4ps.svelte-8wi4ps{z-index:10;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.632);display:flex;justify-content:center;align-items:center}.popup.svelte-8wi4ps.svelte-8wi4ps{background-color:var(--color-bg-3);width:50%;height:auto;padding:2rem;border-radius:8px;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1)}.popup.svelte-8wi4ps form.svelte-8wi4ps{display:grid;grid-template-columns:auto;grid-row-gap:10px}form.svelte-8wi4ps input.svelte-8wi4ps{background-color:var(--color-text);padding:0.8rem 0.8rem;border:none;margin-top:0.2rem;border-radius:0.5rem;color:var(--color-bg-4);font-size:1rem}form.svelte-8wi4ps input.svelte-8wi4ps::placeholder{color:var(--color-bg-4)}.popup.svelte-8wi4ps h2.svelte-8wi4ps{margin-top:0;color:var(--color-bg-0);font-size:25px}.form-button.svelte-8wi4ps.svelte-8wi4ps{width:100%;display:flex;justify-content:flex-end}form.svelte-8wi4ps button.svelte-8wi4ps{background-color:var(--color-banner-text-2);border:none;padding:0.8rem 2.5rem;margin-top:0.8rem;border-radius:0.3rem;color:var(--color-bg-1);font-weight:600;cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showPopup, $$unsubscribe_showPopup;
  const formData = { oldPassword: "", newPassword: "" };
  const employContactData = [
    {
      id: 1,
      name: "Employ Name",
      icon: personIcon
    },
    {
      id: 2,
      name: "1234567890",
      icon: phoneIcon
    },
    {
      id: 3,
      name: "employ@gmail.com",
      icon: mailIcon
    }
  ];
  const teckStack = ["Node JS", "Express JS", "SQL", "GCP", "AWS"];
  const projects = [
    {
      id: 1,
      name: "JagBandhu",
      client: "Client Name",
      teckStack: ["Node JS", "Express JS", "SQL", "Mongo DB"]
    },
    {
      id: 2,
      name: "Nehwe",
      client: "Client Name",
      teckStack: ["Node JS", "Express JS", "SQL"]
    },
    {
      id: 3,
      name: "SRBS",
      client: "Client Name",
      teckStack: ["Node JS", "Express JS", "Mongo DB"]
    }
  ];
  const documents = ["Offer Letter", "Joining Letter", "Increament Offer", "Certification of CS50"];
  const showPopup = writable({ visible: false, formType: 0 });
  $$unsubscribe_showPopup = subscribe(showPopup, (value) => $showPopup = value);
  $$result.css.add(css);
  $$unsubscribe_showPopup();
  return `${$$result.head += `<!-- HEAD_svelte-19mfyn7_START -->${$$result.title = `<title>Profile</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-19mfyn7_END -->`, ""} <div class="profile svelte-8wi4ps"> ${$showPopup.visible ? `    <div class="popup-overlay svelte-8wi4ps"><div class="popup svelte-8wi4ps"><h2 class="svelte-8wi4ps">${escape($showPopup.formType === 0 ? "Add Task to TODO" : "Add Task to PROGRESS")}</h2> <form class="svelte-8wi4ps" data-svelte-h="svelte-1wdd6t7"><input type="text" name="title" placeholder="Enter Title" required class="svelte-8wi4ps"> <input type="file" name="file" accept=".pdf,.doc,.docx" required class="svelte-8wi4ps"> <div class="form-button svelte-8wi4ps"><button type="submit" class="svelte-8wi4ps">Add Task</button></div></form></div></div>` : ``} <div class="details svelte-8wi4ps" style="width: 100%;">${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
    default: () => {
      return `<div class="banner-text svelte-8wi4ps"><div class="details-card svelte-8wi4ps"><div class="details-card-head svelte-8wi4ps">${validate_component(Grid, "Grid").$$render($$result, { xs: 3, md: 3, lg: 3 }, {}, {
        default: () => {
          return `<img${add_attribute("src", employ, 0)} alt="employ" class="svelte-8wi4ps">`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 8, md: 8, lg: 8 }, {}, {
        default: () => {
          return `<h6 class="svelte-8wi4ps" data-svelte-h="svelte-e30m13">Employ ID</h6> <p class="svelte-8wi4ps" data-svelte-h="svelte-5ya21o">Role</p>`;
        }
      })}</div> <div class="employContact">${each(employContactData, (item) => {
        return `<div class="data svelte-8wi4ps"><img${add_attribute("src", item.icon, 0)} alt="icon" class="svelte-8wi4ps"> <p class="svelte-8wi4ps">${escape(item.name)}</p> </div>`;
      })} <div class="techstack svelte-8wi4ps"><p class="head svelte-8wi4ps" data-svelte-h="svelte-or9sn5">Tech Stack:</p> <div class="technology svelte-8wi4ps">${each(teckStack, (item) => {
        return `<p class="svelte-8wi4ps">${escape(item)}, </p>`;
      })}</div></div></div></div></div>`;
    }
  })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
    default: () => {
      return `<div class="banner-text svelte-8wi4ps"><div class="details-card svelte-8wi4ps"><h6 class="svelte-8wi4ps" data-svelte-h="svelte-t6vi6h">Change Password</h6> <form class="svelte-8wi4ps"><div class="form-group"><input type="email" placeholder="Old Password" class="input-field svelte-8wi4ps"${add_attribute("value", formData.oldPassword, 0)}></div> <div class="form-group" style="margin-top: 0.5rem;"><input type="text" placeholder="New Password" class="input-field svelte-8wi4ps"${add_attribute("value", formData.newPassword, 0)}></div> <div class="button svelte-8wi4ps" data-svelte-h="svelte-1x7fb2t"><button type="submit" class="svelte-8wi4ps">Submit</button></div></form></div></div>`;
    }
  })}</div> <div class="work svelte-8wi4ps">${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
    default: () => {
      return `<div class="banner-text card svelte-8wi4ps"><div class="projects svelte-8wi4ps"><h6 class="svelte-8wi4ps" data-svelte-h="svelte-1mnc6z4">Projects</h6> <div class="projects-list">${each(projects, (item) => {
        return `<div class="project-tab svelte-8wi4ps"><p class="project-name svelte-8wi4ps">${escape(item.name)}</p> <p class="client svelte-8wi4ps">${escape(item.client)}</p> <div class="techstack svelte-8wi4ps"><p class="head svelte-8wi4ps" data-svelte-h="svelte-or9sn5">Tech Stack:</p> <div class="technology svelte-8wi4ps">${each(item.teckStack, (tech) => {
          return `<p class="svelte-8wi4ps">${escape(tech)}, </p>`;
        })} </div></div> </div>`;
      })}</div></div></div>`;
    }
  })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
    default: () => {
      return `<div class="banner-text card svelte-8wi4ps"><div class="documents svelte-8wi4ps"><div class="documents-head svelte-8wi4ps"><h6 class="svelte-8wi4ps" data-svelte-h="svelte-1odq1y0">Documents</h6>   <img${add_attribute("src", addIcon, 0)} alt="icon" role="button" tabindex="0" class="svelte-8wi4ps"></div> <div class="documents-list">${each(documents, (item) => {
        return `<div class="document-name svelte-8wi4ps">${escape(item)}</div>`;
      })}</div></div></div>`;
    }
  })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
    default: () => {
      return `<div class="banner-text card svelte-8wi4ps" data-svelte-h="svelte-14o77wd"><div class="Tasks svelte-8wi4ps"><h6 class="svelte-8wi4ps">Tasks</h6> <canvas id="chart"></canvas></div></div>`;
    }
  })}</div> </div>`;
});
export {
  Page as default
};
