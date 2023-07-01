import{s as z,n as A,f as ie,h as Z,r as ve,i as le,e as $e,j as _e}from"../chunks/scheduler.f757e6e6.js";import{S as J,i as O,g as S,h as w,y as I,k as g,a as P,f as _,m as U,j as L,n as F,x as $,o as K,s as N,c as V,d as y,p as Y,t as q,b as x,z as ee,r as D,u as T,v as M,w as R,A as X,B as Q,C as be,D as ke}from"../chunks/index.7ccba9ea.js";import{w as Se}from"../chunks/index.25baad96.js";function G(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function we(i){let e,l='<div id="profile-picture" class="svelte-ny7eou"><img src="./profile.png" alt="profile" class="svelte-ny7eou"/></div> <div class="information svelte-ny7eou"><span id="name" class="svelte-ny7eou">Arthur Joppart (<span id="age">24</span>)</span> <div class="svelte-ny7eou"><img src="./suitcase.svg" alt="suitcase icon" class="svelte-ny7eou"/> <span>Software Engineer</span></div> <div class="svelte-ny7eou"><img src="./email.svg" alt="email icon" class="svelte-ny7eou"/> <a type="email" href="mailto:arthur.joppart@gmail.com">arthur.joppart@gmail.com</a></div> <div class="svelte-ny7eou"><img src="./location.svg" alt="location icon" class="svelte-ny7eou"/> <span>Leuven, België</span></div></div>';return{c(){e=S("div"),e.innerHTML=l,this.h()},l(t){e=w(t,"DIV",{class:!0,["data-svelte-h"]:!0}),I(e)!=="svelte-1qo9cmg"&&(e.innerHTML=l),this.h()},h(){g(e,"class","profile svelte-ny7eou")},m(t,n){P(t,e,n)},p:A,i:A,o:A,d(t){t&&_(e)}}}class ye extends J{constructor(e){super(),O(this,e,null,we,z,{})}}function Ce(i){let e,l,t;return{c(){e=S("span"),l=U(i[0]),this.h()},l(n){e=w(n,"SPAN",{class:!0});var a=L(e);l=F(a,i[0]),a.forEach(_),this.h()},h(){g(e,"class",t=ie(i[0].toString().toLowerCase())+" svelte-6ojdc4")},m(n,a){P(n,e,a),$(e,l)},p(n,[a]){a&1&&K(l,n[0]),a&1&&t!==(t=ie(n[0].toString().toLowerCase())+" svelte-6ojdc4")&&g(e,"class",t)},i:A,o:A,d(n){n&&_(e)}}}function qe(i,e,l){let{tag:t}=e;return i.$$set=n=>{"tag"in n&&l(0,t=n.tag)},[t]}let Pe=class extends J{constructor(e){super(),O(this,e,qe,Ce,z,{tag:0})}};function re(i,e,l){const t=i.slice();return t[1]=e[l],t}function oe(i){let e,l;return{c(){e=S("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Z(e.src,l=i[0].images[0])||g(e,"src",l),g(e,"alt","screenshot of the project"),g(e,"class","svelte-jo8eqt")},m(t,n){P(t,e,n)},p(t,n){n&1&&!Z(e.src,l=t[0].images[0])&&g(e,"src",l)},d(t){t&&_(e)}}}function ae(i){let e,l,t,n,a,s=i[0].link+"",u,r;return{c(){e=S("div"),l=S("img"),n=N(),a=S("a"),u=U(s),this.h()},l(c){e=w(c,"DIV",{class:!0});var o=L(e);l=w(o,"IMG",{src:!0,alt:!0,class:!0}),n=V(o),a=w(o,"A",{href:!0,target:!0,class:!0});var v=L(a);u=F(v,s),v.forEach(_),o.forEach(_),this.h()},h(){Z(l.src,t="./link.svg")||g(l,"src",t),g(l,"alt","link icon"),g(l,"class","svelte-jo8eqt"),g(a,"href",r=i[0].link),g(a,"target","_blank"),g(a,"class","svelte-jo8eqt"),g(e,"class","link-container svelte-jo8eqt")},m(c,o){P(c,e,o),$(e,l),$(e,n),$(e,a),$(a,u)},p(c,o){o&1&&s!==(s=c[0].link+"")&&K(u,s),o&1&&r!==(r=c[0].link)&&g(a,"href",r)},d(c){c&&_(e)}}}function ce(i){let e,l,t=G(i[0].tags),n=[];for(let s=0;s<t.length;s+=1)n[s]=ue(re(i,t,s));const a=s=>q(n[s],1,1,()=>{n[s]=null});return{c(){e=S("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=w(s,"DIV",{class:!0});var u=L(e);for(let r=0;r<n.length;r+=1)n[r].l(u);u.forEach(_),this.h()},h(){g(e,"class","tags svelte-jo8eqt")},m(s,u){P(s,e,u);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(e,null);l=!0},p(s,u){if(u&1){t=G(s[0].tags);let r;for(r=0;r<t.length;r+=1){const c=re(s,t,r);n[r]?(n[r].p(c,u),y(n[r],1)):(n[r]=ue(c),n[r].c(),y(n[r],1),n[r].m(e,null))}for(Y(),r=t.length;r<n.length;r+=1)a(r);x()}},i(s){if(!l){for(let u=0;u<t.length;u+=1)y(n[u]);l=!0}},o(s){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)q(n[u]);l=!1},d(s){s&&_(e),ee(n,s)}}}function ue(i){let e,l;return e=new Pe({props:{tag:i[1]}}),{c(){D(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){M(e,t,n),l=!0},p(t,n){const a={};n&1&&(a.tag=t[1]),e.$set(a)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){q(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function fe(i){let e,l=i[0].description+"",t;return{c(){e=S("p"),t=U(l),this.h()},l(n){e=w(n,"P",{class:!0});var a=L(e);t=F(a,l),a.forEach(_),this.h()},h(){g(e,"class","description svelte-jo8eqt")},m(n,a){P(n,e,a),$(e,t)},p(n,a){a&1&&l!==(l=n[0].description+"")&&K(t,l)},d(n){n&&_(e)}}}function he(i){let e,l,t;return{c(){e=S("a"),l=U("Voor meer info, bekijk op Github ->"),this.h()},l(n){e=w(n,"A",{href:!0,target:!0,rel:!0});var a=L(e);l=F(a,"Voor meer info, bekijk op Github ->"),a.forEach(_),this.h()},h(){g(e,"href",t=i[0].github),g(e,"target","_blank"),g(e,"rel","noreferrer noopener")},m(n,a){P(n,e,a),$(e,l)},p(n,a){a&1&&t!==(t=n[0].github)&&g(e,"href",t)},d(n){n&&_(e)}}}function Le(i){let e,l,t=i[0].title+"",n,a,s,u,r,c,o,v=i[0].images.length>0&&oe(i),j=i[0].link&&ae(i),m=i[0].tags.length>0&&ce(i),h=i[0].description&&fe(i),f=i[0].github&&he(i);return{c(){e=S("div"),l=S("h2"),n=U(t),a=N(),v&&v.c(),s=N(),j&&j.c(),u=N(),m&&m.c(),r=N(),h&&h.c(),c=N(),f&&f.c(),this.h()},l(p){e=w(p,"DIV",{class:!0});var b=L(e);l=w(b,"H2",{class:!0});var H=L(l);n=F(H,t),H.forEach(_),a=V(b),v&&v.l(b),s=V(b),j&&j.l(b),u=V(b),m&&m.l(b),r=V(b),h&&h.l(b),c=V(b),f&&f.l(b),b.forEach(_),this.h()},h(){g(l,"class","svelte-jo8eqt"),g(e,"class","container svelte-jo8eqt")},m(p,b){P(p,e,b),$(e,l),$(l,n),$(e,a),v&&v.m(e,null),$(e,s),j&&j.m(e,null),$(e,u),m&&m.m(e,null),$(e,r),h&&h.m(e,null),$(e,c),f&&f.m(e,null),o=!0},p(p,[b]){(!o||b&1)&&t!==(t=p[0].title+"")&&K(n,t),p[0].images.length>0?v?v.p(p,b):(v=oe(p),v.c(),v.m(e,s)):v&&(v.d(1),v=null),p[0].link?j?j.p(p,b):(j=ae(p),j.c(),j.m(e,u)):j&&(j.d(1),j=null),p[0].tags.length>0?m?(m.p(p,b),b&1&&y(m,1)):(m=ce(p),m.c(),y(m,1),m.m(e,r)):m&&(Y(),q(m,1,1,()=>{m=null}),x()),p[0].description?h?h.p(p,b):(h=fe(p),h.c(),h.m(e,c)):h&&(h.d(1),h=null),p[0].github?f?f.p(p,b):(f=he(p),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},i(p){o||(y(m),o=!0)},o(p){q(m),o=!1},d(p){p&&_(e),v&&v.d(),j&&j.d(),m&&m.d(),h&&h.d(),f&&f.d()}}}function Ne(i,e,l){let{project:t}=e;return i.$$set=n=>{"project"in n&&l(0,t=n.project)},[t]}class je extends J{constructor(e){super(),O(this,e,Ne,Le,z,{project:0})}}function Ve(i){let e,l,t='<span class="svelte-jxmi5d">Github</span> <img src="./github.png" alt="github logo" class="svelte-jxmi5d"/>',n,a,s='<span class="svelte-jxmi5d">LinkedIn</span> <img src="./linkedin.png" alt="linkedin logo" class="svelte-jxmi5d"/>',u,r;return{c(){e=S("div"),l=S("button"),l.innerHTML=t,n=N(),a=S("button"),a.innerHTML=s,this.h()},l(c){e=w(c,"DIV",{class:!0});var o=L(e);l=w(o,"BUTTON",{class:!0,["data-svelte-h"]:!0}),I(l)!=="svelte-vqxpg2"&&(l.innerHTML=t),n=V(o),a=w(o,"BUTTON",{class:!0,["data-svelte-h"]:!0}),I(a)!=="svelte-sx48nz"&&(a.innerHTML=s),o.forEach(_),this.h()},h(){g(l,"class","github-button svelte-jxmi5d"),g(a,"class","linkedin-button svelte-jxmi5d"),g(e,"class","socials svelte-jxmi5d")},m(c,o){P(c,e,o),$(e,l),$(e,n),$(e,a),u||(r=[X(l,"click",i[0]),X(a,"click",i[1])],u=!0)},p:A,i:A,o:A,d(c){c&&_(e),u=!1,ve(r)}}}function Ae(i){return[()=>window.open("https://github.com/BelgianNoise","_blank"),()=>window.open("https://www.linkedin.com/in/arthur-joppart-728a7817a/","_blank")]}class Be extends J{constructor(e){super(),O(this,e,Ae,Ve,z,{})}}var d=(i=>(i.TS="TypeScript",i.JS="JavaScript",i.React="React",i.Redux="Redux",i.Node="Node",i.Firebase="Firebase",i.PostgreSQL="PostgreSQL",i.NestJS="NestJS",i.ChartJS="ChartJS",i.Lit="Lit",i.XState="XState",i.Vite="Vite",i.HTML="HTML",i.Svelte="Svelte",i.GO="GO",i.CSS="CSS",i.GCP="GCP",i.GithubActions="Github Actions",i.Vercel="Vercel",i.Redis="Redis",i))(d||{});const Ee={title:"YABAT",description:`YABAT is een web applicatie die het makkelijk maakt een logboek van inkomsten
    en uitgaven bij te houden. Je kan ook maandelijkse uitgaven en inkomsten vergelijken
    opgedeeld per categorie.`,tags:[d.TS,d.Firebase,d.XState,d.Lit,d.ChartJS,d.Vite,d.Node,d.HTML,d.CSS],link:"https://yabat.be",images:["./screenshots/yabat/logo.png","./screenshots/yabat/home.png","./screenshots/yabat/overview.png","./screenshots/yabat/distribution.png","./screenshots/yabat/compare.png"],github:"https://github.com/BelgianNoise/YABAT"},Ge={title:"Plex Content Request",description:`Een website waarop gebruikers films en series kunnen aanvragen die ze graag
    zouden willen zien op mijn Plex server. De website ondersteunt routing, authenticatie,
    authorisatie, en i18n.`,tags:[d.React,d.Redux,d.TS,d.Firebase,d.Node,d.HTML,d.CSS],link:"https://nasaj.be",images:["./screenshots/content-request/logo.png","./screenshots/content-request/home.png","./screenshots/content-request/overview.png","./screenshots/content-request/login.png"],github:"https://github.com/BelgianNoise/react-plex-content-request"},He={title:"Colruyt Product Scraper",description:`Een tool geschreven in Go om alle producten van Colruyt
  op te halen via hun API om daarna een overzicht te kunnen maken van alle
  prijsveranderingen. Optimaal komt hier later nog een website bij om de prijs
  geschiedenis van een product te kunnen bekijken, en worden er wekelijks mails
  verstuurd met de interessantste prijsveranderingen.`,tags:[d.GO,d.PostgreSQL,d.GCP,d.GithubActions],link:void 0,images:["./screenshots/colruyt-product-scraper/logo.png"],github:"https://github.com/BelgianNoise/colruyt-products-scraper"},Ie={title:"Waar Streamen",description:`Een website waarop een gebruiker kan zoeken op welk streaming
  platform een bepaalde film of serie beschikbaar is. De website ondersteunt
  grote platformen van België en de grote wereldwijde platformen. De data wordt
  opgehaald via gebruik van APIs en web scraping.`,tags:[d.Svelte,d.TS,d.Node,d.Vercel,d.GCP,d.GithubActions,d.HTML,d.CSS],link:"https://waar-streamen.nasaj.be",images:["./screenshots/waar-streamen/logo.png"],github:"https://github.com/BelgianNoise/waar-streamen"};function De(i){const e=i-1;return e*e*e+1}function W(i,{delay:e=0,duration:l=400,easing:t=De,x:n=0,y:a=0,opacity:s=0}={}){const u=getComputedStyle(i),r=+u.opacity,c=u.transform==="none"?"":u.transform,o=r*(1-s),[v,j]=le(n),[m,h]=le(a);return{delay:e,duration:l,easing:t,css:(f,p)=>`
			transform: ${c} translate(${(1-f)*v}${j}, ${(1-f)*m}${h});
			opacity: ${r-o*p}`}}const Te={title:"Community Solid Server",description:`Deze open source Solid server heb ik onder andere voorzien
  van een Redis based read-write locker en een robust data
  storage quota systeem.`,tags:[d.TS,d.Node,d.Redis],images:["./screenshots/css/logo.png"],link:"https://github.com/CommunitySolidServer/CommunitySolidServer",github:void 0},Me={title:"Handlers.js",description:`Handlers.js is een open source framework om modulaire HTTP
  servers te bouwen. Ik ben/was dicht betrokken bij het design, 
  de ontwikkeling en het onderhoud van dit project.`,tags:[d.TS,d.Node],images:[],link:"https://github.com/digita-ai/handlersjs",github:void 0};function de(i,e,l){const t=i.slice();return t[7]=e[l],t}function pe(i,e,l){const t=i.slice();return t[7]=e[l],t}function Re(i){let e,l,t,n,a=G(i[2]),s=[];for(let r=0;r<a.length;r+=1)s[r]=ge(de(i,a,r));const u=r=>q(s[r],1,1,()=>{s[r]=null});return{c(){e=S("div");for(let r=0;r<s.length;r+=1)s[r].c()},l(r){e=w(r,"DIV",{});var c=L(e);for(let o=0;o<s.length;o+=1)s[o].l(c);c.forEach(_)},m(r,c){P(r,e,c);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null);n=!0},p(r,c){if(c&4){a=G(r[2]);let o;for(o=0;o<a.length;o+=1){const v=de(r,a,o);s[o]?(s[o].p(v,c),y(s[o],1)):(s[o]=ge(v),s[o].c(),y(s[o],1),s[o].m(e,null))}for(Y(),o=a.length;o<s.length;o+=1)u(o);x()}},i(r){if(!n){for(let c=0;c<a.length;c+=1)y(s[c]);r&&_e(()=>{n&&(t&&t.end(1),l=be(e,W,{x:"100%",duration:100}),l.start())}),n=!0}},o(r){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)q(s[c]);l&&l.invalidate(),r&&(t=ke(e,W,{x:"100%",duration:100})),n=!1},d(r){r&&_(e),ee(s,r),r&&t&&t.end()}}}function ze(i){let e,l,t,n,a=G(i[1]),s=[];for(let r=0;r<a.length;r+=1)s[r]=me(pe(i,a,r));const u=r=>q(s[r],1,1,()=>{s[r]=null});return{c(){e=S("div");for(let r=0;r<s.length;r+=1)s[r].c()},l(r){e=w(r,"DIV",{});var c=L(e);for(let o=0;o<s.length;o+=1)s[o].l(c);c.forEach(_)},m(r,c){P(r,e,c);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null);n=!0},p(r,c){if(c&2){a=G(r[1]);let o;for(o=0;o<a.length;o+=1){const v=pe(r,a,o);s[o]?(s[o].p(v,c),y(s[o],1)):(s[o]=me(v),s[o].c(),y(s[o],1),s[o].m(e,null))}for(Y(),o=a.length;o<s.length;o+=1)u(o);x()}},i(r){if(!n){for(let c=0;c<a.length;c+=1)y(s[c]);r&&_e(()=>{n&&(t&&t.end(1),l=be(e,W,{x:"-100%",duration:100}),l.start())}),n=!0}},o(r){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)q(s[c]);l&&l.invalidate(),r&&(t=ke(e,W,{x:"-100%",duration:100})),n=!1},d(r){r&&_(e),ee(s,r),r&&t&&t.end()}}}function ge(i){let e,l;return e=new je({props:{project:i[7]}}),{c(){D(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){M(e,t,n),l=!0},p:A,i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){q(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function me(i){let e,l;return e=new je({props:{project:i[7]}}),{c(){D(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){M(e,t,n),l=!0},p:A,i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){q(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function Je(i){let e,l,t,n,a,s,u,r="Projecten",c,o,v="Contributions",j,m,h,f,p,b,H;l=new ye({}),n=new Be({});const te=[ze,Re],B=[];function ne(k,C){return k[0]==="projects"?0:k[0]==="contributions"?1:-1}return~(h=ne(i))&&(f=B[h]=te[h](i)),{c(){e=S("div"),D(l.$$.fragment),t=N(),D(n.$$.fragment),a=N(),s=S("div"),u=S("button"),u.textContent=r,c=N(),o=S("button"),o.textContent=v,j=N(),m=S("div"),f&&f.c(),this.h()},l(k){e=w(k,"DIV",{id:!0,class:!0});var C=L(e);T(l.$$.fragment,C),t=V(C),T(n.$$.fragment,C),a=V(C),s=w(C,"DIV",{class:!0});var E=L(s);u=w(E,"BUTTON",{class:!0,["data-svelte-h"]:!0}),I(u)!=="svelte-4nslrg"&&(u.textContent=r),c=V(E),o=w(E,"BUTTON",{class:!0,["data-svelte-h"]:!0}),I(o)!=="svelte-zymqbn"&&(o.textContent=v),E.forEach(_),C.forEach(_),j=V(k),m=w(k,"DIV",{class:!0});var se=L(m);f&&f.l(se),se.forEach(_),this.h()},h(){g(u,"class","svelte-1q9biff"),Q(u,"selected",i[0]==="projects"),g(o,"class","svelte-1q9biff"),Q(o,"selected",i[0]==="contributions"),g(s,"class","nav svelte-1q9biff"),g(e,"id","sticky"),g(e,"class","svelte-1q9biff"),g(m,"class","content svelte-1q9biff")},m(k,C){P(k,e,C),M(l,e,null),$(e,t),M(n,e,null),$(e,a),$(e,s),$(s,u),$(s,c),$(s,o),P(k,j,C),P(k,m,C),~h&&B[h].m(m,null),p=!0,b||(H=[X(u,"click",i[5]),X(o,"click",i[6])],b=!0)},p(k,[C]){(!p||C&1)&&Q(u,"selected",k[0]==="projects"),(!p||C&1)&&Q(o,"selected",k[0]==="contributions");let E=h;h=ne(k),h===E?~h&&B[h].p(k,C):(f&&(Y(),q(B[E],1,1,()=>{B[E]=null}),x()),~h?(f=B[h],f?f.p(k,C):(f=B[h]=te[h](k),f.c()),y(f,1),f.m(m,null)):f=null)},i(k){p||(y(l.$$.fragment,k),y(n.$$.fragment,k),y(f),p=!0)},o(k){q(l.$$.fragment,k),q(n.$$.fragment,k),q(f),p=!1},d(k){k&&(_(e),_(j),_(m)),R(l),R(n),~h&&B[h].d(),b=!1,ve(H)}}}function Oe(i,e,l){let t;const n=[Ee,Ge,He,Ie],a=[Te,Me],s=Se("projects");$e(i,s,o=>l(0,t=o));const u=o=>{s.set("busy"),setTimeout(()=>s.set(o),100)};return[t,n,a,s,u,()=>u("projects"),()=>u("contributions")]}class Qe extends J{constructor(e){super(),O(this,e,Oe,Je,z,{})}}export{Qe as component};
