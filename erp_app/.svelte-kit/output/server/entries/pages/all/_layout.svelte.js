import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { l as logo } from "../../../chunks/logoS_M.js";
import { m as menuIcon } from "../../../chunks/menu.js";
/* empty css                      */import { G as Grid } from "../../../chunks/Grid.js";
import { m as mailIcon } from "../../../chunks/mail.js";
const loginIcon = "/_app/immutable/assets/login.12981877.svg";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'header.svelte-1rsvsa1.svelte-1rsvsa1{display:flex;justify-content:space-between}.corner.svelte-1rsvsa1.svelte-1rsvsa1{width:5em;height:5em}.corner.svelte-1rsvsa1 button.svelte-1rsvsa1{display:flex;align-items:center;justify-content:center;background-color:transparent;border:none;height:100%;cursor:pointer}.corner.svelte-1rsvsa1 img.svelte-1rsvsa1{width:2em;height:3em;object-fit:contain}.brand.svelte-1rsvsa1 img.svelte-1rsvsa1{width:8em;height:8em;margin-left:40%}nav.svelte-1rsvsa1.svelte-1rsvsa1{display:flex;justify-content:center;--background:#ccc2}svg.svelte-1rsvsa1.svelte-1rsvsa1{width:2em;height:3em;display:block}path.svelte-1rsvsa1.svelte-1rsvsa1{fill:var(--background)}ul.svelte-1rsvsa1.svelte-1rsvsa1{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1rsvsa1.svelte-1rsvsa1{position:relative;height:100%}li[aria-current="page"].svelte-1rsvsa1.svelte-1rsvsa1::before{--size:6px;content:"";width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}nav.svelte-1rsvsa1 a.svelte-1rsvsa1{display:flex;height:100%;align-items:center;padding:0 1.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-1rsvsa1.svelte-1rsvsa1:hover{color:var(--color-theme-1)}.pin-bar.svelte-1rsvsa1.svelte-1rsvsa1{width:100%;display:block;background-color:#0e1e33;padding:5px 0 5px 40px}.pin-bar.svelte-1rsvsa1>.options p.svelte-1rsvsa1{display:inline;color:#eee;padding:5px;font-size:13px}.menuBar.svelte-1rsvsa1.svelte-1rsvsa1{display:none}@media(max-width: 400px){nav.svelte-1rsvsa1.svelte-1rsvsa1,.login.svelte-1rsvsa1.svelte-1rsvsa1{display:none}.menuBar.svelte-1rsvsa1.svelte-1rsvsa1{display:block}}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<div class="pin-bar svelte-1rsvsa1" data-svelte-h="svelte-1webol2"><div class="options"><p class="svelte-1rsvsa1"><span>Call us :</span> +91-9961800932</p> <p class="svelte-1rsvsa1">|</p> <p class="svelte-1rsvsa1"><span>Write to us :</span> contact@goscholarly.com</p></div></div> <header class="svelte-1rsvsa1"><div class="corner brand svelte-1rsvsa1" data-svelte-h="svelte-1jhsjpb"><a href="https://www.smscholarly.com" class="svelte-1rsvsa1"><img${add_attribute("src", logo, 0)} alt="S&M Scholarly Solutions" class="svelte-1rsvsa1"></a></div> <nav class="svelte-1rsvsa1"><svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1rsvsa1"><path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" class="svelte-1rsvsa1"></path></svg> <ul class="svelte-1rsvsa1"><li${add_attribute("aria-current", $page.url.pathname === "/all/" ? "page" : void 0, 0)} class="svelte-1rsvsa1"><a href="/all/" class="svelte-1rsvsa1" data-svelte-h="svelte-1m62chg">Home</a></li> <li${add_attribute("aria-current", $page.url.pathname === "/all/about" ? "page" : void 0, 0)} class="svelte-1rsvsa1"><a href="/all/about" class="svelte-1rsvsa1" data-svelte-h="svelte-18d224p">About</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname === "/all/services" ? "page" : void 0,
    0
  )} class="svelte-1rsvsa1"><a href="/all/services" class="svelte-1rsvsa1" data-svelte-h="svelte-tvz087">Services</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname === "/all/projects" ? "page" : void 0,
    0
  )} class="svelte-1rsvsa1"><a href="/all/projects" class="svelte-1rsvsa1" data-svelte-h="svelte-1yh66zr">Projects</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname === "/all/contact" ? "page" : void 0,
    0
  )} class="svelte-1rsvsa1"><a href="/all/contact" class="svelte-1rsvsa1" data-svelte-h="svelte-1hjxe0f">Contact</a></li></ul> <svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1rsvsa1"><path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" class="svelte-1rsvsa1"></path></svg></nav> <div class="actions" style="display: flex;" data-svelte-h="svelte-f8kvv8"><div class="corner login svelte-1rsvsa1"><button class="svelte-1rsvsa1"><a href="/login" class="svelte-1rsvsa1"><img${add_attribute("src", loginIcon, 0)} alt="Employee Portal" title="Employe Login" class="svelte-1rsvsa1"></a></button></div> <div class="corner menuBar svelte-1rsvsa1"><button class="svelte-1rsvsa1"> <img${add_attribute("src", menuIcon, 0)} alt="Employee Portal" title="Employe Login" class="svelte-1rsvsa1"> </button></div></div> </header>`;
});
const linkedInIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASsSURBVHgB7Z1NchtFFMffa2EHstIRxAkincDyzhiqiE+As6AKVFRZN7B8A2eBQxULixMQFphUsYh0AosTIG6gDTgVVebR3SMn+oyleTPRy/j/W9iS5kPy/Nwf8/p1i2kKabar9PB1m5j3/LM6CVUJ5A/TyP8YECVd/v3ZL7ObJsjht3WinV/9wxqBD8mQxuMj/vPnQXgShUxkXBPYHuNxI0hhOfiuRs69JJSMbTOk/3YbzstoEmRYoObb7xPnG/ATAjYQbjoS35sCNmCpOwKWqEKIMSDEGBBiDAgxBoQYA0KMASHGgBBjfELFMPJjKT7mL0MfmgljKogGrEmeQrwE7vpBl+f8x7P+/Eb54vs9YnfsHx0TWAnLYUtIi/jRL3lzxC9+Gt65awj3sw/3MyLMy9C3IeLj+Dc7++vICMT9JNmPx4EFchCS7HPvfLTJIRMpTwgsoBXSXbdkzOOP6/mqrkdgBp0QkS5pqMhzAjPohNw8+Is0JNQnMINKyKZtxwJJoju+hKiExMQ61bs7JOLNoauyPn2luwN3rkZgBp0Q5/ZIQyJfE5hB2+1tZ6224h07wigLaIVU6bPXl7QhUWKaLQnm0N+pMz328bDLdUtKLBkPx0hdXUE+wcUUH2qXDv374Ldl3eF3Ux3oBNMcVpOnkKmzhpCIHwu5Rbge55uAOylmgEqkOfcCgfXAEK4xIMQYEGKMopIcPhZCb7A3+T18+6pw1Xd3apR2zT9oZ0QrJPwh55SFkI0i0n7vPsLn/sJkiwgztVd0r0c+7B/O21uWjLHwEWJEwTX9/t/4z9ykgtF2e4d8dfE5ZWAyt/Hv9+/FNb768R/Kcv7DVjh3beqlVMSr3adZhw3Sz1w5LTLkcz+qrJBQEcb+Mw433zI5/okctPq+BJ4WkTlT/kY9pCjd7Da0MqbhFxfdojJnyi3kNkVJO7K5hKLSmcorRHiYJUVpE6IUHh9RjpS4hCSdPKupVfBVXBKjQzlRWiHrdGlze6+ri7O8qi7cqeeF0BnlAITkROx5xWWXdEBInkjGqMUU9yqWJV/90PSN/SN/4dL4VMIjcsmA3kg/lw5AkvR99IE03AshMeRRqVz6C9ac2cASuse+nuAQajnzjXOHFIQEcvmyNdIMUZe+yoqLs1Xc9eIo5gKnXkqH1G8Yo8eZKbWQdLbWzssN/mNP/TFN0sD+hlRBuUtIyP3atPrgEM1VIKKaEVBaIb4Bf0xZcr9YmqpS4pyq61veEqLJG2b3iLKSJENSUF4hrBh61RyrnPNS4mivZM+OlO0tdIA79WXw9lJdIcQYEGIMCDEGhBgDQowBIcaAEGNAiDEgxBgQYgwIMQaEGANCjAEhxoAQY0CIMSDEGBBiDAgxBoQYA0KMASHGgBBjQIgx1BN20llJGUiS2t07Ver+/JnWUiFJqpqF7Ir9u1ZTzJqLIDOosowBIcaAEGNAiDEgxBgQYgwIMQaEGMPlsYINyA9HCQ8I2EBo4MKCwgRsIHLuaHf3Kb4o2ADRgfQ5Pg4r5tDONYEtMm6EBTVjLytdWXPcQEnZAvGapzLCU17YftA6niw8H1YzwHdFFcPItxeD+G3Zc2vR/w/7HIxQ1ke+SAAAAABJRU5ErkJggg==";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-1uscfbo.svelte-1uscfbo{display:flex;flex-direction:column;min-height:100vh}main.svelte-1uscfbo.svelte-1uscfbo{flex:1;display:flex;flex-direction:column;width:100%;margin:0 auto;box-sizing:border-box}.footer.svelte-1uscfbo.svelte-1uscfbo{background-color:var(--color-bg-3);padding:2rem 15%;margin-top:2rem}h3.svelte-1uscfbo.svelte-1uscfbo{color:#fff}.links.svelte-1uscfbo.svelte-1uscfbo{display:flex;margin-left:5rem;width:100%}ol.svelte-1uscfbo.svelte-1uscfbo{list-style-type:none;margin-block-start:0;margin-block-end:0;padding-inline-start:0}li.svelte-1uscfbo.svelte-1uscfbo{margin:1rem 0;font-size:0.8rem}.social.svelte-1uscfbo.svelte-1uscfbo{display:flex;justify-content:flex-start;align-items:center}.social.svelte-1uscfbo img.svelte-1uscfbo{width:10%;height:10%;margin-right:1rem}@media(min-width: 480px){}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-1uscfbo">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-1uscfbo">${slots.default ? slots.default({}) : ``}</main> <footer><div class="footer svelte-1uscfbo">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 3, lg: 3 }, {}, {
        default: () => {
          return `<img${add_attribute("src", logo, 0)} alt="S&M logo" width="80%"> <p data-svelte-h="svelte-o5izb2">Plot no 30, 2nd floor, BN Rao Homes, North H Block, Journalist Colony, VST Colony, Punjagutta, Hyderabad, Telangana 500082</p>`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 8, lg: 8 }, {}, {
        default: () => {
          return `<div class="links svelte-1uscfbo">${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
            default: () => {
              return `<h3 class="svelte-1uscfbo" data-svelte-h="svelte-1cjo294">Quick Links</h3> <ol class="svelte-1uscfbo" data-svelte-h="svelte-15bj3l0"><li class="svelte-1uscfbo">HOME</li> <li class="svelte-1uscfbo">ABOUT</li> <li class="svelte-1uscfbo">SERVICES</li> <li class="svelte-1uscfbo">PROJECTS</li> <li class="svelte-1uscfbo">CONTACT</li></ol>`;
            }
          })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
            default: () => {
              return `<h3 class="svelte-1uscfbo" data-svelte-h="svelte-q7lr5q">Our Services</h3> <ol class="svelte-1uscfbo" data-svelte-h="svelte-1bjszkz"><li class="svelte-1uscfbo">WEB DEVELOPMENT</li> <li class="svelte-1uscfbo">MOBILE APP DEVELOPMENT</li> <li class="svelte-1uscfbo">WEB HOSTING</li> <li class="svelte-1uscfbo">SUPPORT &amp; MAINTANANCE</li> <li class="svelte-1uscfbo">IoT SOLUTIONS</li></ol>`;
            }
          })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 4, lg: 4 }, {}, {
            default: () => {
              return `<h3 class="svelte-1uscfbo" data-svelte-h="svelte-477i3a">Social Links</h3> <div class="social svelte-1uscfbo" data-svelte-h="svelte-171qq8b"><img${add_attribute("src", mailIcon, 0)} alt="icon" class="svelte-1uscfbo"> <p>contact@goscholarly.com</p></div> <div class="social svelte-1uscfbo" data-svelte-h="svelte-ngzmfz"><img${add_attribute("src", linkedInIcon, 0)} alt="icon" class="svelte-1uscfbo"> <p>S&amp;M Scholarly Solutions</p></div>`;
            }
          })}</div>`;
        }
      })}`;
    }
  })}</div></footer> </div>`;
});
export {
  Layout as default
};
