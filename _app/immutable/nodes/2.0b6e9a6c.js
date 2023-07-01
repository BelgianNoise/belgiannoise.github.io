import{s as J,n as A,f as le,h as x,r as _e,i as re,j as ee,e as $e}from"../chunks/scheduler.f757e6e6.js";import{S as O,i as U,g as S,h as w,y as D,k as v,a as q,f as _,m as W,j as L,n as F,x as $,o as Z,s as N,c as V,d as y,p as Y,t as P,b as Q,z as te,r as T,u as M,v as z,w as R,A as I,B as X,C as be,D as ke}from"../chunks/index.7ccba9ea.js";import{w as Se}from"../chunks/index.25baad96.js";function G(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function we(n){let e,i='<div id="profile-picture" class="svelte-ny7eou"><img src="./profile.png" alt="profile" class="svelte-ny7eou"/></div> <div class="information svelte-ny7eou"><span id="name" class="svelte-ny7eou">Arthur Joppart (<span id="age">24</span>)</span> <div class="svelte-ny7eou"><img src="./suitcase.svg" alt="suitcase icon" class="svelte-ny7eou"/> <span>Software Engineer</span></div> <div class="svelte-ny7eou"><img src="./email.svg" alt="email icon" class="svelte-ny7eou"/> <a type="email" href="mailto:arthur.joppart@gmail.com">arthur.joppart@gmail.com</a></div> <div class="svelte-ny7eou"><img src="./location.svg" alt="location icon" class="svelte-ny7eou"/> <span>Leuven, België</span></div></div>';return{c(){e=S("div"),e.innerHTML=i,this.h()},l(t){e=w(t,"DIV",{class:!0,["data-svelte-h"]:!0}),D(e)!=="svelte-1qo9cmg"&&(e.innerHTML=i),this.h()},h(){v(e,"class","profile svelte-ny7eou")},m(t,s){q(t,e,s)},p:A,i:A,o:A,d(t){t&&_(e)}}}class ye extends O{constructor(e){super(),U(this,e,null,we,J,{})}}function Ce(n){let e,i,t;return{c(){e=S("span"),i=W(n[0]),this.h()},l(s){e=w(s,"SPAN",{class:!0});var a=L(e);i=F(a,n[0]),a.forEach(_),this.h()},h(){v(e,"class",t=le(n[0].toString().toLowerCase())+" svelte-6ojdc4")},m(s,a){q(s,e,a),$(e,i)},p(s,[a]){a&1&&Z(i,s[0]),a&1&&t!==(t=le(s[0].toString().toLowerCase())+" svelte-6ojdc4")&&v(e,"class",t)},i:A,o:A,d(s){s&&_(e)}}}function Pe(n,e,i){let{tag:t}=e;return n.$$set=s=>{"tag"in s&&i(0,t=s.tag)},[t]}let qe=class extends O{constructor(e){super(),U(this,e,Pe,Ce,J,{tag:0})}};function oe(n,e,i){const t=n.slice();return t[1]=e[i],t}function ae(n){let e,i;return{c(){e=S("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){x(e.src,i=n[0].images[0])||v(e,"src",i),v(e,"alt","screenshot of the project"),v(e,"class","svelte-jo8eqt")},m(t,s){q(t,e,s)},p(t,s){s&1&&!x(e.src,i=t[0].images[0])&&v(e,"src",i)},d(t){t&&_(e)}}}function ce(n){let e,i,t,s,a,l=n[0].link+"",u,r;return{c(){e=S("div"),i=S("img"),s=N(),a=S("a"),u=W(l),this.h()},l(c){e=w(c,"DIV",{class:!0});var o=L(e);i=w(o,"IMG",{src:!0,alt:!0,class:!0}),s=V(o),a=w(o,"A",{href:!0,target:!0,class:!0});var m=L(a);u=F(m,l),m.forEach(_),o.forEach(_),this.h()},h(){x(i.src,t="./link.svg")||v(i,"src",t),v(i,"alt","link icon"),v(i,"class","svelte-jo8eqt"),v(a,"href",r=n[0].link),v(a,"target","_blank"),v(a,"class","svelte-jo8eqt"),v(e,"class","link-container svelte-jo8eqt")},m(c,o){q(c,e,o),$(e,i),$(e,s),$(e,a),$(a,u)},p(c,o){o&1&&l!==(l=c[0].link+"")&&Z(u,l),o&1&&r!==(r=c[0].link)&&v(a,"href",r)},d(c){c&&_(e)}}}function ue(n){let e,i,t=G(n[0].tags),s=[];for(let l=0;l<t.length;l+=1)s[l]=fe(oe(n,t,l));const a=l=>P(s[l],1,1,()=>{s[l]=null});return{c(){e=S("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=w(l,"DIV",{class:!0});var u=L(e);for(let r=0;r<s.length;r+=1)s[r].l(u);u.forEach(_),this.h()},h(){v(e,"class","tags svelte-jo8eqt")},m(l,u){q(l,e,u);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(e,null);i=!0},p(l,u){if(u&1){t=G(l[0].tags);let r;for(r=0;r<t.length;r+=1){const c=oe(l,t,r);s[r]?(s[r].p(c,u),y(s[r],1)):(s[r]=fe(c),s[r].c(),y(s[r],1),s[r].m(e,null))}for(Y(),r=t.length;r<s.length;r+=1)a(r);Q()}},i(l){if(!i){for(let u=0;u<t.length;u+=1)y(s[u]);i=!0}},o(l){s=s.filter(Boolean);for(let u=0;u<s.length;u+=1)P(s[u]);i=!1},d(l){l&&_(e),te(s,l)}}}function fe(n){let e,i;return e=new qe({props:{tag:n[1]}}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){z(e,t,s),i=!0},p(t,s){const a={};s&1&&(a.tag=t[1]),e.$set(a)},i(t){i||(y(e.$$.fragment,t),i=!0)},o(t){P(e.$$.fragment,t),i=!1},d(t){R(e,t)}}}function de(n){let e,i=n[0].description+"",t;return{c(){e=S("p"),t=W(i),this.h()},l(s){e=w(s,"P",{class:!0});var a=L(e);t=F(a,i),a.forEach(_),this.h()},h(){v(e,"class","description svelte-jo8eqt")},m(s,a){q(s,e,a),$(e,t)},p(s,a){a&1&&i!==(i=s[0].description+"")&&Z(t,i)},d(s){s&&_(e)}}}function he(n){let e,i,t;return{c(){e=S("a"),i=W("Voor meer info, bekijk op Github ->"),this.h()},l(s){e=w(s,"A",{href:!0,target:!0,rel:!0});var a=L(e);i=F(a,"Voor meer info, bekijk op Github ->"),a.forEach(_),this.h()},h(){v(e,"href",t=n[0].github),v(e,"target","_blank"),v(e,"rel","noreferrer noopener")},m(s,a){q(s,e,a),$(e,i)},p(s,a){a&1&&t!==(t=s[0].github)&&v(e,"href",t)},d(s){s&&_(e)}}}function Le(n){let e,i,t=n[0].title+"",s,a,l,u,r,c,o,m=n[0].images.length>0&&ae(n),k=n[0].link&&ce(n),d=n[0].tags.length>0&&ue(n),h=n[0].description&&de(n),f=n[0].github&&he(n);return{c(){e=S("div"),i=S("h2"),s=W(t),a=N(),m&&m.c(),l=N(),k&&k.c(),u=N(),d&&d.c(),r=N(),h&&h.c(),c=N(),f&&f.c(),this.h()},l(g){e=w(g,"DIV",{class:!0});var b=L(e);i=w(b,"H2",{class:!0});var H=L(i);s=F(H,t),H.forEach(_),a=V(b),m&&m.l(b),l=V(b),k&&k.l(b),u=V(b),d&&d.l(b),r=V(b),h&&h.l(b),c=V(b),f&&f.l(b),b.forEach(_),this.h()},h(){v(i,"class","svelte-jo8eqt"),v(e,"class","container svelte-jo8eqt")},m(g,b){q(g,e,b),$(e,i),$(i,s),$(e,a),m&&m.m(e,null),$(e,l),k&&k.m(e,null),$(e,u),d&&d.m(e,null),$(e,r),h&&h.m(e,null),$(e,c),f&&f.m(e,null),o=!0},p(g,[b]){(!o||b&1)&&t!==(t=g[0].title+"")&&Z(s,t),g[0].images.length>0?m?m.p(g,b):(m=ae(g),m.c(),m.m(e,l)):m&&(m.d(1),m=null),g[0].link?k?k.p(g,b):(k=ce(g),k.c(),k.m(e,u)):k&&(k.d(1),k=null),g[0].tags.length>0?d?(d.p(g,b),b&1&&y(d,1)):(d=ue(g),d.c(),y(d,1),d.m(e,r)):d&&(Y(),P(d,1,1,()=>{d=null}),Q()),g[0].description?h?h.p(g,b):(h=de(g),h.c(),h.m(e,c)):h&&(h.d(1),h=null),g[0].github?f?f.p(g,b):(f=he(g),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},i(g){o||(y(d),o=!0)},o(g){P(d),o=!1},d(g){g&&_(e),m&&m.d(),k&&k.d(),d&&d.d(),h&&h.d(),f&&f.d()}}}function Ne(n,e,i){let{project:t}=e;return n.$$set=s=>{"project"in s&&i(0,t=s.project)},[t]}class je extends O{constructor(e){super(),U(this,e,Ne,Le,J,{project:0})}}function Ve(n){let e,i,t='<span class="svelte-jxmi5d">Github</span> <img src="./github.png" alt="github logo" class="svelte-jxmi5d"/>',s,a,l='<span class="svelte-jxmi5d">LinkedIn</span> <img src="./linkedin.png" alt="linkedin logo" class="svelte-jxmi5d"/>',u,r;return{c(){e=S("div"),i=S("button"),i.innerHTML=t,s=N(),a=S("button"),a.innerHTML=l,this.h()},l(c){e=w(c,"DIV",{class:!0});var o=L(e);i=w(o,"BUTTON",{class:!0,["data-svelte-h"]:!0}),D(i)!=="svelte-vqxpg2"&&(i.innerHTML=t),s=V(o),a=w(o,"BUTTON",{class:!0,["data-svelte-h"]:!0}),D(a)!=="svelte-sx48nz"&&(a.innerHTML=l),o.forEach(_),this.h()},h(){v(i,"class","github-button svelte-jxmi5d"),v(a,"class","linkedin-button svelte-jxmi5d"),v(e,"class","socials svelte-jxmi5d")},m(c,o){q(c,e,o),$(e,i),$(e,s),$(e,a),u||(r=[I(i,"click",n[0]),I(a,"click",n[1])],u=!0)},p:A,i:A,o:A,d(c){c&&_(e),u=!1,_e(r)}}}function Ae(n){return[()=>window.open("https://github.com/BelgianNoise","_blank"),()=>window.open("https://www.linkedin.com/in/arthur-joppart-728a7817a/","_blank")]}class Be extends O{constructor(e){super(),U(this,e,Ae,Ve,J,{})}}var p=(n=>(n.TS="TypeScript",n.JS="JavaScript",n.React="React",n.Redux="Redux",n.Node="Node",n.Firebase="Firebase",n.PostgreSQL="PostgreSQL",n.NestJS="NestJS",n.ChartJS="ChartJS",n.Lit="Lit",n.XState="XState",n.Vite="Vite",n.HTML="HTML",n.Svelte="Svelte",n.GO="GO",n.CSS="CSS",n.GCP="GCP",n.GithubActions="Github Actions",n.Vercel="Vercel",n.Redis="Redis",n))(p||{});const Ee={title:"YABAT",description:`YABAT is een web applicatie die het makkelijk maakt een logboek van inkomsten
    en uitgaven bij te houden. Je kan ook maandelijkse uitgaven en inkomsten vergelijken
    opgedeeld per categorie.`,tags:[p.TS,p.Firebase,p.XState,p.Lit,p.ChartJS,p.Vite,p.Node,p.HTML,p.CSS],link:"https://yabat.be",images:["./screenshots/yabat/logo.png","./screenshots/yabat/home.png","./screenshots/yabat/overview.png","./screenshots/yabat/distribution.png","./screenshots/yabat/compare.png"],github:"https://github.com/BelgianNoise/YABAT"},Ge={title:"Plex Content Request",description:`Een website waarop gebruikers films en series kunnen aanvragen die ze graag
    zouden willen zien op mijn Plex server. De website ondersteunt routing, authenticatie,
    authorisatie, en i18n.`,tags:[p.React,p.Redux,p.TS,p.Firebase,p.Node,p.HTML,p.CSS],link:"https://nasaj.be",images:["./screenshots/content-request/logo.png","./screenshots/content-request/home.png","./screenshots/content-request/overview.png","./screenshots/content-request/login.png"],github:"https://github.com/BelgianNoise/react-plex-content-request"},He={title:"Colruyt Product Scraper",description:`Een tool geschreven in Go om alle producten van Colruyt
  op te halen via hun API om daarna een overzicht te kunnen maken van alle
  prijsveranderingen. Optimaal komt hier later nog een website bij om de prijs
  geschiedenis van een product te kunnen bekijken, en worden er wekelijks mails
  verstuurd met de interessantste prijsveranderingen.`,tags:[p.GO,p.PostgreSQL,p.GCP,p.GithubActions],link:void 0,images:["./screenshots/colruyt-product-scraper/logo.png"],github:"https://github.com/BelgianNoise/colruyt-products-scraper"},Ie={title:"Waar Streamen",description:`Een website waarop een gebruiker kan zoeken op welk streaming
  platform een bepaalde film of serie beschikbaar is. De website ondersteunt
  grote platformen van België en de grote wereldwijde platformen. De data wordt
  opgehaald via gebruik van APIs en web scraping.`,tags:[p.Svelte,p.TS,p.Node,p.Vercel,p.GCP,p.GithubActions,p.HTML,p.CSS],link:"https://waar-streamen.nasaj.be",images:["./screenshots/waar-streamen/logo.png"],github:"https://github.com/BelgianNoise/waar-streamen"};function De(n){const e=n-1;return e*e*e+1}function K(n,{delay:e=0,duration:i=400,easing:t=De,x:s=0,y:a=0,opacity:l=0}={}){const u=getComputedStyle(n),r=+u.opacity,c=u.transform==="none"?"":u.transform,o=r*(1-l),[m,k]=re(s),[d,h]=re(a);return{delay:e,duration:i,easing:t,css:(f,g)=>`
			transform: ${c} translate(${(1-f)*m}${k}, ${(1-f)*d}${h});
			opacity: ${r-o*g}`}}const Te={title:"Community Solid Server",description:`Deze open source Solid server heb ik onder andere voorzien
  van een Redis based read-write locker en een robust data
  storage quota systeem.`,tags:[p.TS,p.Node,p.Redis],images:["./screenshots/css/logo.png"],link:"https://github.com/CommunitySolidServer/CommunitySolidServer",github:void 0},Me={title:"Handlers.js",description:`Handlers.js is een open source framework om modulaire HTTP
  servers te bouwen. Ik ben/was dicht betrokken bij het design, 
  de ontwikkeling en het onderhoud van dit project.`,tags:[p.TS,p.Node],images:[],link:"https://github.com/digita-ai/handlersjs",github:void 0};function pe(n,e,i){const t=n.slice();return t[10]=e[i],t}function ge(n,e,i){const t=n.slice();return t[10]=e[i],t}function ze(n){let e,i,t,s,a=G(n[4]),l=[];for(let r=0;r<a.length;r+=1)l[r]=me(pe(n,a,r));const u=r=>P(l[r],1,1,()=>{l[r]=null});return{c(){e=S("div");for(let r=0;r<l.length;r+=1)l[r].c()},l(r){e=w(r,"DIV",{});var c=L(e);for(let o=0;o<l.length;o+=1)l[o].l(c);c.forEach(_)},m(r,c){q(r,e,c);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null);s=!0},p(r,c){if(c&16){a=G(r[4]);let o;for(o=0;o<a.length;o+=1){const m=pe(r,a,o);l[o]?(l[o].p(m,c),y(l[o],1)):(l[o]=me(m),l[o].c(),y(l[o],1),l[o].m(e,null))}for(Y(),o=a.length;o<l.length;o+=1)u(o);Q()}},i(r){if(!s){for(let c=0;c<a.length;c+=1)y(l[c]);r&&ee(()=>{s&&(t&&t.end(1),i=be(e,K,{x:"100%",duration:100}),i.start())}),s=!0}},o(r){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)P(l[c]);i&&i.invalidate(),r&&(t=ke(e,K,{x:"100%",duration:100})),s=!1},d(r){r&&_(e),te(l,r),r&&t&&t.end()}}}function Re(n){let e,i,t,s,a=G(n[3]),l=[];for(let r=0;r<a.length;r+=1)l[r]=ve(ge(n,a,r));const u=r=>P(l[r],1,1,()=>{l[r]=null});return{c(){e=S("div");for(let r=0;r<l.length;r+=1)l[r].c()},l(r){e=w(r,"DIV",{});var c=L(e);for(let o=0;o<l.length;o+=1)l[o].l(c);c.forEach(_)},m(r,c){q(r,e,c);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null);s=!0},p(r,c){if(n=r,c&8){a=G(n[3]);let o;for(o=0;o<a.length;o+=1){const m=ge(n,a,o);l[o]?(l[o].p(m,c),y(l[o],1)):(l[o]=ve(m),l[o].c(),y(l[o],1),l[o].m(e,null))}for(Y(),o=a.length;o<l.length;o+=1)u(o);Q()}},i(r){if(!s){for(let c=0;c<a.length;c+=1)y(l[c]);r&&ee(()=>{s&&(t&&t.end(1),i=be(e,K,n[1]?{x:"-100%",duration:100}:{x:"100%",duration:100}),i.start())}),s=!0}},o(r){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)P(l[c]);i&&i.invalidate(),r&&(t=ke(e,K,n[1]?{x:"-100%",duration:100}:{x:"100%",duration:100})),s=!1},d(r){r&&_(e),te(l,r),r&&t&&t.end()}}}function me(n){let e,i;return e=new je({props:{project:n[10]}}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){z(e,t,s),i=!0},p:A,i(t){i||(y(e.$$.fragment,t),i=!0)},o(t){P(e.$$.fragment,t),i=!1},d(t){R(e,t)}}}function ve(n){let e,i;return e=new je({props:{project:n[10]}}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){z(e,t,s),i=!0},p:A,i(t){i||(y(e.$$.fragment,t),i=!0)},o(t){P(e.$$.fragment,t),i=!1},d(t){R(e,t)}}}function Je(n){let e,i,t,s,a,l,u,r="Projecten",c,o,m="Contributions",k,d,h,f,g,b,H;ee(n[7]),i=new ye({}),s=new Be({});const ne=[Re,ze],B=[];function se(j,C){return j[2]==="projects"?0:j[2]==="contributions"?1:-1}return~(h=se(n))&&(f=B[h]=ne[h](n)),{c(){e=S("div"),T(i.$$.fragment),t=N(),T(s.$$.fragment),a=N(),l=S("div"),u=S("button"),u.textContent=r,c=N(),o=S("button"),o.textContent=m,k=N(),d=S("div"),f&&f.c(),this.h()},l(j){e=w(j,"DIV",{id:!0,class:!0});var C=L(e);M(i.$$.fragment,C),t=V(C),M(s.$$.fragment,C),a=V(C),l=w(C,"DIV",{class:!0});var E=L(l);u=w(E,"BUTTON",{class:!0,["data-svelte-h"]:!0}),D(u)!=="svelte-4nslrg"&&(u.textContent=r),c=V(E),o=w(E,"BUTTON",{class:!0,["data-svelte-h"]:!0}),D(o)!=="svelte-zymqbn"&&(o.textContent=m),E.forEach(_),C.forEach(_),k=V(j),d=w(j,"DIV",{class:!0});var ie=L(d);f&&f.l(ie),ie.forEach(_),this.h()},h(){v(u,"class","svelte-1byawni"),X(u,"selected",n[2]==="projects"),v(o,"class","svelte-1byawni"),X(o,"selected",n[2]==="contributions"),v(l,"class","nav svelte-1byawni"),v(e,"id","sticky"),v(e,"class","svelte-1byawni"),v(d,"class","content svelte-1byawni")},m(j,C){q(j,e,C),z(i,e,null),$(e,t),z(s,e,null),$(e,a),$(e,l),$(l,u),$(l,c),$(l,o),q(j,k,C),q(j,d,C),~h&&B[h].m(d,null),g=!0,b||(H=[I(window,"resize",n[7]),I(u,"click",n[8]),I(o,"click",n[9])],b=!0)},p(j,[C]){(!g||C&4)&&X(u,"selected",j[2]==="projects"),(!g||C&4)&&X(o,"selected",j[2]==="contributions");let E=h;h=se(j),h===E?~h&&B[h].p(j,C):(f&&(Y(),P(B[E],1,1,()=>{B[E]=null}),Q()),~h?(f=B[h],f?f.p(j,C):(f=B[h]=ne[h](j),f.c()),y(f,1),f.m(d,null)):f=null)},i(j){g||(y(i.$$.fragment,j),y(s.$$.fragment,j),y(f),g=!0)},o(j){P(i.$$.fragment,j),P(s.$$.fragment,j),P(f),g=!1},d(j){j&&(_(e),_(k),_(d)),R(i),R(s),~h&&B[h].d(),b=!1,_e(H)}}}function Oe(n,e,i){let t,s;const a=[Ee,Ge,He,Ie],l=[Te,Me],u=Se("projects");$e(n,u,d=>i(2,s=d));const r=d=>{u.set("busy"),setTimeout(()=>u.set(d),100)};let c;function o(){i(0,c=window.innerWidth)}const m=()=>r("projects"),k=()=>r("contributions");return n.$$.update=()=>{n.$$.dirty&1&&i(1,t=c<700)},[c,t,s,a,l,u,r,o,m,k]}class Qe extends O{constructor(e){super(),U(this,e,Oe,Je,J,{})}}export{Qe as component};