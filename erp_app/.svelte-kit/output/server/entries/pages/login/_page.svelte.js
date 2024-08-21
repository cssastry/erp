import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { l as logo } from "../../../chunks/logoS_M.js";
import { G as Grid } from "../../../chunks/Grid.js";
const loginImage = "/_app/immutable/assets/login.f40c5b0d.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".web-container.svelte-1i4uauh.svelte-1i4uauh{max-width:70rem;margin:0 auto}.banner-text.svelte-1i4uauh h3.svelte-1i4uauh{font-size:40px;color:var(--color-banner-text-1);text-align:center}.banner-text.svelte-1i4uauh h4.svelte-1i4uauh{font-size:30px;color:var(--color-banner-text-1);text-align:center;margin:0}.banner-text.svelte-1i4uauh p.svelte-1i4uauh{font-size:10px;color:var(--color-bg-1);text-align:center;margin-bottom:1.5rem}.content.svelte-1i4uauh.svelte-1i4uauh{width:100%;display:flex;align-items:center}.content.svelte-1i4uauh img.svelte-1i4uauh{width:90%;margin-top:3.2rem}.credentials.svelte-1i4uauh.svelte-1i4uauh{background-color:var(--color-bg-3);padding:2rem 0.8rem;border-radius:0.5rem;margin-top:3rem}.tabs.svelte-1i4uauh.svelte-1i4uauh{margin-bottom:1.5rem}.tabs.svelte-1i4uauh button.svelte-1i4uauh{margin:0;padding:0.5rem;cursor:pointer;font-size:15px;transition:background-color 0.3s ease;border-radius:0.3rem;border:none;width:100%;background-color:transparent;color:var(--color-bg-2)}.tabs.svelte-1i4uauh button.selected.svelte-1i4uauh{background-color:var(--color-bg-4)}form.svelte-1i4uauh.svelte-1i4uauh{text-align:center}.forgot.svelte-1i4uauh.svelte-1i4uauh{width:100%;text-align:end;margin-top:0.5rem}.forgot.svelte-1i4uauh a.svelte-1i4uauh{font-size:0.7rem;color:#aaa}form.svelte-1i4uauh input.svelte-1i4uauh{width:95%;margin:0.2rem 0;padding:0.8rem 0.5rem;background-color:transparent;border:1px solid var(--color-bg-2);border-radius:0.5rem;color:var(--color-bg-2)}form.svelte-1i4uauh button.svelte-1i4uauh{margin-top:1.5rem;width:95%;padding:0.6rem;border-radius:0.5rem;background-color:var(--color-banner-text-2);border:none;color:var(--color-bg-2);font-weight:600}.input-field.svelte-1i4uauh.svelte-1i4uauh::placeholder{color:#aaa;font-weight:300;font-size:0.8rem}.input-field.svelte-1i4uauh.svelte-1i4uauh:focus{outline:none;border-color:var(--color-bg-2)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loginData = { email: "", password: "" };
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1uesasn_START -->${$$result.title = `<title>Login</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-1uesasn_END -->`, ""} <div class="login"><div class="web-container svelte-1i4uauh"><div class="banner-text svelte-1i4uauh">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 3, md: 3, lg: 3 }, {}, {
        default: () => {
          return `<img${add_attribute("src", logo, 0)} alt="logo" class="loginImg">`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 9, md: 9, lg: 9 }, {}, {
        default: () => {
          return `<h3 class="svelte-1i4uauh" data-svelte-h="svelte-yu8i5y">Employ Portal</h3>`;
        }
      })}`;
    }
  })}</div> <div class="content svelte-1i4uauh">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 15 }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 5, lg: 5 }, {}, {
        default: () => {
          return `<img${add_attribute("src", loginImage, 0)} alt="login illustration" class="svelte-1i4uauh">`;
        }
      })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 5, lg: 5 }, {}, {
        default: () => {
          return `<div class="credentials svelte-1i4uauh"><div class="banner-text svelte-1i4uauh"><h4 class="svelte-1i4uauh">${escape("Welcome Back !")}</h4> <p class="svelte-1i4uauh">${escape(
            "please enter your details to login"
          )}</p> <div class="tabs svelte-1i4uauh">${validate_component(Grid, "Grid").$$render($$result, { container: true, gutter: 10 }, {}, {
            default: () => {
              return `${validate_component(Grid, "Grid").$$render($$result, { xs: 6, md: 6, lg: 6 }, {}, {
                default: () => {
                  return `<button class="${["svelte-1i4uauh", "selected"].join(" ").trim()}" data-svelte-h="svelte-k7e75v">Login</button>`;
                }
              })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 6, md: 6, lg: 6 }, {}, {
                default: () => {
                  return `<button class="${["svelte-1i4uauh", ""].join(" ").trim()}" data-svelte-h="svelte-1jqong7">Register</button>`;
                }
              })}`;
            }
          })}</div> ${`<form class="svelte-1i4uauh"><div class="form-group"><input type="email" placeholder="Email" class="input-field svelte-1i4uauh"${add_attribute("value", loginData.email, 0)}></div> <div class="form-group" style="margin-top: 0.5rem;"><input type="text" placeholder="Password" class="input-field svelte-1i4uauh"${add_attribute("value", loginData.password, 0)}></div> <div class="forgot svelte-1i4uauh" data-svelte-h="svelte-1dmica4"><a href="https://www.smscholarly.com" class="svelte-1i4uauh">forgot password?</a></div>  <button type="submit" class="svelte-1i4uauh" data-svelte-h="svelte-1ou7dtz">Submit</button> </form>`} ${``}</div></div>`;
        }
      })}`;
    }
  })}</div></div> </div>`;
});
export {
  Page as default
};
