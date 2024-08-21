import { c as create_ssr_component, v as validate_component, d as each, e as escape, b as add_attribute } from "../../../../chunks/ssr.js";
import { V as VerticalSpacer } from "../../../../chunks/VerticalSpacer.js";
import { G as Grid } from "../../../../chunks/Grid.js";
import { a as projectImage4, p as projectImage5 } from "../../../../chunks/nehwe.js";
const projectImage1 = "/_app/immutable/assets/cms.5fb49ab4.png";
const projectImage2 = "/_app/immutable/assets/erp.a0b9dc0b.png";
const projectImage3 = "/_app/immutable/assets/go scholarly.c8d9e5d8.png";
const projectImage6 = "/_app/immutable/assets/srisriholistick.64353600.png";
const projectImage7 = "/_app/immutable/assets/stupicks.b731c295.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".banner-text.svelte-1fs4hq8 h3.svelte-1fs4hq8{font-size:30px;color:var(--color-banner-text-1);margin-top:-1.5rem;margin-bottom:0}.banner-text.svelte-1fs4hq8 h6.svelte-1fs4hq8{margin-top:0.5rem;margin-bottom:0}.project.svelte-1fs4hq8.svelte-1fs4hq8,.info.svelte-1fs4hq8.svelte-1fs4hq8{display:flex;align-items:center}.project.svelte-1fs4hq8.svelte-1fs4hq8{padding:2rem 10rem;margin:1rem 0}.project.expanded.svelte-1fs4hq8.svelte-1fs4hq8{align-items:flex-start}p.svelte-1fs4hq8.svelte-1fs4hq8{font-size:0.8rem;font-weight:400;padding:0 0.5rem}.tech.svelte-1fs4hq8.svelte-1fs4hq8{display:flex;align-items:center;padding:0 0 0 0.5rem;margin-top:-1rem;color:#ddd\n    }.techHeading.svelte-1fs4hq8.svelte-1fs4hq8{font-size:1rem;font-weight:600;padding:0;margin-right:0.5rem}.technology.svelte-1fs4hq8.svelte-1fs4hq8{font-size:0.8rem;margin:0 0.2rem;font-weight:500}button.svelte-1fs4hq8.svelte-1fs4hq8{padding:0.2rem 0.5rem;background:var(--color-primary);border:none;color:var(--color-special-text);cursor:pointer;font-size:0.8rem}.odd.svelte-1fs4hq8.svelte-1fs4hq8{flex-direction:row-reverse;background:var(--color-bg-3)}",
  map: null
};
function isOdd(id) {
  return id % 2 !== 0;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const projects = [
    {
      id: 1,
      image: projectImage1,
      title: "Cafetaria Managment System",
      client: "Client Name",
      duration: "Nov, 2022 - Present",
      desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
      techStack: ["Figma", "Express JS", "SQL"]
    },
    {
      id: 2,
      image: projectImage2,
      title: "Employe Managment System",
      client: "Client Name",
      duration: "Nov, 2022 - Present",
      desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
      techStack: ["Figma", "React JS", "Express JS", "SQL"]
    },
    {
      id: 3,
      image: projectImage3,
      title: "Go Scholarly",
      client: "Client Name",
      duration: "Nov, 2022 - Present",
      desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
      techStack: ["Figma", "React JS", "Express JS", "SQL"]
    },
    {
      id: 4,
      image: projectImage4,
      title: "Jagbandhu",
      client: "Client Name",
      duration: "Nov, 2022 - Present",
      desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
      techStack: ["Figma", "React JS", "Express JS", "SQL"]
    },
    {
      id: 5,
      image: projectImage5,
      title: "Nehwe",
      client: "Client Name",
      duration: "Aug, 2022 - Nov, 2022",
      desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
      techStack: ["Figma", "React JS", "Express JS", "SQL"]
    },
    {
      id: 6,
      image: projectImage6,
      title: "Sri Sri holistic",
      client: "Client Name",
      duration: "Nov, 2022 - Present",
      desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
      techStack: ["Figma", "React JS", "Express JS", "SQL"]
    },
    {
      id: 7,
      image: projectImage7,
      title: "Stupicks",
      client: "Client Name",
      duration: "Nov, 2022 - Present",
      desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
      techStack: ["Figma", "React JS", "Express JS", "SQL"]
    }
  ];
  let expanded = {};
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-z1in7_START -->${$$result.title = `<title>Projects</title>`, ""}<meta name="description" content="Projects we done"><!-- HEAD_svelte-z1in7_END -->`, ""} <div style="display: contents; --height:3rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> <div class="banner-text svelte-1fs4hq8">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 12, lg: 12 }, {}, {
        default: () => {
          return `${each(projects, (item) => {
            return `<div class="${"project " + escape(isOdd(item.id) ? "odd" : "", true) + " " + escape(expanded[item.id] ? "expanded" : "", true) + " svelte-1fs4hq8"}">${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
              default: () => {
                return `<img${add_attribute("src", item.image, 0)} alt="Client icon" width="50%"> `;
              }
            })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 8, lg: 8 }, {}, {
              default: () => {
                return `<div class="info svelte-1fs4hq8">${validate_component(Grid, "Grid").$$render($$result, { xs: 9, md: 9, lg: 9 }, {}, {
                  default: () => {
                    return `<h3 class="svelte-1fs4hq8">${escape(item.title)}</h3> <h6 class="svelte-1fs4hq8">${escape(item.client)}</h6> `;
                  }
                })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 3, md: 3, lg: 3 }, {}, {
                  default: () => {
                    return `<h6 class="svelte-1fs4hq8">${escape(item.duration)}</h6> `;
                  }
                })}</div> <div class="desc">${!expanded[item.id] ? `<p class="svelte-1fs4hq8">${escape(item.desc.split(" ").slice(0, 10).join(" "))}...</p>` : ``} ${expanded[item.id] ? `<p class="svelte-1fs4hq8">${escape(item.desc)}</p> <div class="tech svelte-1fs4hq8"><p class="techHeading svelte-1fs4hq8" data-svelte-h="svelte-s4jmvd">TechStack :</p> ${each(item.techStack, (name) => {
                  return `<span class="technology svelte-1fs4hq8">${escape(name)} ,</span>`;
                })} </div>` : ``}</div> <button class="svelte-1fs4hq8">${expanded[item.id] ? `Read Less` : ``} ${!expanded[item.id] ? `Read More` : ``}</button> `;
              }
            })} </div>`;
          })}`;
        }
      })}`;
    }
  })}</div> <div style="display: contents; --height:3rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
