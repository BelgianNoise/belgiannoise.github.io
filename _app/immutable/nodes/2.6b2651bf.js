import{s as Y,n as A,f as le,h as te,r as _e,i as re,j as ne,e as $e}from"../chunks/scheduler.f757e6e6.js";import{S as W,i as Q,g as S,s as M,m as B,h as w,j as L,y as I,c as V,n as G,f as k,k as h,a as N,x as _,o as X,d as y,p as x,t as H,b as K,z as se,r as J,u as O,v as F,w as U,A as R,B as Z,C as be,D as ke}from"../chunks/index.7ccba9ea.js";import{w as Se}from"../chunks/index.25baad96.js";function z(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function we(s){let e,l,t='<img src="./profile.png" alt="profile" class="svelte-ny7eou"/>',i,o,n,u,r,c,a,d,$='<img src="./suitcase.svg" alt="suitcase icon" class="svelte-ny7eou"/> <span>Software Engineer</span>',g,f,p='<img src="./email.svg" alt="email icon" class="svelte-ny7eou"/> <a type="email" href="mailto:arthur.joppart@gmail.com">arthur.joppart@gmail.com</a>',m,b,D='<img src="./location.svg" alt="location icon" class="svelte-ny7eou"/> <span>Leuven, België</span>';return{c(){e=S("div"),l=S("div"),l.innerHTML=t,i=M(),o=S("div"),n=S("span"),u=B("Arthur Joppart ("),r=B(s[0]),c=B(")"),a=M(),d=S("div"),d.innerHTML=$,g=M(),f=S("div"),f.innerHTML=p,m=M(),b=S("div"),b.innerHTML=D,this.h()},l(q){e=w(q,"DIV",{class:!0});var C=L(e);l=w(C,"DIV",{id:!0,class:!0,["data-svelte-h"]:!0}),I(l)!=="svelte-15g9qv6"&&(l.innerHTML=t),i=V(C),o=w(C,"DIV",{class:!0});var T=L(o);n=w(T,"SPAN",{id:!0,class:!0});var j=L(n);u=G(j,"Arthur Joppart ("),r=G(j,s[0]),c=G(j,")"),j.forEach(k),a=V(T),d=w(T,"DIV",{class:!0,["data-svelte-h"]:!0}),I(d)!=="svelte-10b6n8z"&&(d.innerHTML=$),g=V(T),f=w(T,"DIV",{class:!0,["data-svelte-h"]:!0}),I(f)!=="svelte-1elyseq"&&(f.innerHTML=p),m=V(T),b=w(T,"DIV",{class:!0,["data-svelte-h"]:!0}),I(b)!=="svelte-vtkv4s"&&(b.innerHTML=D),T.forEach(k),C.forEach(k),this.h()},h(){h(l,"id","profile-picture"),h(l,"class","svelte-ny7eou"),h(n,"id","name"),h(n,"class","svelte-ny7eou"),h(d,"class","svelte-ny7eou"),h(f,"class","svelte-ny7eou"),h(b,"class","svelte-ny7eou"),h(o,"class","information svelte-ny7eou"),h(e,"class","profile svelte-ny7eou")},m(q,C){N(q,e,C),_(e,l),_(e,i),_(e,o),_(o,n),_(n,u),_(n,r),_(n,c),_(o,a),_(o,d),_(o,g),_(o,f),_(o,m),_(o,b)},p(q,[C]){C&1&&X(r,q[0])},i:A,o:A,d(q){q&&k(e)}}}function ye(s,e,l){let t;return l(0,t=(o=>{const n=new Date;let u=n.getFullYear()-o.getFullYear();return(n.getMonth()<o.getMonth()||n.getMonth()===o.getMonth()&&n.getDate()<o.getDate())&&u--,u})(new Date("1998-10-09"))),[t]}class Ce extends W{constructor(e){super(),Q(this,e,ye,we,Y,{})}}function Le(s){let e,l,t;return{c(){e=S("span"),l=B(s[0]),this.h()},l(i){e=w(i,"SPAN",{class:!0});var o=L(e);l=G(o,s[0]),o.forEach(k),this.h()},h(){h(e,"class",t=le(s[0].toString().toLowerCase())+" svelte-6ojdc4")},m(i,o){N(i,e,o),_(e,l)},p(i,[o]){o&1&&X(l,i[0]),o&1&&t!==(t=le(i[0].toString().toLowerCase())+" svelte-6ojdc4")&&h(e,"class",t)},i:A,o:A,d(i){i&&k(e)}}}function Pe(s,e,l){let{tag:t}=e;return s.$$set=i=>{"tag"in i&&l(0,t=i.tag)},[t]}let Me=class extends W{constructor(e){super(),Q(this,e,Pe,Le,Y,{tag:0})}};function oe(s,e,l){const t=s.slice();return t[1]=e[l],t}function ae(s){let e,l;return{c(){e=S("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){te(e.src,l=s[0].images[0])||h(e,"src",l),h(e,"alt","screenshot of the project"),h(e,"class","svelte-jo8eqt")},m(t,i){N(t,e,i)},p(t,i){i&1&&!te(e.src,l=t[0].images[0])&&h(e,"src",l)},d(t){t&&k(e)}}}function ce(s){let e,l,t,i,o,n=s[0].link+"",u,r;return{c(){e=S("div"),l=S("img"),i=M(),o=S("a"),u=B(n),this.h()},l(c){e=w(c,"DIV",{class:!0});var a=L(e);l=w(a,"IMG",{src:!0,alt:!0,class:!0}),i=V(a),o=w(a,"A",{href:!0,target:!0,class:!0});var d=L(o);u=G(d,n),d.forEach(k),a.forEach(k),this.h()},h(){te(l.src,t="./link.svg")||h(l,"src",t),h(l,"alt","link icon"),h(l,"class","svelte-jo8eqt"),h(o,"href",r=s[0].link),h(o,"target","_blank"),h(o,"class","svelte-jo8eqt"),h(e,"class","link-container svelte-jo8eqt")},m(c,a){N(c,e,a),_(e,l),_(e,i),_(e,o),_(o,u)},p(c,a){a&1&&n!==(n=c[0].link+"")&&X(u,n),a&1&&r!==(r=c[0].link)&&h(o,"href",r)},d(c){c&&k(e)}}}function ue(s){let e,l,t=z(s[0].tags),i=[];for(let n=0;n<t.length;n+=1)i[n]=fe(oe(s,t,n));const o=n=>H(i[n],1,1,()=>{i[n]=null});return{c(){e=S("div");for(let n=0;n<i.length;n+=1)i[n].c();this.h()},l(n){e=w(n,"DIV",{class:!0});var u=L(e);for(let r=0;r<i.length;r+=1)i[r].l(u);u.forEach(k),this.h()},h(){h(e,"class","tags svelte-jo8eqt")},m(n,u){N(n,e,u);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(e,null);l=!0},p(n,u){if(u&1){t=z(n[0].tags);let r;for(r=0;r<t.length;r+=1){const c=oe(n,t,r);i[r]?(i[r].p(c,u),y(i[r],1)):(i[r]=fe(c),i[r].c(),y(i[r],1),i[r].m(e,null))}for(x(),r=t.length;r<i.length;r+=1)o(r);K()}},i(n){if(!l){for(let u=0;u<t.length;u+=1)y(i[u]);l=!0}},o(n){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)H(i[u]);l=!1},d(n){n&&k(e),se(i,n)}}}function fe(s){let e,l;return e=new Me({props:{tag:s[1]}}),{c(){J(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,i){F(e,t,i),l=!0},p(t,i){const o={};i&1&&(o.tag=t[1]),e.$set(o)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){H(e.$$.fragment,t),l=!1},d(t){U(e,t)}}}function de(s){let e,l=s[0].description+"",t;return{c(){e=S("p"),t=B(l),this.h()},l(i){e=w(i,"P",{class:!0});var o=L(e);t=G(o,l),o.forEach(k),this.h()},h(){h(e,"class","description svelte-jo8eqt")},m(i,o){N(i,e,o),_(e,t)},p(i,o){o&1&&l!==(l=i[0].description+"")&&X(t,l)},d(i){i&&k(e)}}}function he(s){let e,l,t;return{c(){e=S("a"),l=B("Voor meer info, bekijk op Github ->"),this.h()},l(i){e=w(i,"A",{href:!0,target:!0,rel:!0});var o=L(e);l=G(o,"Voor meer info, bekijk op Github ->"),o.forEach(k),this.h()},h(){h(e,"href",t=s[0].github),h(e,"target","_blank"),h(e,"rel","noreferrer noopener")},m(i,o){N(i,e,o),_(e,l)},p(i,o){o&1&&t!==(t=i[0].github)&&h(e,"href",t)},d(i){i&&k(e)}}}function Ve(s){let e,l,t=s[0].title+"",i,o,n,u,r,c,a,d=s[0].images.length>0&&ae(s),$=s[0].link&&ce(s),g=s[0].tags.length>0&&ue(s),f=s[0].description&&de(s),p=s[0].github&&he(s);return{c(){e=S("div"),l=S("h2"),i=B(t),o=M(),d&&d.c(),n=M(),$&&$.c(),u=M(),g&&g.c(),r=M(),f&&f.c(),c=M(),p&&p.c(),this.h()},l(m){e=w(m,"DIV",{class:!0});var b=L(e);l=w(b,"H2",{class:!0});var D=L(l);i=G(D,t),D.forEach(k),o=V(b),d&&d.l(b),n=V(b),$&&$.l(b),u=V(b),g&&g.l(b),r=V(b),f&&f.l(b),c=V(b),p&&p.l(b),b.forEach(k),this.h()},h(){h(l,"class","svelte-jo8eqt"),h(e,"class","container svelte-jo8eqt")},m(m,b){N(m,e,b),_(e,l),_(l,i),_(e,o),d&&d.m(e,null),_(e,n),$&&$.m(e,null),_(e,u),g&&g.m(e,null),_(e,r),f&&f.m(e,null),_(e,c),p&&p.m(e,null),a=!0},p(m,[b]){(!a||b&1)&&t!==(t=m[0].title+"")&&X(i,t),m[0].images.length>0?d?d.p(m,b):(d=ae(m),d.c(),d.m(e,n)):d&&(d.d(1),d=null),m[0].link?$?$.p(m,b):($=ce(m),$.c(),$.m(e,u)):$&&($.d(1),$=null),m[0].tags.length>0?g?(g.p(m,b),b&1&&y(g,1)):(g=ue(m),g.c(),y(g,1),g.m(e,r)):g&&(x(),H(g,1,1,()=>{g=null}),K()),m[0].description?f?f.p(m,b):(f=de(m),f.c(),f.m(e,c)):f&&(f.d(1),f=null),m[0].github?p?p.p(m,b):(p=he(m),p.c(),p.m(e,null)):p&&(p.d(1),p=null)},i(m){a||(y(g),a=!0)},o(m){H(g),a=!1},d(m){m&&k(e),d&&d.d(),$&&$.d(),g&&g.d(),f&&f.d(),p&&p.d()}}}function He(s,e,l){let{project:t}=e;return s.$$set=i=>{"project"in i&&l(0,t=i.project)},[t]}class je extends W{constructor(e){super(),Q(this,e,He,Ve,Y,{project:0})}}function Ne(s){let e,l,t='<span class="svelte-jxmi5d">Github</span> <img src="./github.png" alt="github logo" class="svelte-jxmi5d"/>',i,o,n='<span class="svelte-jxmi5d">LinkedIn</span> <img src="./linkedin.png" alt="linkedin logo" class="svelte-jxmi5d"/>',u,r;return{c(){e=S("div"),l=S("button"),l.innerHTML=t,i=M(),o=S("button"),o.innerHTML=n,this.h()},l(c){e=w(c,"DIV",{class:!0});var a=L(e);l=w(a,"BUTTON",{class:!0,["data-svelte-h"]:!0}),I(l)!=="svelte-vqxpg2"&&(l.innerHTML=t),i=V(a),o=w(a,"BUTTON",{class:!0,["data-svelte-h"]:!0}),I(o)!=="svelte-sx48nz"&&(o.innerHTML=n),a.forEach(k),this.h()},h(){h(l,"class","github-button svelte-jxmi5d"),h(o,"class","linkedin-button svelte-jxmi5d"),h(e,"class","socials svelte-jxmi5d")},m(c,a){N(c,e,a),_(e,l),_(e,i),_(e,o),u||(r=[R(l,"click",s[0]),R(o,"click",s[1])],u=!0)},p:A,i:A,o:A,d(c){c&&k(e),u=!1,_e(r)}}}function Te(s){return[()=>window.open("https://github.com/BelgianNoise","_blank"),()=>window.open("https://www.linkedin.com/in/arthur-joppart-728a7817a/","_blank")]}class qe extends W{constructor(e){super(),Q(this,e,Te,Ne,Y,{})}}var v=(s=>(s.TS="TypeScript",s.JS="JavaScript",s.React="React",s.Redux="Redux",s.Node="Node",s.Firebase="Firebase",s.PostgreSQL="PostgreSQL",s.NestJS="NestJS",s.ChartJS="ChartJS",s.Lit="Lit",s.XState="XState",s.Vite="Vite",s.HTML="HTML",s.Svelte="Svelte",s.GO="GO",s.CSS="CSS",s.GCP="GCP",s.GithubActions="Github Actions",s.Vercel="Vercel",s.Redis="Redis",s))(v||{});const Ae={title:"YABAT",description:`YABAT is een web applicatie die het makkelijk maakt een logboek van inkomsten
    en uitgaven bij te houden. Je kan ook maandelijkse uitgaven en inkomsten vergelijken
    opgedeeld per categorie.`,tags:[v.TS,v.Firebase,v.XState,v.Lit,v.ChartJS,v.Vite,v.Node,v.HTML,v.CSS],link:"https://yabat.be",images:["./screenshots/yabat/logo.png","./screenshots/yabat/home.png","./screenshots/yabat/overview.png","./screenshots/yabat/distribution.png","./screenshots/yabat/compare.png"],github:"https://github.com/BelgianNoise/YABAT"},De={title:"Plex Content Request",description:`Een website waarop gebruikers films en series kunnen aanvragen die ze graag
    zouden willen zien op mijn Plex server. De website ondersteunt routing, authenticatie,
    authorisatie, en i18n.`,tags:[v.React,v.Redux,v.TS,v.Firebase,v.Node,v.HTML,v.CSS],link:"https://nasaj.be",images:["./screenshots/content-request/logo.png","./screenshots/content-request/home.png","./screenshots/content-request/overview.png","./screenshots/content-request/login.png"],github:"https://github.com/BelgianNoise/react-plex-content-request"},Ee={title:"Colruyt Product Scraper",description:`Een tool geschreven in Go om alle producten van Colruyt
  op te halen via hun API om daarna een overzicht te kunnen maken van alle
  prijsveranderingen. Optimaal komt hier later nog een website bij om de prijs
  geschiedenis van een product te kunnen bekijken, en worden er wekelijks mails
  verstuurd met de interessantste prijsveranderingen.`,tags:[v.GO,v.PostgreSQL,v.GCP,v.GithubActions],link:void 0,images:["./screenshots/colruyt-product-scraper/logo.png"],github:"https://github.com/BelgianNoise/colruyt-products-scraper"},Ie={title:"Waar Streamen",description:`Een website waarop een gebruiker kan zoeken op welk streaming
  platform een bepaalde film of serie beschikbaar is. De website ondersteunt
  grote platformen van België en de grote wereldwijde platformen. De data wordt
  opgehaald via gebruik van APIs en web scraping.`,tags:[v.Svelte,v.TS,v.Node,v.Vercel,v.GCP,v.GithubActions,v.HTML,v.CSS],link:"https://waar-streamen.nasaj.be",images:["./screenshots/waar-streamen/logo.png"],github:"https://github.com/BelgianNoise/waar-streamen"},Be={title:"My Portfolio",description:"Mijn portfolio, de huidige website :).",tags:[v.Svelte,v.TS,v.Node,v.CSS,v.HTML],link:"https://belgiannoise.github.io/",images:[],github:"https://github.com/BelgianNoise/belgiannoise.github.io"};function Ge(s){const e=s-1;return e*e*e+1}function ee(s,{delay:e=0,duration:l=400,easing:t=Ge,x:i=0,y:o=0,opacity:n=0}={}){const u=getComputedStyle(s),r=+u.opacity,c=u.transform==="none"?"":u.transform,a=r*(1-n),[d,$]=re(i),[g,f]=re(o);return{delay:e,duration:l,easing:t,css:(p,m)=>`
			transform: ${c} translate(${(1-p)*d}${$}, ${(1-p)*g}${f});
			opacity: ${r-a*m}`}}const ze={title:"Community Solid Server",description:`Deze open source Solid server heb ik onder andere voorzien
  van een Redis based read-write locker en een robust data
  storage quota systeem.`,tags:[v.TS,v.Node,v.Redis],images:["./screenshots/css/logo.png"],link:"https://github.com/CommunitySolidServer/CommunitySolidServer",github:void 0},Re={title:"Handlers.js",description:`Handlers.js is een open source framework om modulaire HTTP
  servers te bouwen. Ik ben/was dicht betrokken bij het design, 
  de ontwikkeling en het onderhoud van dit project.`,tags:[v.TS,v.Node],images:[],link:"https://github.com/digita-ai/handlersjs",github:void 0};function ge(s,e,l){const t=s.slice();return t[10]=e[l],t}function pe(s,e,l){const t=s.slice();return t[10]=e[l],t}function Je(s){let e,l,t,i,o=z(s[4]),n=[];for(let r=0;r<o.length;r+=1)n[r]=ve(ge(s,o,r));const u=r=>H(n[r],1,1,()=>{n[r]=null});return{c(){e=S("div");for(let r=0;r<n.length;r+=1)n[r].c()},l(r){e=w(r,"DIV",{});var c=L(e);for(let a=0;a<n.length;a+=1)n[a].l(c);c.forEach(k)},m(r,c){N(r,e,c);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null);i=!0},p(r,c){if(c&16){o=z(r[4]);let a;for(a=0;a<o.length;a+=1){const d=ge(r,o,a);n[a]?(n[a].p(d,c),y(n[a],1)):(n[a]=ve(d),n[a].c(),y(n[a],1),n[a].m(e,null))}for(x(),a=o.length;a<n.length;a+=1)u(a);K()}},i(r){if(!i){for(let c=0;c<o.length;c+=1)y(n[c]);r&&ne(()=>{i&&(t&&t.end(1),l=be(e,ee,{x:"100%",duration:100}),l.start())}),i=!0}},o(r){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)H(n[c]);l&&l.invalidate(),r&&(t=ke(e,ee,{x:"100%",duration:100})),i=!1},d(r){r&&k(e),se(n,r),r&&t&&t.end()}}}function Oe(s){let e,l,t,i,o=z(s[3]),n=[];for(let r=0;r<o.length;r+=1)n[r]=me(pe(s,o,r));const u=r=>H(n[r],1,1,()=>{n[r]=null});return{c(){e=S("div");for(let r=0;r<n.length;r+=1)n[r].c()},l(r){e=w(r,"DIV",{});var c=L(e);for(let a=0;a<n.length;a+=1)n[a].l(c);c.forEach(k)},m(r,c){N(r,e,c);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null);i=!0},p(r,c){if(s=r,c&8){o=z(s[3]);let a;for(a=0;a<o.length;a+=1){const d=pe(s,o,a);n[a]?(n[a].p(d,c),y(n[a],1)):(n[a]=me(d),n[a].c(),y(n[a],1),n[a].m(e,null))}for(x(),a=o.length;a<n.length;a+=1)u(a);K()}},i(r){if(!i){for(let c=0;c<o.length;c+=1)y(n[c]);r&&ne(()=>{i&&(t&&t.end(1),l=be(e,ee,s[1]?{x:"-100%",duration:100}:{x:"100%",duration:100}),l.start())}),i=!0}},o(r){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)H(n[c]);l&&l.invalidate(),r&&(t=ke(e,ee,s[1]?{x:"-100%",duration:100}:{x:"100%",duration:100})),i=!1},d(r){r&&k(e),se(n,r),r&&t&&t.end()}}}function ve(s){let e,l;return e=new je({props:{project:s[10]}}),{c(){J(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,i){F(e,t,i),l=!0},p:A,i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){H(e.$$.fragment,t),l=!1},d(t){U(e,t)}}}function me(s){let e,l;return e=new je({props:{project:s[10]}}),{c(){J(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,i){F(e,t,i),l=!0},p:A,i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){H(e.$$.fragment,t),l=!1},d(t){U(e,t)}}}function Fe(s){let e,l,t,i,o,n,u,r="Projecten",c,a,d="Contributions",$,g,f,p,m,b,D;ne(s[7]),l=new Ce({}),i=new qe({});const q=[Oe,Je],C=[];function T(j,P){return j[2]==="projects"?0:j[2]==="contributions"?1:-1}return~(f=T(s))&&(p=C[f]=q[f](s)),{c(){e=S("div"),J(l.$$.fragment),t=M(),J(i.$$.fragment),o=M(),n=S("div"),u=S("button"),u.textContent=r,c=M(),a=S("button"),a.textContent=d,$=M(),g=S("div"),p&&p.c(),this.h()},l(j){e=w(j,"DIV",{id:!0,class:!0});var P=L(e);O(l.$$.fragment,P),t=V(P),O(i.$$.fragment,P),o=V(P),n=w(P,"DIV",{class:!0});var E=L(n);u=w(E,"BUTTON",{class:!0,["data-svelte-h"]:!0}),I(u)!=="svelte-4nslrg"&&(u.textContent=r),c=V(E),a=w(E,"BUTTON",{class:!0,["data-svelte-h"]:!0}),I(a)!=="svelte-zymqbn"&&(a.textContent=d),E.forEach(k),P.forEach(k),$=V(j),g=w(j,"DIV",{class:!0});var ie=L(g);p&&p.l(ie),ie.forEach(k),this.h()},h(){h(u,"class","svelte-1byawni"),Z(u,"selected",s[2]==="projects"),h(a,"class","svelte-1byawni"),Z(a,"selected",s[2]==="contributions"),h(n,"class","nav svelte-1byawni"),h(e,"id","sticky"),h(e,"class","svelte-1byawni"),h(g,"class","content svelte-1byawni")},m(j,P){N(j,e,P),F(l,e,null),_(e,t),F(i,e,null),_(e,o),_(e,n),_(n,u),_(n,c),_(n,a),N(j,$,P),N(j,g,P),~f&&C[f].m(g,null),m=!0,b||(D=[R(window,"resize",s[7]),R(u,"click",s[8]),R(a,"click",s[9])],b=!0)},p(j,[P]){(!m||P&4)&&Z(u,"selected",j[2]==="projects"),(!m||P&4)&&Z(a,"selected",j[2]==="contributions");let E=f;f=T(j),f===E?~f&&C[f].p(j,P):(p&&(x(),H(C[E],1,1,()=>{C[E]=null}),K()),~f?(p=C[f],p?p.p(j,P):(p=C[f]=q[f](j),p.c()),y(p,1),p.m(g,null)):p=null)},i(j){m||(y(l.$$.fragment,j),y(i.$$.fragment,j),y(p),m=!0)},o(j){H(l.$$.fragment,j),H(i.$$.fragment,j),H(p),m=!1},d(j){j&&(k(e),k($),k(g)),U(l),U(i),~f&&C[f].d(),b=!1,_e(D)}}}function Ue(s,e,l){let t,i;const o=[Ae,De,Ee,Ie,Be],n=[ze,Re],u=Se("projects");$e(s,u,g=>l(2,i=g));const r=g=>{u.set("busy"),setTimeout(()=>u.set(g),100)};let c;function a(){l(0,c=window.innerWidth)}const d=()=>r("projects"),$=()=>r("contributions");return s.$$.update=()=>{s.$$.dirty&1&&l(1,t=c<700)},[c,t,i,o,n,u,r,a,d,$]}class xe extends W{constructor(e){super(),Q(this,e,Ue,Fe,Y,{})}}export{xe as component};
