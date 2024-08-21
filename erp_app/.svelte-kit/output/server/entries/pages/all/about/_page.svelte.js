import { c as create_ssr_component, v as validate_component, b as add_attribute, d as each, e as escape } from "../../../../chunks/ssr.js";
import { V as VerticalSpacer } from "../../../../chunks/VerticalSpacer.js";
import { G as Grid } from "../../../../chunks/Grid.js";
import { a as aboutImage } from "../../../../chunks/about us image.js";
import { e as employ } from "../../../../chunks/1.js";
const AboutsecImage1 = "/_app/immutable/assets/aboutSec1.2aa8a989.png";
const meetingImage = "/_app/immutable/assets/meeting.ea670d2e.png";
const brainstromingImage = "/_app/immutable/assets/brainstroming.e792c051.png";
const projectImage = "/_app/immutable/assets/project.e8ad7889.png";
const solutionImage = "/_app/immutable/assets/solution.6748f314.png";
const linkedInIcon = "/_app/immutable/assets/linkedin.5ce646b0.svg";
const githubIcon = "/_app/immutable/assets/github.8e23cdac.svg";
const behanceIcon = "/_app/immutable/assets/behance.9e240b26.svg";
const e2 = "/_app/immutable/assets/2.477a05ab.jpg";
const e3 = "/_app/immutable/assets/3.1376b143.jpg";
const e4 = "/_app/immutable/assets/4.0d42a67e.jpg";
const e5 = "/_app/immutable/assets/5.92431bcb.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "hr.svelte-88ykfz.svelte-88ykfz{border:none;border-top:0.5px solid var(--color-bg-0);margin:0}.discover.svelte-88ykfz.svelte-88ykfz{background-color:var(--color-bg-3);width:100%;padding:1.2rem}.banner-text.svelte-88ykfz h3.svelte-88ykfz{font-size:40px;color:var(--color-banner-text-1);margin-top:-1.5rem}.banner-text.svelte-88ykfz h3 span.svelte-88ykfz{color:var(--color-banner-text-2)}.content.svelte-88ykfz.svelte-88ykfz{margin-top:-2.2rem}.web-container.svelte-88ykfz.svelte-88ykfz{max-width:70rem;margin:0 auto}.work.svelte-88ykfz .banner-text.svelte-88ykfz{text-align:center}.tab.svelte-88ykfz.svelte-88ykfz{border:2px solid var(--color-bg-3);border-radius:1rem;padding:1rem;transition:0.5s}.tab.svelte-88ykfz.svelte-88ykfz:hover{background-color:var(--color-bg-3);border:none;margin-top:-2rem}.tab.svelte-88ykfz img.svelte-88ykfz{width:30%;text-align:center}.tab.svelte-88ykfz p.svelte-88ykfz{font-size:40px;margin-bottom:0;margin-top:0;font-weight:600;opacity:0.3}.tab.svelte-88ykfz h3.svelte-88ykfz{margin-bottom:0}.tab.svelte-88ykfz .content.svelte-88ykfz{text-align:center;margin-top:0.5rem}.name.svelte-88ykfz.svelte-88ykfz{color:var(--color-banner-text-1);font-weight:600}.role.svelte-88ykfz.svelte-88ykfz{font-size:0.8rem}.team-tab.svelte-88ykfz.svelte-88ykfz{background-size:cover;background-position:center;border-radius:1rem;overflow:hidden;height:10.5rem}.team-content.svelte-88ykfz.svelte-88ykfz{background-color:rgba(0, 0, 0, 0.651);padding:5.5rem 0.5rem 1rem 0.5rem;transition:1s}.team-tab.svelte-88ykfz:hover .team-content.svelte-88ykfz{padding:1.9rem 0.5rem 1rem 0.5rem}.team-content.svelte-88ykfz .links.svelte-88ykfz{display:flex;justify-content:flex-start;gap:1rem;align-items:center}.team-content.svelte-88ykfz .links a.svelte-88ykfz{background-color:#eeeeee70;padding:0.5rem;border-radius:5px;transition:0.5s}.team-content.svelte-88ykfz .links a.svelte-88ykfz:hover{background-color:var(--color-banner-text-2)}a.svelte-88ykfz img.svelte-88ykfz{width:70%}.service-btn.svelte-88ykfz.svelte-88ykfz{padding:0.5rem 5rem;background-color:var(--color-banner-text-2);color:var(--color-bg-2);border:none;border-radius:0.5rem;cursor:pointer}.touch-btn.svelte-88ykfz.svelte-88ykfz{padding:0.5rem 5rem;background-color:transparent;color:var(--color-bg-2);border:none;cursor:pointer;border-radius:0.5rem;transition:0.3s}.touch-btn.svelte-88ykfz.svelte-88ykfz:hover{background-color:var(--color-banner-text-2)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const employData = [
    {
      id: 1,
      image: employ,
      name: "Employe1",
      role: "Role",
      linkedIn: "https://www.linkedin.com",
      github: "https://www.github.com"
    },
    {
      id: 2,
      image: e2,
      name: "Employe2",
      role: "Role2",
      linkedIn: "https://www.linkedin.com",
      github: "https://www.github.com"
    },
    {
      id: 3,
      image: e3,
      name: "Employe3",
      role: "Role3",
      linkedIn: "https://www.linkedin.com",
      github: "https://www.github.com"
    },
    {
      id: 4,
      image: e4,
      name: "Employe4",
      role: "Role4",
      linkedIn: "https://www.linkedin.com",
      github: "https://www.github.com"
    },
    {
      id: 5,
      image: e5,
      name: "Employe5",
      role: "Role5",
      linkedIn: "https://www.linkedin.com",
      github: "https://www.github.com",
      behance: "https://www.behance.com"
    }
  ];
  const workData = [
    {
      id: "01",
      image: meetingImage,
      name: "Meeting Client"
    },
    {
      id: "02",
      image: brainstromingImage,
      name: "BrainStroming"
    },
    {
      id: "03",
      image: solutionImage,
      name: "Solution"
    },
    {
      id: "04",
      image: projectImage,
      name: "Project Done"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ds1qyu_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1ds1qyu_END -->`, ""} <div style="display: contents; --height:5rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> <div class="web-container svelte-88ykfz">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
        default: () => {
          return `<img${add_attribute("src", AboutsecImage1, 0)} alt="S&M Scholarly Solutions" width="95%" height="100%">`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 7, lg: 7 }, {}, {
        default: () => {
          return `<div class="content svelte-88ykfz" data-svelte-h="svelte-13iessm"><div class="banner-text svelte-88ykfz"><h6>ABOUT US</h6> <h3 class="svelte-88ykfz">Who we are ?</h3></div> <p class="content svelte-88ykfz">We are a group of passionate and committed professionals building software solutions that help our clients grow their businesses. Our technical expertise allows us to build applications on the web, android and ios platforms employing top of the line technologies for the best and quick solutions for our client. We know timing is everything when it comes to business and we specialize in providing timebound solutions. We also work collaboratively with our clients to understand their business and develop solutions covering all edge cases and scenarios so they receive a Bugfree product with high performance to take their business to next level.</p></div>`;
        }
      })}`;
    }
  })}</div> <div style="display: contents; --height:3rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> <div class="discover svelte-88ykfz"><div class="web-container svelte-88ykfz">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 7, lg: 7 }, {}, {
        default: () => {
          return `<div class="banner-text svelte-88ykfz" data-svelte-h="svelte-19s59bn"><h6 class="heading6">DISCOVER OUR COMPANY</h6> <h3 class="heading3 svelte-88ykfz">Bringing New IT Business <span class="svelte-88ykfz">Solution</span></h3> <h4>Cutting-Edge Innovation</h4> <p>Pioneering the future, we embrace the latest in
						technology, from advanced cloud solutions to artificial
						intelligence, ensuring your business stays at the
						forefront of innovation.</p> <h4>Client-Centric Approach</h4> <p>Your success is our priority. We work closely with you,
						understanding your unique challenges to deliver tailored
						IT solutions that align with your business goals and
						drive sustained growth.</p></div>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 5 }, {}, {
        default: () => {
          return `<div class="about-image" data-svelte-h="svelte-7abx5x"><img${add_attribute("src", aboutImage, 0)} alt="S&M Scholarly Solutions"></div>`;
        }
      })}`;
    }
  })}</div></div> <div style="display: contents; --height:3rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> <div class="work svelte-88ykfz"><div class="web-container svelte-88ykfz"><div class="banner-text svelte-88ykfz" data-svelte-h="svelte-p6x6up"><h6>OUR WORK</h6> <h3 class="svelte-88ykfz">How We Work</h3></div> ${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${each(workData, (item) => {
        return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 3, lg: 3 }, {}, {
          default: () => {
            return `<div class="tab svelte-88ykfz"><p class="svelte-88ykfz">${escape(item.id)}</p> <div class="content svelte-88ykfz"><img${add_attribute("src", item.image, 0)} alt="Illustration" class="svelte-88ykfz"> <h3 class="svelte-88ykfz">${escape(item.name)}</h3> </div></div> `;
          }
        })}`;
      })}`;
    }
  })}</div></div> <div style="display: contents; --height:3rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> <div class="team"><div class="web-container svelte-88ykfz"><div class="banner-text svelte-88ykfz"><h6 data-svelte-h="svelte-yrsba4">OUR EXPERT</h6> <h3 class="svelte-88ykfz" data-svelte-h="svelte-1izj2pa">Team Members</h3> ${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${each(employData, (item) => {
        return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 2, lg: 2 }, {}, {
          default: () => {
            return `<div class="team-tab svelte-88ykfz" style="${"background-image: url(" + escape(item.image, true) + ")"}"><div class="team-content svelte-88ykfz"><p class="name svelte-88ykfz" style="margin-bottom: 0.4rem">${escape(item.name)}</p> <hr class="svelte-88ykfz"> <p class="role svelte-88ykfz" style="margin-top: 0.4rem">${escape(item.role)}</p> <div class="links svelte-88ykfz">${validate_component(Grid, "Grid").$$render($$result, { xs: 3, md: 3, lg: 3 }, {}, {
              default: () => {
                return `<a${add_attribute("href", item.linkedIn, 0)} class="svelte-88ykfz"><img${add_attribute("src", linkedInIcon, 0)} alt="linkedIn" class="svelte-88ykfz"></a> `;
              }
            })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 3, md: 3, lg: 3 }, {}, {
              default: () => {
                return `<a${add_attribute("href", item.github, 0)} class="svelte-88ykfz"><img${add_attribute("src", githubIcon, 0)} alt="linkedIn" class="svelte-88ykfz"></a> `;
              }
            })} ${item.behance ? `${validate_component(Grid, "Grid").$$render($$result, { xs: 3, md: 3, lg: 3 }, {}, {
              default: () => {
                return `<a${add_attribute("href", item.github, 0)} class="svelte-88ykfz"><img${add_attribute("src", behanceIcon, 0)} alt="linkedIn" class="svelte-88ykfz"></a> `;
              }
            })}` : ``}</div> </div></div> `;
          }
        })}`;
      })}`;
    }
  })}</div></div></div> <div style="display: contents; --height:3rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> <div class="buttons"><div class="web-container svelte-88ykfz">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 5, lg: 5 }, {}, {
        default: () => {
          return `<a href="/all/services" data-svelte-h="svelte-5lkevy"><button class="service-btn svelte-88ykfz">Our Services</button></a>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 5, lg: 5 }, {}, {
        default: () => {
          return `<a href="/all/contact" data-svelte-h="svelte-13y7ch0"><button class="touch-btn svelte-88ykfz">Get in touch</button></a>`;
        }
      })}`;
    }
  })}</div> </div>`;
});
export {
  Page as default
};
