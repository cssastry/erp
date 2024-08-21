import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../../chunks/ssr.js";
import { V as VerticalSpacer } from "../../../../chunks/VerticalSpacer.js";
import { G as Grid } from "../../../../chunks/Grid.js";
import { c as contactImage, l as locationIcon } from "../../../../chunks/location.js";
import { m as mailIcon } from "../../../../chunks/mail.js";
import { p as phoneIcon } from "../../../../chunks/phone.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".banner-text.svelte-ofrgyw h3.svelte-ofrgyw{font-size:40px;color:var(--color-banner-text-1)}.banner-text.svelte-ofrgyw h3 span.svelte-ofrgyw{color:var(--color-banner-text-2)}.discover.svelte-ofrgyw.svelte-ofrgyw{background-color:var(--color-bg-3);width:100%;padding:2rem;border-radius:1rem}.web-container.svelte-ofrgyw.svelte-ofrgyw{max-width:70rem;margin:0 auto}.inputs.svelte-ofrgyw.svelte-ofrgyw{display:flex;justify-content:space-between;margin-bottom:1rem;width:100%}input.svelte-ofrgyw.svelte-ofrgyw{width:100%;background-color:transparent;border:none;border-bottom:1px solid var(--color-banner-text-1);padding-bottom:0.5rem;color:#fff}input.svelte-ofrgyw.svelte-ofrgyw::placeholder{font-size:0.8rem}textarea.svelte-ofrgyw.svelte-ofrgyw{width:100%;background-color:transparent;border:none;border-bottom:1px solid var(--color-banner-text-1);margin-top:2rem;color:#fff}textarea.svelte-ofrgyw.svelte-ofrgyw::placeholder{font-size:0.8rem}.form-group.svelte-ofrgyw button.svelte-ofrgyw{margin-top:1rem;padding:0.3rem 0.8rem;background-color:var(--color-banner-text-2);border:none;color:#fff;font-size:1rem;border-radius:0.3rem;cursor:pointer}.details.svelte-ofrgyw.svelte-ofrgyw{display:flex;flex-direction:column;align-items:start;margin-top:2rem}.data.svelte-ofrgyw.svelte-ofrgyw{display:flex;margin:0 1rem}.data.svelte-ofrgyw img.svelte-ofrgyw{width:1.2rem;height:1.2rem;margin-right:1rem}.data.svelte-ofrgyw p.svelte-ofrgyw{font-size:0.6rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ld77bb_START -->${$$result.title = `<title>Contact Us</title>`, ""}<meta name="description" content="Contact us"><!-- HEAD_svelte-1ld77bb_END -->`, ""} <div style="display: contents; --height:3rem;">${validate_component(VerticalSpacer, "VerticalSpacer").$$render($$result, {}, {}, {})}</div> <div class="web-container svelte-ofrgyw"><div class="contact"><section id="Contact"><div class="web-container svelte-ofrgyw">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 5, lg: 5 }, {}, {
        default: () => {
          return `<img${add_attribute("src", contactImage, 0)} alt="S&M Scholarly Solutions" width="80%"> <div class="details svelte-ofrgyw" data-svelte-h="svelte-1yo1yek"><div class="data svelte-ofrgyw"><img${add_attribute("src", locationIcon, 0)} alt="location" class="svelte-ofrgyw"> <p class="svelte-ofrgyw">Journalist colony, Pnjagutta, Hyderabad, Telangana 500082</p></div> <div class="data svelte-ofrgyw"><img${add_attribute("src", phoneIcon, 0)} alt="location" class="svelte-ofrgyw"> <p class="svelte-ofrgyw">+91-9961800932</p></div> <div class="data svelte-ofrgyw"><img${add_attribute("src", mailIcon, 0)} alt="location" class="svelte-ofrgyw"> <p class="svelte-ofrgyw">contact@goscholarly.com</p></div></div>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
        default: () => {
          return `<div class="banner-text discover svelte-ofrgyw" data-svelte-h="svelte-k4js0m"><h6>Let&#39;s Discuss Your Project</h6> <h3 class="svelte-ofrgyw"><span class="svelte-ofrgyw">Get a Quote!</span></h3> <form><div class="inputs svelte-ofrgyw"><div class="form-group"><input type="text" placeholder="Name" required class="svelte-ofrgyw"></div> <div class="form-group"><input type="email" placeholder="Email" required class="svelte-ofrgyw"></div></div> <div class="form-group"><textarea placeholder="Message" rows="4" required class="svelte-ofrgyw"></textarea></div> <div class="inputs svelte-ofrgyw"><div class="g-recaptcha" data-sitekey="6Lcmmq4pAAAAAA-cPQPg-fn0XUtfGGmJmZlbHx-7"></div> <div class="form-group svelte-ofrgyw"><button type="submit" class="svelte-ofrgyw">Get Free Consultation</button></div></div></form></div>`;
        }
      })}`;
    }
  })}</div></section></div> </div>`;
});
export {
  Page as default
};
