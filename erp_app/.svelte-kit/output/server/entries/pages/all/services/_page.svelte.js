import { c as create_ssr_component, v as validate_component, d as each, e as escape } from "../../../../chunks/ssr.js";
import { V as VerticalSpacer } from "../../../../chunks/VerticalSpacer.js";
import { G as Grid } from "../../../../chunks/Grid.js";
const webDevImg = "/_app/immutable/assets/webDevelopment.9cba338d.png";
const mobileDevImg = "/_app/immutable/assets/mobileappdevelopment.a2150c83.png";
const webHostImg = "/_app/immutable/assets/webHosting.e9d3814d.png";
const supportImg = "/_app/immutable/assets/supportandMaintanance.1d53b5cc.png";
const IoTImg = "/_app/immutable/assets/IoTSolutions.e2635efc.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "hr.svelte-1gzqtf8.svelte-1gzqtf8{border:none;border-top:0.5px solid var(--color-bg-0);margin:0}.banner-text.svelte-1gzqtf8 h3.svelte-1gzqtf8{font-size:40px;color:var(--color-banner-text-1);margin-top:-1.5rem}.content.svelte-1gzqtf8.svelte-1gzqtf8{margin-top:-2.2rem}.web-container.svelte-1gzqtf8.svelte-1gzqtf8{max-width:70rem;margin:0 auto}.service-tab.svelte-1gzqtf8.svelte-1gzqtf8{background-size:cover;background-position:center;height:20rem;overflow:hidden}.service-tab.svelte-1gzqtf8 .content.svelte-1gzqtf8{background-color:rgba(0, 0, 0, 0.651);padding:18.5rem 0.5rem 0.8rem 0.5rem;transition:1s}.service-tab.svelte-1gzqtf8:hover .content.svelte-1gzqtf8{background-color:rgba(0, 0, 0, 0.822);padding:10rem 0.5rem 5rem 0.5rem}.title.svelte-1gzqtf8.svelte-1gzqtf8{font-size:1.2rem;color:var(--color-banner-text-1);font-weight:600}.desc.svelte-1gzqtf8.svelte-1gzqtf8{font-size:0.8rem}.btn-tab.svelte-1gzqtf8.svelte-1gzqtf8{border:1px solid var(--color-bg-3)}.btn-tab.svelte-1gzqtf8 p.svelte-1gzqtf8{padding:0.8rem 0.8rem}.btn-tab.svelte-1gzqtf8 hr.svelte-1gzqtf8{margin:0 0.5rem}.btn-tab.svelte-1gzqtf8 button.svelte-1gzqtf8{margin:0 1rem;padding:0.5rem 2.5rem;border:none;background-color:var(--color-banner-text-2);color:var(--color-bg-2);font-weight:600;cursor:pointer}.service-desc.svelte-1gzqtf8.svelte-1gzqtf8{border:1px solid var(--color-bg-3);border-radius:0.5rem;padding:0 1rem;height:9rem}.service-desc.svelte-1gzqtf8 h4.svelte-1gzqtf8{color:var(--color-banner-text-1)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const servicesData = [
    {
      id: 1,
      image: webDevImg,
      title: "Web Development",
      desc: "We offer Web development and cloud management, optimizing performance, affordability, and data security with tailored server, storage, and backup solutions."
    },
    {
      id: 2,
      image: mobileDevImg,
      title: "Mobile App Development",
      desc: "We specialize in mobile app development, delivering high-performance, data security, data storage, user-friendly applications tailored to your needs."
    },
    {
      id: 3,
      image: webHostImg,
      title: "Web Hosting",
      desc: "We offer cloud management services, optimizing server, storage, and database configurations for performance, affordability, and data security, with expert guidance and data analytics support."
    },
    {
      id: 4,
      image: supportImg,
      title: "Support & Maintanance",
      desc: "We provide cloud management services, ensuring optimal server, storage, and database configurations for secure, efficient, and cost-effective application performance."
    },
    {
      id: 5,
      image: IoTImg,
      title: "IoT Solutions & Services",
      desc: "Embrace the future with our IoT solutions, where innovation meets connectivity to unlock new possibilities and efficiencies for your business in the digital ecosystem."
    },
    {
      id: 6,
      title: "Looking for solutions that fit your needs?",
      desc: "Ready to elevate your business with our comprehensive suite of tailored digital solutions? Contact us today to embark on a journey of innovation and success."
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-xtxnnt_START -->${$$result.title = `<title>Services</title>`, ""}<meta name="description" content="Services we offer"><!-- HEAD_svelte-xtxnnt_END -->`, ""} <div style="display: contents; --height:3rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> <div class="web-container svelte-1gzqtf8"><div class="banner-text svelte-1gzqtf8"><h6 data-svelte-h="svelte-1baenb6">SERVICES</h6> <h3 class="svelte-1gzqtf8" data-svelte-h="svelte-1d7b59l">Services We Provide</h3> ${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${each(servicesData, (item) => {
        return `${item.id != 6 ? `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
          default: () => {
            return `<div class="service-tab svelte-1gzqtf8" style="${"background-image: url(" + escape(item.image, true) + ");"}"><div class="content svelte-1gzqtf8"><p class="title svelte-1gzqtf8">${escape(item.title)}</p> <hr class="svelte-1gzqtf8"> <p class="desc svelte-1gzqtf8">${escape(item.desc)}</p> </div></div> `;
          }
        })}` : ``} ${item.id === 6 ? `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
          default: () => {
            return `<div class="service-tab btn-tab svelte-1gzqtf8"><div class="last-content"><p class="title svelte-1gzqtf8" style="margin-top: 2rem;">${escape(item.title)}</p> <hr class="svelte-1gzqtf8"> <p class="desc svelte-1gzqtf8">${escape(item.desc)}</p> <a href="/all/contact" data-svelte-h="svelte-1iga9d6"><button class="svelte-1gzqtf8">Contact Us</button></a> </div></div> `;
          }
        })}` : ``}`;
      })}`;
    }
  })}</div></div> <div style="display: contents; --height:3rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> <div class="web-container svelte-1gzqtf8"><div class="banner-text svelte-1gzqtf8"><h6 data-svelte-h="svelte-8gn6go">WHY CHOOSE US?</h6> <h3 class="svelte-1gzqtf8" data-svelte-h="svelte-1ingc8l">Delivering Optimal Solutions</h3> ${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
        default: () => {
          return `<div class="service-desc svelte-1gzqtf8" data-svelte-h="svelte-1d48st9"><div class="service-header"><h4 class="svelte-1gzqtf8">Expertise that Drives Success</h4></div> <p>Our seasoned team ensures precision, innovation, and deep technological insight, guaranteeing the success of your projects.</p></div>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
        default: () => {
          return `<div class="service-desc svelte-1gzqtf8" data-svelte-h="svelte-1i8qphv"><div class="service-header"><h4 class="svelte-1gzqtf8">Client-Centric Approach</h4></div> <p>Prioritizing your unique needs, we collaborate closely to exceed your expectations, making your success our primary focus.</p></div>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
        default: () => {
          return `<div class="service-desc svelte-1gzqtf8" data-svelte-h="svelte-zmmwbw"><div class="service-header"><h4 class="svelte-1gzqtf8">Innovation at the Core</h4></div> <p>Embedded in our DNA, innovation is the driving force that keeps you ahead in an ever-evolving digital landscape.</p></div>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
        default: () => {
          return `<div class="service-desc svelte-1gzqtf8" data-svelte-h="svelte-25a9n1"><div class="service-header"><h4 class="svelte-1gzqtf8">Reliability and Security</h4></div> <p>Trust our robust security measures and reliable infrastructure, providing a secure environment for uninterrupted operations and peace of mind.</p></div>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
        default: () => {
          return `<div class="service-desc svelte-1gzqtf8" data-svelte-h="svelte-1mqjvfh"><div class="service-header"><h4 class="svelte-1gzqtf8">Dedicated Support and Maintenance</h4></div> <p>Beyond project completion, our support and maintenance services ensure your digital assets are always optimized, secure, and future-ready.</p></div>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
        default: () => {
          return `<div class="service-desc svelte-1gzqtf8" data-svelte-h="svelte-ny4h59"><div class="service-header"><h4 class="svelte-1gzqtf8">Tailored Solutions for Every Business</h4></div> <p>Offering customized solutions, our flexible approach ensures services that align seamlessly with your unique vision and business goals.</p></div>`;
        }
      })}`;
    }
  })}</div></div> <div style="display: contents; --height:3rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
