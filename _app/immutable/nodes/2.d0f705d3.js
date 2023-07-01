import{s as J,n as A,f as se,h as Z,i as le,r as $e,e as je,j as me}from"../chunks/scheduler.f757e6e6.js";import{S as T,i as z,g as S,h as C,y as X,k as m,a as P,f as _,m as O,j as V,n as F,x as j,o as K,s as L,c as N,d as w,p as U,t as q,b as Y,z as x,r as H,u as D,v as R,w as M,A as Q,B as ie,C as _e,D as be}from"../chunks/index.c45e646a.js";import{w as Se}from"../chunks/index.25baad96.js";function B(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function Ce(l){let e,r='<img id="profile-picture" src="./profile.png" alt="profile" class="svelte-14c1np2"/> <div class="information svelte-14c1np2"><span id="name" class="svelte-14c1np2">Arthur Joppart (<span id="age">24</span>)</span> <div class="svelte-14c1np2"><img src="./suitcase.svg" alt="suitcase icon" class="svelte-14c1np2"/> <span>Software Engineer</span></div> <div class="svelte-14c1np2"><img src="./email.svg" alt="email icon" class="svelte-14c1np2"/> <a type="email" href="mailto:arthur.joppart@gmail.com">arthur.joppart@gmail.com</a></div> <div class="svelte-14c1np2"><img src="./location.svg" alt="location icon" class="svelte-14c1np2"/> <span>Leuven, België</span></div></div>';return{c(){e=S("div"),e.innerHTML=r,this.h()},l(t){e=C(t,"DIV",{class:!0,["data-svelte-h"]:!0}),X(e)!=="svelte-g1yh61"&&(e.innerHTML=r),this.h()},h(){m(e,"class","profile svelte-14c1np2")},m(t,n){P(t,e,n)},p:A,i:A,o:A,d(t){t&&_(e)}}}class we extends T{constructor(e){super(),z(this,e,null,Ce,J,{})}}function ye(l){let e,r,t;return{c(){e=S("span"),r=O(l[0]),this.h()},l(n){e=C(n,"SPAN",{class:!0});var a=V(e);r=F(a,l[0]),a.forEach(_),this.h()},h(){m(e,"class",t=se(l[0].toString().toLowerCase())+" svelte-6ojdc4")},m(n,a){P(n,e,a),j(e,r)},p(n,[a]){a&1&&K(r,n[0]),a&1&&t!==(t=se(n[0].toString().toLowerCase())+" svelte-6ojdc4")&&m(e,"class",t)},i:A,o:A,d(n){n&&_(e)}}}function qe(l,e,r){let{tag:t}=e;return l.$$set=n=>{"tag"in n&&r(0,t=n.tag)},[t]}let Pe=class extends T{constructor(e){super(),z(this,e,qe,ye,J,{tag:0})}};function re(l,e,r){const t=l.slice();return t[1]=e[r],t}function oe(l){let e,r;return{c(){e=S("img"),this.h()},l(t){e=C(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Z(e.src,r=l[0].images[0])||m(e,"src",r),m(e,"alt","screenshot of the project"),m(e,"class","svelte-jo8eqt")},m(t,n){P(t,e,n)},p(t,n){n&1&&!Z(e.src,r=t[0].images[0])&&m(e,"src",r)},d(t){t&&_(e)}}}function ae(l){let e,r,t,n,a,s=l[0].link+"",u,i;return{c(){e=S("div"),r=S("img"),n=L(),a=S("a"),u=O(s),this.h()},l(c){e=C(c,"DIV",{class:!0});var o=V(e);r=C(o,"IMG",{src:!0,alt:!0,class:!0}),n=N(o),a=C(o,"A",{href:!0,target:!0,class:!0});var v=V(a);u=F(v,s),v.forEach(_),o.forEach(_),this.h()},h(){Z(r.src,t="./link.svg")||m(r,"src",t),m(r,"alt","link icon"),m(r,"class","svelte-jo8eqt"),m(a,"href",i=l[0].link),m(a,"target","_blank"),m(a,"class","svelte-jo8eqt"),m(e,"class","link-container svelte-jo8eqt")},m(c,o){P(c,e,o),j(e,r),j(e,n),j(e,a),j(a,u)},p(c,o){o&1&&s!==(s=c[0].link+"")&&K(u,s),o&1&&i!==(i=c[0].link)&&m(a,"href",i)},d(c){c&&_(e)}}}function ce(l){let e,r,t=B(l[0].tags),n=[];for(let s=0;s<t.length;s+=1)n[s]=ue(re(l,t,s));const a=s=>q(n[s],1,1,()=>{n[s]=null});return{c(){e=S("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=C(s,"DIV",{class:!0});var u=V(e);for(let i=0;i<n.length;i+=1)n[i].l(u);u.forEach(_),this.h()},h(){m(e,"class","tags svelte-jo8eqt")},m(s,u){P(s,e,u);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null);r=!0},p(s,u){if(u&1){t=B(s[0].tags);let i;for(i=0;i<t.length;i+=1){const c=re(s,t,i);n[i]?(n[i].p(c,u),w(n[i],1)):(n[i]=ue(c),n[i].c(),w(n[i],1),n[i].m(e,null))}for(U(),i=t.length;i<n.length;i+=1)a(i);Y()}},i(s){if(!r){for(let u=0;u<t.length;u+=1)w(n[u]);r=!0}},o(s){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)q(n[u]);r=!1},d(s){s&&_(e),x(n,s)}}}function ue(l){let e,r;return e=new Pe({props:{tag:l[1]}}),{c(){H(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){R(e,t,n),r=!0},p(t,n){const a={};n&1&&(a.tag=t[1]),e.$set(a)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){q(e.$$.fragment,t),r=!1},d(t){M(e,t)}}}function fe(l){let e,r=l[0].description+"",t;return{c(){e=S("p"),t=O(r),this.h()},l(n){e=C(n,"P",{class:!0});var a=V(e);t=F(a,r),a.forEach(_),this.h()},h(){m(e,"class","description svelte-jo8eqt")},m(n,a){P(n,e,a),j(e,t)},p(n,a){a&1&&r!==(r=n[0].description+"")&&K(t,r)},d(n){n&&_(e)}}}function he(l){let e,r,t;return{c(){e=S("a"),r=O("Voor meer info, bekijk op Github ->"),this.h()},l(n){e=C(n,"A",{href:!0,target:!0,rel:!0});var a=V(e);r=F(a,"Voor meer info, bekijk op Github ->"),a.forEach(_),this.h()},h(){m(e,"href",t=l[0].github),m(e,"target","_blank"),m(e,"rel","noreferrer noopener")},m(n,a){P(n,e,a),j(e,r)},p(n,a){a&1&&t!==(t=n[0].github)&&m(e,"href",t)},d(n){n&&_(e)}}}function Ve(l){let e,r,t=l[0].title+"",n,a,s,u,i,c,o,v=l[0].images.length>0&&oe(l),$=l[0].link&&ae(l),g=l[0].tags.length>0&&ce(l),h=l[0].description&&fe(l),f=l[0].github&&he(l);return{c(){e=S("div"),r=S("h2"),n=O(t),a=L(),v&&v.c(),s=L(),$&&$.c(),u=L(),g&&g.c(),i=L(),h&&h.c(),c=L(),f&&f.c(),this.h()},l(d){e=C(d,"DIV",{class:!0});var b=V(e);r=C(b,"H2",{class:!0});var I=V(r);n=F(I,t),I.forEach(_),a=N(b),v&&v.l(b),s=N(b),$&&$.l(b),u=N(b),g&&g.l(b),i=N(b),h&&h.l(b),c=N(b),f&&f.l(b),b.forEach(_),this.h()},h(){m(r,"class","svelte-jo8eqt"),m(e,"class","container svelte-jo8eqt")},m(d,b){P(d,e,b),j(e,r),j(r,n),j(e,a),v&&v.m(e,null),j(e,s),$&&$.m(e,null),j(e,u),g&&g.m(e,null),j(e,i),h&&h.m(e,null),j(e,c),f&&f.m(e,null),o=!0},p(d,[b]){(!o||b&1)&&t!==(t=d[0].title+"")&&K(n,t),d[0].images.length>0?v?v.p(d,b):(v=oe(d),v.c(),v.m(e,s)):v&&(v.d(1),v=null),d[0].link?$?$.p(d,b):($=ae(d),$.c(),$.m(e,u)):$&&($.d(1),$=null),d[0].tags.length>0?g?(g.p(d,b),b&1&&w(g,1)):(g=ce(d),g.c(),w(g,1),g.m(e,i)):g&&(U(),q(g,1,1,()=>{g=null}),Y()),d[0].description?h?h.p(d,b):(h=fe(d),h.c(),h.m(e,c)):h&&(h.d(1),h=null),d[0].github?f?f.p(d,b):(f=he(d),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},i(d){o||(w(g),o=!0)},o(d){q(g),o=!1},d(d){d&&_(e),v&&v.d(),$&&$.d(),g&&g.d(),h&&h.d(),f&&f.d()}}}function Le(l,e,r){let{project:t}=e;return l.$$set=n=>{"project"in n&&r(0,t=n.project)},[t]}class ke extends T{constructor(e){super(),z(this,e,Le,Ve,J,{project:0})}}function Ne(l){let e,r='<button class="github-button svelte-k7tbgr"><span class="svelte-k7tbgr">Github</span> <a href="https://github.com/BelgianNoise" target="_blank" rel="noopener noreferrer" class="svelte-k7tbgr"><img src="./github.png" alt="github logo" class="svelte-k7tbgr"/></a></button> <button class="linkedin-button svelte-k7tbgr"><span class="svelte-k7tbgr">LinkedIn</span> <a href="https://www.linkedin.com/in/arthur-joppart-728a7817a/" target="_blank" rel="noopener noreferrer" class="svelte-k7tbgr"><img src="./linkedin.png" alt="linkedin logo" class="svelte-k7tbgr"/></a></button>';return{c(){e=S("div"),e.innerHTML=r,this.h()},l(t){e=C(t,"DIV",{class:!0,["data-svelte-h"]:!0}),X(e)!=="svelte-p6vnd8"&&(e.innerHTML=r),this.h()},h(){m(e,"class","socials svelte-k7tbgr")},m(t,n){P(t,e,n)},p:A,i:A,o:A,d(t){t&&_(e)}}}class Ae extends T{constructor(e){super(),z(this,e,null,Ne,J,{})}}var p=(l=>(l.TS="TypeScript",l.JS="JavaScript",l.React="React",l.Redux="Redux",l.Node="Node",l.Firebase="Firebase",l.PostgreSQL="PostgreSQL",l.NestJS="NestJS",l.ChartJS="ChartJS",l.Lit="Lit",l.XState="XState",l.Vite="Vite",l.HTML="HTML",l.Svelte="Svelte",l.GO="GO",l.CSS="CSS",l.GCP="GCP",l.GithubActions="Github Actions",l.Vercel="Vercel",l.Redis="Redis",l))(p||{});const Ge={title:"YABAT",description:`YABAT is een web applicatie die het makkelijk maakt een logboek van inkomsten
    en uitgaven bij te houden. Je kan ook maandelijkse uitgaven en inkomsten vergelijken
    opgedeeld per categorie.`,tags:[p.TS,p.Firebase,p.XState,p.Lit,p.ChartJS,p.Vite,p.Node,p.HTML,p.CSS],link:"https://yabat.be",images:["./screenshots/yabat/logo.png","./screenshots/yabat/home.png","./screenshots/yabat/overview.png","./screenshots/yabat/distribution.png","./screenshots/yabat/compare.png"],github:"https://github.com/BelgianNoise/YABAT"},Ee={title:"Plex Content Request",description:`Een website waarop gebruikers films en series kunnen aanvragen die ze graag
    zouden willen zien op mijn Plex server. De website ondersteunt routing, authenticatie,
    authorisatie, en i18n.`,tags:[p.React,p.Redux,p.TS,p.Firebase,p.Node,p.HTML,p.CSS],link:"https://nasaj.be",images:["./screenshots/content-request/logo.png","./screenshots/content-request/home.png","./screenshots/content-request/overview.png","./screenshots/content-request/login.png"],github:"https://github.com/BelgianNoise/react-plex-content-request"},Be={title:"Colruyt Product Scraper",description:`Een tool geschreven in Go om alle producten van Colruyt
  op te halen via hun API om daarna een overzicht te kunnen maken van alle
  prijsveranderingen. Optimaal komt hier later nog een website bij om de prijs
  geschiedenis van een product te kunnen bekijken, en worden er wekelijks mails
  verstuurd met de interessantste prijsveranderingen.`,tags:[p.GO,p.PostgreSQL,p.GCP,p.GithubActions],link:void 0,images:["./screenshots/colruyt-product-scraper/logo.png"],github:"https://github.com/BelgianNoise/colruyt-products-scraper"},Ie={title:"Waar Streamen",description:"",tags:[p.Svelte,p.TS,p.Node,p.Vercel,p.GCP,p.GithubActions,p.HTML,p.CSS],link:"https://waar-streamen.nasaj.be",images:["./screenshots/waar-streamen/logo.png"],github:"https://github.com/BelgianNoise/waar-streamen"};function He(l){const e=l-1;return e*e*e+1}function W(l,{delay:e=0,duration:r=400,easing:t=He,x:n=0,y:a=0,opacity:s=0}={}){const u=getComputedStyle(l),i=+u.opacity,c=u.transform==="none"?"":u.transform,o=i*(1-s),[v,$]=le(n),[g,h]=le(a);return{delay:e,duration:r,easing:t,css:(f,d)=>`
			transform: ${c} translate(${(1-f)*v}${$}, ${(1-f)*g}${h});
			opacity: ${i-o*d}`}}const De={title:"Community Solid Server",description:`Deze open source Solid server heb ik onder andere voorzien
  van een Redis based read-write locker en een robust data
  storage quota systeem.`,tags:[p.TS,p.Node,p.Redis],images:["./screenshots/css/logo.png"],link:"https://github.com/CommunitySolidServer/CommunitySolidServer",github:void 0},Re={title:"Handlers.js",description:`Handlers.js is een open source framework om modulaire HTTP
  servers te bouwen. Ik ben/was dicht betrokken bij het design, 
  de ontwikkeling en het onderhoud van dit project.`,tags:[p.TS,p.Node],images:[],link:"https://github.com/digita-ai/handlersjs",github:void 0};function pe(l,e,r){const t=l.slice();return t[7]=e[r],t}function de(l,e,r){const t=l.slice();return t[7]=e[r],t}function Me(l){let e,r,t,n,a=B(l[2]),s=[];for(let i=0;i<a.length;i+=1)s[i]=ge(pe(l,a,i));const u=i=>q(s[i],1,1,()=>{s[i]=null});return{c(){e=S("div");for(let i=0;i<s.length;i+=1)s[i].c()},l(i){e=C(i,"DIV",{});var c=V(e);for(let o=0;o<s.length;o+=1)s[o].l(c);c.forEach(_)},m(i,c){P(i,e,c);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null);n=!0},p(i,c){if(c&4){a=B(i[2]);let o;for(o=0;o<a.length;o+=1){const v=pe(i,a,o);s[o]?(s[o].p(v,c),w(s[o],1)):(s[o]=ge(v),s[o].c(),w(s[o],1),s[o].m(e,null))}for(U(),o=a.length;o<s.length;o+=1)u(o);Y()}},i(i){if(!n){for(let c=0;c<a.length;c+=1)w(s[c]);i&&me(()=>{n&&(t&&t.end(1),r=_e(e,W,{x:1e3,duration:100}),r.start())}),n=!0}},o(i){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)q(s[c]);r&&r.invalidate(),i&&(t=be(e,W,{x:1e3,duration:100})),n=!1},d(i){i&&_(e),x(s,i),i&&t&&t.end()}}}function Je(l){let e,r,t,n,a=B(l[1]),s=[];for(let i=0;i<a.length;i+=1)s[i]=ve(de(l,a,i));const u=i=>q(s[i],1,1,()=>{s[i]=null});return{c(){e=S("div");for(let i=0;i<s.length;i+=1)s[i].c()},l(i){e=C(i,"DIV",{});var c=V(e);for(let o=0;o<s.length;o+=1)s[o].l(c);c.forEach(_)},m(i,c){P(i,e,c);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null);n=!0},p(i,c){if(c&2){a=B(i[1]);let o;for(o=0;o<a.length;o+=1){const v=de(i,a,o);s[o]?(s[o].p(v,c),w(s[o],1)):(s[o]=ve(v),s[o].c(),w(s[o],1),s[o].m(e,null))}for(U(),o=a.length;o<s.length;o+=1)u(o);Y()}},i(i){if(!n){for(let c=0;c<a.length;c+=1)w(s[c]);i&&me(()=>{n&&(t&&t.end(1),r=_e(e,W,{x:-1e3,duration:100}),r.start())}),n=!0}},o(i){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)q(s[c]);r&&r.invalidate(),i&&(t=be(e,W,{x:-1e3,duration:100})),n=!1},d(i){i&&_(e),x(s,i),i&&t&&t.end()}}}function ge(l){let e,r;return e=new ke({props:{project:l[7]}}),{c(){H(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){R(e,t,n),r=!0},p:A,i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){q(e.$$.fragment,t),r=!1},d(t){M(e,t)}}}function ve(l){let e,r;return e=new ke({props:{project:l[7]}}),{c(){H(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){R(e,t,n),r=!0},p:A,i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){q(e.$$.fragment,t),r=!1},d(t){M(e,t)}}}function Te(l){let e,r,t,n,a,s,u,i="Projecten",c,o,v="Contributions",$,g,h,f,d,b,I;r=new we({}),n=new Ae({});const ee=[Je,Me],G=[];function te(k,y){return k[0]==="projects"?0:k[0]==="contributions"?1:-1}return~(h=te(l))&&(f=G[h]=ee[h](l)),{c(){e=S("div"),H(r.$$.fragment),t=L(),H(n.$$.fragment),a=L(),s=S("div"),u=S("button"),u.textContent=i,c=L(),o=S("button"),o.textContent=v,$=L(),g=S("div"),f&&f.c(),this.h()},l(k){e=C(k,"DIV",{id:!0,class:!0});var y=V(e);D(r.$$.fragment,y),t=N(y),D(n.$$.fragment,y),a=N(y),s=C(y,"DIV",{class:!0});var E=V(s);u=C(E,"BUTTON",{class:!0,["data-svelte-h"]:!0}),X(u)!=="svelte-4nslrg"&&(u.textContent=i),c=N(E),o=C(E,"BUTTON",{class:!0,["data-svelte-h"]:!0}),X(o)!=="svelte-zymqbn"&&(o.textContent=v),E.forEach(_),y.forEach(_),$=N(k),g=C(k,"DIV",{class:!0});var ne=V(g);f&&f.l(ne),ne.forEach(_),this.h()},h(){m(u,"class","svelte-1q9biff"),Q(u,"selected",l[0]==="projects"),m(o,"class","svelte-1q9biff"),Q(o,"selected",l[0]==="contributions"),m(s,"class","nav svelte-1q9biff"),m(e,"id","sticky"),m(e,"class","svelte-1q9biff"),m(g,"class","content svelte-1q9biff")},m(k,y){P(k,e,y),R(r,e,null),j(e,t),R(n,e,null),j(e,a),j(e,s),j(s,u),j(s,c),j(s,o),P(k,$,y),P(k,g,y),~h&&G[h].m(g,null),d=!0,b||(I=[ie(u,"click",l[5]),ie(o,"click",l[6])],b=!0)},p(k,[y]){(!d||y&1)&&Q(u,"selected",k[0]==="projects"),(!d||y&1)&&Q(o,"selected",k[0]==="contributions");let E=h;h=te(k),h===E?~h&&G[h].p(k,y):(f&&(U(),q(G[E],1,1,()=>{G[E]=null}),Y()),~h?(f=G[h],f?f.p(k,y):(f=G[h]=ee[h](k),f.c()),w(f,1),f.m(g,null)):f=null)},i(k){d||(w(r.$$.fragment,k),w(n.$$.fragment,k),w(f),d=!0)},o(k){q(r.$$.fragment,k),q(n.$$.fragment,k),q(f),d=!1},d(k){k&&(_(e),_($),_(g)),M(r),M(n),~h&&G[h].d(),b=!1,$e(I)}}}function ze(l,e,r){let t;const n=[Ge,Ee,Be,Ie],a=[De,Re],s=Se("projects");je(l,s,o=>r(0,t=o));const u=o=>{s.set("busy"),setTimeout(()=>s.set(o),110)};return[t,n,a,s,u,()=>u("projects"),()=>u("contributions")]}class Qe extends T{constructor(e){super(),z(this,e,ze,Te,J,{})}}export{Qe as component};