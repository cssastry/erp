import{s as j,f as k,n as L}from"../chunks/scheduler.4ea3d083.js";import{S as J,i as N,g as m,s as x,r as I,E as Q,h as v,f as n,c as b,j as _,u as E,k as c,l as H,x as w,a as u,v as C,d as M,t as V,w as A,z as P}from"../chunks/index.647afbbe.js";import{V as U}from"../chunks/VerticalSpacer.930d603e.js";import{G as D}from"../chunks/Grid.84575ac7.js";import{c as z,l as F}from"../chunks/location.a782c661.js";import{m as O}from"../chunks/mail.ad6e57be.js";import{p as X}from"../chunks/phone.3cb193be.js";function Y(g){let e,o,t,r,s=`<div class="data svelte-ofrgyw"><img src="${F}" alt="location" class="svelte-ofrgyw"/> <p class="svelte-ofrgyw">Journalist colony, Pnjagutta, Hyderabad, Telangana 500082</p></div> <div class="data svelte-ofrgyw"><img src="${X}" alt="location" class="svelte-ofrgyw"/> <p class="svelte-ofrgyw">+91-9961800932</p></div> <div class="data svelte-ofrgyw"><img src="${O}" alt="location" class="svelte-ofrgyw"/> <p class="svelte-ofrgyw">contact@goscholarly.com</p></div>`;return{c(){e=m("img"),t=x(),r=m("div"),r.innerHTML=s,this.h()},l(a){e=v(a,"IMG",{src:!0,alt:!0,width:!0}),t=b(a),r=v(a,"DIV",{class:!0,"data-svelte-h":!0}),P(r)!=="svelte-1yo1yek"&&(r.innerHTML=s),this.h()},h(){k(e.src,o=z)||c(e,"src",o),c(e,"alt","S&M Scholarly Solutions"),c(e,"width","80%"),c(r,"class","details svelte-ofrgyw")},m(a,i){u(a,e,i),u(a,t,i),u(a,r,i)},p:L,d(a){a&&(n(e),n(t),n(r))}}}function Z(g){let e,o='<h6>Let&#39;s Discuss Your Project</h6> <h3 class="svelte-ofrgyw"><span class="svelte-ofrgyw">Get a Quote!</span></h3> <form><div class="inputs svelte-ofrgyw"><div class="form-group"><input type="text" placeholder="Name" required="" class="svelte-ofrgyw"/></div> <div class="form-group"><input type="email" placeholder="Email" required="" class="svelte-ofrgyw"/></div></div> <div class="form-group"><textarea placeholder="Message" rows="4" required="" class="svelte-ofrgyw"></textarea></div> <div class="inputs svelte-ofrgyw"><div class="g-recaptcha" data-sitekey="6Lcmmq4pAAAAAA-cPQPg-fn0XUtfGGmJmZlbHx-7"></div> <div class="form-group svelte-ofrgyw"><button type="submit" class="svelte-ofrgyw">Get Free Consultation</button></div></div></form>';return{c(){e=m("div"),e.innerHTML=o,this.h()},l(t){e=v(t,"DIV",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-k4js0m"&&(e.innerHTML=o),this.h()},h(){c(e,"class","banner-text discover svelte-ofrgyw")},m(t,r){u(t,e,r)},p:L,d(t){t&&n(e)}}}function B(g){let e,o,t,r;return e=new D({props:{xs:12,md:5,lg:5,$$slots:{default:[Y]},$$scope:{ctx:g}}}),t=new D({props:{xs:12,md:6,lg:6,$$slots:{default:[Z]},$$scope:{ctx:g}}}),{c(){I(e.$$.fragment),o=x(),I(t.$$.fragment)},l(s){E(e.$$.fragment,s),o=b(s),E(t.$$.fragment,s)},m(s,a){C(e,s,a),u(s,o,a),C(t,s,a),r=!0},p(s,a){const i={};a&1&&(i.$$scope={dirty:a,ctx:s}),e.$set(i);const d={};a&1&&(d.$$scope={dirty:a,ctx:s}),t.$set(d)},i(s){r||(M(e.$$.fragment,s),M(t.$$.fragment,s),r=!0)},o(s){V(e.$$.fragment,s),V(t.$$.fragment,s),r=!1},d(s){s&&n(o),A(e,s),A(t,s)}}}function K(g){let e,o,t,r,s,a,i,d,$,p,h;return t=new U({}),p=new D({props:{container:!0,gutter:15,$$slots:{default:[B]},$$scope:{ctx:g}}}),{c(){e=m("meta"),o=x(),r=m("div"),I(t.$$.fragment),s=x(),a=m("div"),i=m("div"),d=m("section"),$=m("div"),I(p.$$.fragment),this.h()},l(l){const f=Q("svelte-1ld77bb",document.head);e=v(f,"META",{name:!0,content:!0}),f.forEach(n),o=b(l),r=v(l,"DIV",{style:!0});var y=_(r);E(t.$$.fragment,y),s=b(l),a=v(l,"DIV",{class:!0});var G=_(a);i=v(G,"DIV",{class:!0});var S=_(i);d=v(S,"SECTION",{id:!0});var T=_(d);$=v(T,"DIV",{class:!0});var q=_($);E(p.$$.fragment,q),q.forEach(n),T.forEach(n),S.forEach(n),G.forEach(n),this.h()},h(){document.title="Contact Us",c(e,"name","description"),c(e,"content","Contact us"),H(r,"display","contents"),H(r,"--height","3rem"),c($,"class","web-container svelte-ofrgyw"),c(d,"id","Contact"),c(i,"class","contact"),c(a,"class","web-container svelte-ofrgyw")},m(l,f){w(document.head,e),u(l,o,f),u(l,r,f),C(t,r,null),u(l,s,f),u(l,a,f),w(a,i),w(i,d),w(d,$),C(p,$,null),h=!0},p(l,[f]){const y={};f&1&&(y.$$scope={dirty:f,ctx:l}),p.$set(y)},i(l){h||(M(t.$$.fragment,l),M(p.$$.fragment,l),h=!0)},o(l){V(t.$$.fragment,l),V(p.$$.fragment,l),h=!1},d(l){l&&(n(o),n(s),n(a)),n(e),l&&t&&n(r),A(t,l),A(p)}}}class le extends J{constructor(e){super(),N(this,e,null,K,j,{})}}export{le as component};
