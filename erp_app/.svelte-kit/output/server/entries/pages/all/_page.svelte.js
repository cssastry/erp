import { c as create_ssr_component, d as each, b as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { G as Grid } from "../../../chunks/Grid.js";
import { V as VerticalSpacer } from "../../../chunks/VerticalSpacer.js";
import { p as projectImage5, a as projectImage4 } from "../../../chunks/nehwe.js";
import { a as aboutImage } from "../../../chunks/about us image.js";
import { c as contactImage, l as locationIcon } from "../../../chunks/location.js";
import { m as mailIcon } from "../../../chunks/mail.js";
import { p as phoneIcon } from "../../../chunks/phone.js";
const banner = "/_app/immutable/assets/hero 1home.ec8f6878.png";
const Carousel_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#carousel-container.svelte-455sr1.svelte-455sr1{width:100%;overflow-x:hidden}#carousel-images.svelte-455sr1.svelte-455sr1{display:flex;flex-wrap:nowrap;justify-content:center;align-items:center}#carousel-images.svelte-455sr1 img.svelte-455sr1{width:var(--imageWidth);margin:0 var(--imageSpacing)}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images = [] } = $$props;
  let { speed = 1e3 } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  $$result.css.add(css$1);
  return `<div id="carousel-container" class="svelte-455sr1"><div id="carousel-images" class="svelte-455sr1">${each(images, (image) => {
    return `<img${add_attribute("src", image.path, 0)}${add_attribute("alt", image.id, 0)}${add_attribute("id", image.id, 0)} class="svelte-455sr1">`;
  })}</div> </div>`;
});
const Clients = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images = [
    {
      path: "src/lib/images/clients/jagnabdhu.png",
      id: "client1"
    },
    {
      path: "src/lib/images/clients/nehwe.png",
      id: "client2"
    },
    {
      path: "src/lib/images/clients/cms.png",
      id: "client3"
    },
    {
      path: "src/lib/images/clients/erp.png",
      id: "client4"
    },
    {
      path: "src/lib/images/clients/go scholarly.png",
      id: "client5"
    },
    {
      path: "src/lib/images/clients/stupicks.png",
      id: "client6"
    },
    {
      path: "src/lib/images/clients/srisriholistick.png",
      id: "client7"
    }
  ];
  return `<div style="display: contents; --imageWidth:60px; --imageSpacing:20px;">${validate_component(Carousel, "Carousel").$$render($$result, { images }, {}, {})}</div>`;
});
const icon1 = "/_app/immutable/assets/icon1.c982e863.svg";
const icon2 = "/_app/immutable/assets/icon2.b580af2e.svg";
const icon3 = "/_app/immutable/assets/icon3.7aeae243.svg";
const icon4 = "/_app/immutable/assets/icon4.ff5c4500.svg";
const techImage = "/_app/immutable/assets/techImage.1e264acb.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1s94ijb.svelte-1s94ijb{display:inline}.banner-text.svelte-1s94ijb h3.svelte-1s94ijb{font-size:40px;color:var(--color-banner-text-1)}.banner-text.svelte-1s94ijb h3 span.svelte-1s94ijb{color:var(--color-banner-text-2)}.banner-text.svelte-1s94ijb a button.svelte-1s94ijb{padding:0.5rem 2rem;border-radius:0.5rem;font-size:1.1rem;font-weight:500;color:var(--color-bg-2);border:none;background-color:var(--color-banner-text-2);cursor:pointer}.banner-image.svelte-1s94ijb img.svelte-1s94ijb{width:100%}.discover.svelte-1s94ijb.svelte-1s94ijb{background-color:var(--color-bg-3);width:100%;padding:1.2rem}.services.svelte-1s94ijb.svelte-1s94ijb{padding:1.2rem}.web-container.svelte-1s94ijb.svelte-1s94ijb{max-width:70rem;margin:0 auto}.about-image.svelte-1s94ijb img.svelte-1s94ijb{border-radius:20px}.heading6.svelte-1s94ijb.svelte-1s94ijb{text-align:center;font-weight:500;letter-spacing:2px;font-size:16px}.heading3.svelte-1s94ijb.svelte-1s94ijb{text-align:center;font-weight:600;letter-spacing:1px;font-size:30px}.services.svelte-1s94ijb h3.svelte-1s94ijb,.services.svelte-1s94ijb h4.svelte-1s94ijb{color:var(--color-banner-text-1)}.service-desc.svelte-1s94ijb.svelte-1s94ijb{border:1px solid var(--color-bg-3);margin:1rem auto;padding:1rem;border-radius:20px}.service-header.svelte-1s94ijb.svelte-1s94ijb{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:center;overflow-x:hidden;width:100%;padding-left:2rem}.service-header.svelte-1s94ijb h4.svelte-1s94ijb{font-size:25px;font-weight:500;letter-spacing:1px}.inputs.svelte-1s94ijb.svelte-1s94ijb{display:flex;justify-content:space-between;margin-bottom:1rem;width:100%}input.svelte-1s94ijb.svelte-1s94ijb{width:100%;background-color:transparent;border:none;border-bottom:1px solid var(--color-banner-text-1);padding-bottom:0.5rem;color:#fff}input.svelte-1s94ijb.svelte-1s94ijb::placeholder{font-size:0.8rem}textarea.svelte-1s94ijb.svelte-1s94ijb{width:100%;background-color:transparent;border:none;border-bottom:1px solid var(--color-banner-text-1);margin-top:2rem;color:#fff}textarea.svelte-1s94ijb.svelte-1s94ijb::placeholder{font-size:0.8rem}.form-group.svelte-1s94ijb button.svelte-1s94ijb{margin-top:1rem;padding:0.3rem 0.8rem;background-color:var(--color-banner-text-2);border:none;color:#fff;font-size:1rem;border-radius:0.3rem;cursor:pointer}.details.svelte-1s94ijb.svelte-1s94ijb{display:flex;flex-direction:column;align-items:start;margin-top:2rem}.data.svelte-1s94ijb.svelte-1s94ijb{display:flex;margin:0 1rem}.data.svelte-1s94ijb img.svelte-1s94ijb{width:1.2rem;height:1.2rem;margin-right:1rem}.data.svelte-1s94ijb p.svelte-1s94ijb{font-size:0.6rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1v068g9_START -->${$$result.title = `<title>S&amp;M Scholarly Solutions-Home Page</title>`, ""}<meta name="description" content="Svelte demo app"><script src="https://www.google.com/recaptcha/api.js" async defer data-svelte-h="svelte-189w41j"><\/script><!-- HEAD_svelte-1v068g9_END -->`, ""} <div style="display: contents; --height:5rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> <section class="web-container svelte-1s94ijb" id="Home">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 7, lg: 7 }, {}, {
        default: () => {
          return `<div class="banner-text svelte-1s94ijb"><h3 class="svelte-1s94ijb" data-svelte-h="svelte-1gerq3b">We provide the best <span class="svelte-1s94ijb">Solutions</span> to boost your
					<span class="svelte-1s94ijb">Business</span></h3> <p data-svelte-h="svelte-7x5yda">Because we know, our expertise in technology can help your
					Business to realise it&#39;s true potential. We specialize in
					native app development on Android and IOS platforms,
					customized web applications and server management.</p> <div style="display: contents; --height:2rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> <a href="/all/about" data-svelte-h="svelte-1dypct0"><button class="svelte-1s94ijb">Discover More</button></a></div>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 5 }, {}, {
        default: () => {
          return `<div class="banner-image svelte-1s94ijb" data-svelte-h="svelte-eg6a7o"><img${add_attribute("src", banner, 0)} alt="S&M Scholarly Solutions" class="svelte-1s94ijb"></div>`;
        }
      })}`;
    }
  })}</section> <div style="display: contents; --height:5rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> <div class="discover svelte-1s94ijb"><section id="About" class="svelte-1s94ijb"><div class="web-container svelte-1s94ijb">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 7, lg: 7 }, {}, {
        default: () => {
          return `<div class="banner-text svelte-1s94ijb" data-svelte-h="svelte-pol0mf"><h6 class="heading6 svelte-1s94ijb">DISCOVER OUR COMPANY</h6> <h3 class="heading3 svelte-1s94ijb">Bringing New IT Business Solution</h3> <h4>Cutting-Edge Innovation</h4> <p>Pioneering the future, we embrace the latest in
							technology, from advanced cloud solutions to artificial
							intelligence, ensuring your business stays at the
							forefront of innovation.</p> <h4>Client-Centric Approach</h4> <p>Your success is our priority. We work closely with you,
							understanding your unique challenges to deliver tailored
							IT solutions that align with your business goals and
							drive sustained growth.</p></div>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 5 }, {}, {
        default: () => {
          return `<div class="about-image svelte-1s94ijb" data-svelte-h="svelte-otlb1p"><img${add_attribute("src", aboutImage, 0)} alt="S&M Scholarly Solutions" class="svelte-1s94ijb"></div>`;
        }
      })}`;
    }
  })}</div></section></div> <div style="display: contents; --height:3rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> <div class="services svelte-1s94ijb"><section id="Services" class="svelte-1s94ijb"><div class="web-container svelte-1s94ijb">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 12, lg: 12 }, {}, {
        default: () => {
          return `<h6 class="heading6 svelte-1s94ijb" data-svelte-h="svelte-ixazb1">SERVICES</h6> <h3 class="heading3 svelte-1s94ijb" data-svelte-h="svelte-1okjn9z">Services We Provide</h3>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
        default: () => {
          return `<div class="service-text" data-svelte-h="svelte-1umzg48"><div class="service-desc svelte-1s94ijb"><div class="service-header svelte-1s94ijb"><img${add_attribute("src", icon1, 0)} alt="service"> <h4 class="svelte-1s94ijb">Web Development</h4></div> <p>We offer Web development and cloud management, optimizing performance, affordability, and data security with tailored server, storage, and backup solutions.</p></div> <div class="service-desc svelte-1s94ijb"><div class="service-header svelte-1s94ijb"><img${add_attribute("src", icon4, 0)} alt="service"> <h4 class="svelte-1s94ijb">Web Hosting</h4></div> <p>We offer cloud management services, optimizing server, storage, and database configurations for performance, affordability, and data security, with expert guidance and data analytics support.</p></div></div>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
        default: () => {
          return `<div class="service-text" data-svelte-h="svelte-oa9xwq"><div class="service-desc svelte-1s94ijb"><div class="service-header svelte-1s94ijb"><img${add_attribute("src", icon2, 0)} alt="service"> <h4 class="svelte-1s94ijb">Mobile App Development</h4></div> <p>We specialize in mobile app development, delivering high-performance, data security, data storage, user-friendly applications tailored to your needs.</p></div> <div class="service-desc svelte-1s94ijb"><div class="service-header svelte-1s94ijb"><img${add_attribute("src", icon3, 0)} alt="service"> <h4 class="svelte-1s94ijb">Support &amp; Maintenance</h4></div> <p>We provide cloud management services, ensuring optimal server, storage, and database configurations for secure, efficient, and cost-effective application performance.</p></div></div>`;
        }
      })}`;
    }
  })}</div></section></div> <div style="display: contents; --height:3rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> <div class="discover svelte-1s94ijb"><section id="techStack" class="svelte-1s94ijb"><div class="web-container svelte-1s94ijb">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 7, lg: 7 }, {}, {
        default: () => {
          return `<div class="banner-text svelte-1s94ijb" data-svelte-h="svelte-1ix30qp"><h6 class="heading6 svelte-1s94ijb">OUR EXPERTISE</h6> <h3 class="heading3 svelte-1s94ijb">Technologies We Use</h3> <p>We use latest and efficient software development technologies like VueJs, NuxtJs the Internet of Things to provide our clients with powerful tech solutions that help them stay on top of the competition.All of our selected experts are prone to self-perfection and eager to learn and grow both personally and professionally_ and they are welcome aboard and strongly supported.We endeavor to keep all of our team members highly motivated and create favorable conditions where our specialists can upgrade themselves and achieve their professional aims successfully.</p></div>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 5 }, {}, {
        default: () => {
          return `<div class="about-image svelte-1s94ijb" data-svelte-h="svelte-c96b1a"><img${add_attribute("src", techImage, 0)} alt="S&M Scholarly Solutions" width="90%" class="svelte-1s94ijb"></div>`;
        }
      })}`;
    }
  })}</div></section></div> <div style="display: contents; --height:3rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> <div class="work"><section id="Projects" class="svelte-1s94ijb"><div class="web-container svelte-1s94ijb">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 12, lg: 12 }, {}, {
        default: () => {
          return `<h6 class="heading6 svelte-1s94ijb" data-svelte-h="svelte-1fhcn8o">OUR WORK</h6> <h3 class="heading3 svelte-1s94ijb" data-svelte-h="svelte-1qywnkp">Recent Projects We Worked</h3>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
        default: () => {
          return `<div class="service-text" data-svelte-h="svelte-1adw5jy"><div class="service-desc svelte-1s94ijb"><div class="service-header svelte-1s94ijb"><img${add_attribute("src", projectImage5, 0)} alt="service" width="80"> <h4 class="svelte-1s94ijb">Nehwe</h4></div> <p>An E-learning platform gamified for engagement, where users progress through courses, earn coins, and challenge friends for rewards, available on Android and iOS through cross-platform development.</p></div></div>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
        default: () => {
          return `<div class="service-text" data-svelte-h="svelte-gs50xl"><div class="service-desc svelte-1s94ijb"><div class="service-header svelte-1s94ijb"><img${add_attribute("src", projectImage4, 0)} alt="service" width="80"> <h4 class="svelte-1s94ijb">Jagbandhu</h4></div> <p>A Family Tree Application for building personal relations, creating invite lists, and customized event invitations, available on Android and iOS with the latest technology stack to serve a large user base efficiently.</p></div></div>`;
        }
      })} `;
    }
  })}</div></section></div> <div style="display: contents; --height:3rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> <div class="discover svelte-1s94ijb"><section id="Clients" class="svelte-1s94ijb"><div class="web-container svelte-1s94ijb">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 7, lg: 7 }, {}, {
        default: () => {
          return `<h6 class="heading6 svelte-1s94ijb" data-svelte-h="svelte-1rqyi3s">CLIENTELE</h6> <h3 class="heading3 svelte-1s94ijb" data-svelte-h="svelte-18nbgeq">Our Happy Clients</h3>`;
        }
      })}`;
    }
  })} <div style="display: contents; --height:1rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> ${validate_component(Clients, "TechStack").$$render($$result, {}, {}, {})}</div></section></div> <div style="display: contents; --height:3rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> <div class="contact"><section id="Contact" class="svelte-1s94ijb"><div class="web-container svelte-1s94ijb">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 5, lg: 5 }, {}, {
        default: () => {
          return `<img${add_attribute("src", contactImage, 0)} alt="S&M Scholarly Solutions" width="80%"> <div class="details svelte-1s94ijb" data-svelte-h="svelte-1bhsz55"><div class="data svelte-1s94ijb"><img${add_attribute("src", locationIcon, 0)} alt="location" class="svelte-1s94ijb"> <p class="svelte-1s94ijb">Journalist colony, Pnjagutta, Hyderabad, Telangana 500082</p></div> <div class="data svelte-1s94ijb"><img${add_attribute("src", phoneIcon, 0)} alt="location" class="svelte-1s94ijb"> <p class="svelte-1s94ijb">+91-9961800932</p></div> <div class="data svelte-1s94ijb"><img${add_attribute("src", mailIcon, 0)} alt="location" class="svelte-1s94ijb"> <p class="svelte-1s94ijb">contact@goscholarly.com</p></div></div>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
        default: () => {
          return `<div class="banner-text svelte-1s94ijb" data-svelte-h="svelte-sycbi5"><h6>Let&#39;s Discuss Your Project</h6> <h3 class="svelte-1s94ijb"><span class="svelte-1s94ijb">Get a Quote!</span></h3> <form><div class="inputs svelte-1s94ijb"><div class="form-group"><input type="text" placeholder="Name" required class="svelte-1s94ijb"></div> <div class="form-group"><input type="email" placeholder="Email" required class="svelte-1s94ijb"></div></div> <div class="form-group"><textarea placeholder="Message" rows="4" required class="svelte-1s94ijb"></textarea></div> <div class="inputs svelte-1s94ijb"><div class="g-recaptcha" data-sitekey="6Lcmmq4pAAAAAA-cPQPg-fn0XUtfGGmJmZlbHx-7"></div> <div class="form-group svelte-1s94ijb"><button type="submit" class="svelte-1s94ijb">Get Free Consultation</button></div></div></form></div>`;
        }
      })}`;
    }
  })}</div></section> </div>`;
});
export {
  Page as default
};
