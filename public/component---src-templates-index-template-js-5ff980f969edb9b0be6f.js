/*! For license information please see component---src-templates-index-template-js-5ff980f969edb9b0be6f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"999l":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),i=t.n(n),l=t("Zttt"),_=t("gGy4"),s=t("TSYQ"),r=t.n(s),d=t("LC6O"),c=t.n(d),o=t("7Qib"),m=t("Ys8a"),u=function(e){var a=e.navItems,t=e.animateLinksIn;return a.length?i.a.createElement("ul",{className:c.a.NavList},a.map((function(e,a){var n,l=e.label,_=e.path,s="animate__fadeInDown animate__animated animate__delay-"+(a-1)+"s";return i.a.createElement("li",{key:l,className:r()(c.a.NavList__item,(n={},n[s]=t,n))},i.a.createElement("a",{className:c.a.NavList__link,href:_},i.a.createElement(m.a,{name:"caret",icon:Object(o.b)("caretRight"),width:"11",height:"13",fill:"none",className:c.a.NavList__link__icon}),l))}))):null},g=i.a.createContext(),p={isMobileMenuOpen:!1,isSkillDetailOpen:!1,isStintDetailOpen:!1};function h(e,a){return Object.assign({},e,a)}function f(e){var a=e.children,t=i.a.useReducer(h,p),n={state:t[0],dispatch:t[1]};return i.a.createElement(g.Provider,{value:n},a)}function b(){var e=i.a.useContext(g);if(void 0===e)throw new Error("useLanding must be used within a LandingProvider");return[e.state,e.dispatch]}var S=function(e){var a,t,n=e.animateLinksIn,l=Object(_.d)(),s=l.menu,d=l.author.resumeUrl,g=b(),p=g[0].isMobileMenuOpen,h=g[1];return i.a.createElement("section",{className:c.a.landing__header},i.a.createElement(m.a,{name:"caret",icon:Object(o.b)("logo"),width:"59",height:"40",fill:"none",className:r()([c.a.landing__logo,"animate__fadeIn animate__animated animate__delay-2s"])}),i.a.createElement("section",{className:r()(c.a.landing__nav__container)},i.a.createElement(u,{navItems:s,animateLinksIn:n}),i.a.createElement("a",{href:d,target:"_blank",className:"btn-primary animate__fadeInDown animate__animated animate__delay-5s"},"My Resume")),i.a.createElement("button",{"aria-label":"menu",onClick:function(){return h({isMobileMenuOpen:!p})},className:c.a.Hamburger__button},i.a.createElement("span",{className:r()([c.a.Hamburger,(a={},a[c.a.Hamburger__closed]=p,a)])},i.a.createElement("span",{className:c.a.Hamburger__inner}))),i.a.createElement("aside",{"aria-hidden":"false",tabIndex:"1",className:r()([c.a.MobileMenu,(t={},t[c.a.MobileMenu__open]=p,t)])},i.a.createElement("nav",null,i.a.createElement("ol",null,s.map((function(e){var a=e.label,t=e.path;return i.a.createElement("li",{key:t},i.a.createElement("a",{href:t},a))}))),i.a.createElement("a",{href:d,target:"_blank",className:"btn-primary animate__fadeInDown animate__animated animate__delay-5s"},"My Resume"))))},E=function(e){e.children;var a=Object(n.useRef)(),t=Object(_.c)(a,{freezeOnceVisible:!0}),l=!(null==t||!t.isIntersecting);return i.a.createElement("section",{className:c.a.Hero},i.a.createElement(S,{animateLinksIn:l}),i.a.createElement("section",{className:r()([c.a.container]),ref:a},i.a.createElement("p",{className:r()([c.a.Hero__text,{"animate__fadeInUp animate__animated animate__delay-4s":l}])},"Hello pardner,"),i.a.createElement("hgroup",{className:c.a.Hero__headingGroup},i.a.createElement("h1",{className:r()([c.a.Hero__title,{"animate__fadeInUp animate__animated animate__delay-5s":l}])},"I’m Caleb Mathew."),i.a.createElement("h2",{className:r()([c.a.Hero__subtitle,{"animate__fadeInUp animate__animated animate__delay-5s":l}])},"I help improve mankind’s greatest invention.")),i.a.createElement("p",{className:r()([c.a.Hero__intro,{"animate__fadeInUp animate__animated animate__delay-5s":l}])},"I’m a software engineer that enjoys designing and building helpful products. My current adventure is building financial products at"," ",i.a.createElement("a",{className:"with-underline",href:"https://kudi.ai"},"Kudi")),i.a.createElement("a",{href:"/articles",className:"btn-primary btn-primary--xxl animate__fadeInUp animate__animated animate__delay-5s"},"See my articles")))},k=function(e){e.children;var a=Object(n.useRef)(),t=Object(_.c)(a,{freezeOnceVisible:!0}),l=!(null==t||!t.isIntersecting);return i.a.createElement("section",{className:r()(c.a.About),ref:a,id:"about"},i.a.createElement("section",{className:r()([c.a.container,c.a["container--fullHeight"]])},i.a.createElement("div",{className:c.a.landing__About},i.a.createElement("section",null,i.a.createElement("h1",{className:r()([c.a.About__title,{"animate__fadeInUp animate__animated":l}]),"data-label":"01."},"About me"),i.a.createElement("p",{className:r()([c.a.About__intro,{"animate__fadeInUp animate__animated animate__delay-1s":l}])},"I’m Caleb (sometimes referred to as Kay) and I enjoy solving problems through code and design. I took an interest in web development in the aftermath of interest in gaming and the first moment I made Sonic run on my little 65k color Nokia mobile browser way back in early 2008 was magical for me."),i.a.createElement("p",{className:r()([c.a.About__intro,{"animate__fadeInUp animate__animated animate__delay-1s":l}])},"Over the last couple of years, I've had the good fortune of working on a variety of interesting projects, from building terminal management systems for POS devices to onboarding software for the military. My main focus these days is building products that help us solve more problems for financially underrepresented people at Kudi."," "),i.a.createElement("p",{className:r()([c.a.About__intro,{"animate__fadeInUp animate__animated animate__delay-2s":l}])},"Recently, I've taken a keener interest in sharing my knowledge and you really should"," ",i.a.createElement("a",{className:"with-underline",href:"/articles"},"read my blog")," ","where I write about React and Node.js.")))))},v=t("faXO"),y=t.n(v),N=function(e){var a,t=e.label,n=e.slug,l=e.selected,_=e.onSelectEntry,s=e.idx,d=e.animateCard,c=e.children,o="animate__fadeInUp animate__animated animate__delay-"+s+"s";return i.a.createElement("div",null,i.a.createElement("input",{type:"radio",id:"entry-"+n,checked:l,onChange:function(){return _(e)},className:r()(y.a.EntryCard__radio)}),i.a.createElement("label",{htmlFor:"entry-"+n,className:r()(y.a.EntryCard,(a={},a[o]=d,a))},i.a.createElement("section",null,i.a.createElement("h4",{className:r()(y.a.EntryCard__title)},t),i.a.createElement("a",{className:r()([y.a.EntryCard__link,"with-underline"]),href:"#"},"Read more")),c))},L=function(e){var a=e.items,t=e.children;return null!=a&&a.length?i.a.createElement("section",{className:y.a.Entries},a.map((function(e){var a=e.label;return i.a.createElement(N,{label:a})}))):i.a.createElement("section",{className:y.a.Entries},t)},O=function(e){var a,t,l,s,d,o=e.slug,m=e.selectedSkill,u=e.idx,g=e.label,p=e.title,h=e.description,f=Object(n.useRef)(),S=b(),E=S[0].isSkillDetailOpen,k=S[1],v=Object(_.c)(f,{freezeOnceVisible:!0}),y=!(null==v||!v.isIntersecting),N="animate__fadeInUp animate__animated";return i.a.createElement("section",{className:r()([c.a.Skills__detail,c.a["Skills__detail__"+o],(a={},a[c.a.Skills__detailSelected]=m===o,a)]),style:{left:100*u+"%"}},i.a.createElement("button",{"aria-label":"menu",onClick:function(){return k({isSkillDetailOpen:!E})},className:c.a.Hamburger__button},i.a.createElement("span",{className:r()([c.a.Hamburger,(t={},t[c.a.Hamburger__closed]=E,t)])},i.a.createElement("span",{className:c.a.Hamburger__inner}))),i.a.createElement("div",{className:r()([c.a.Skills__stuff]),ref:f},i.a.createElement("p",{className:r()(c.a.Skills__detail__subtitle,(l={},l[N]=y,l))},"About ",g),i.a.createElement("h2",{className:r()([c.a.Skills__detail__title,(s={},s[N]=y,s)])},p),i.a.createElement("p",{className:r()([c.a.Skills__detail__desc,(d={},d[N]=y,d)])},h)))},I=function(e){e.children;var a,t=Object(n.useState)({skill:"javascript",idx:0}),l=t[0],s=t[1],d=b(),u=d[0].isSkillDetailOpen,g=d[1],p=Object(_.d)().skills,h=Object(n.useRef)(),f=Object(_.c)(h,{freezeOnceVisible:!0}),S=!(null==f||!f.isIntersecting);return i.a.createElement("section",{className:r()(c.a.Skills),id:"skills"},i.a.createElement("div",{className:c.a.Skills__list},i.a.createElement("section",{className:c.a.Skills__list__inner,ref:h},i.a.createElement("h1",{className:r()([c.a.Skills__title,{"animate__fadeInUp animate__animated":S}]),"data-label":"02."},"Skills."),i.a.createElement(L,null,p.map((function(e,a){var t=e.label,n=e.slug;return i.a.createElement(N,{selected:l.skill===n,onSelectEntry:function(){g({isSkillDetailOpen:!0}),s({skill:n,idx:a})},animateCard:S,idx:a,key:n,label:t,slug:n},"rust"===n?i.a.createElement(m.a,{name:"caret",icon:Object(o.b)("rustLogo"),width:"64",height:"64",className:c.a.NavList__link__icon}):i.a.createElement("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/"+n+"/"+n+"-original.svg",width:"64"}))}))))),i.a.createElement("div",{className:r()([c.a.Skills__details,(a={},a[c.a.Skills__details__open]=u,a)])},i.a.createElement("section",{className:r()([c.a.Skills__wrapper]),style:{height:"100%",width:100*p.length+"%",transform:"translateX(-"+100*l.idx+"%)",transition:"transform 1s ease"}},p.map((function(e,a){var t=e.label,n=e.title,_=e.description,s=e.slug;return i.a.createElement(O,{key:s,slug:s,selectedSkill:l.skill,idx:a,label:t,title:n,description:_})})))))},w=function(e){var a,t,l,s,d,u,g=e.slug,p=e.selected,h=e.idx,f=e.label,S=e.epoch,E=e.designation,k=e.highlights,v=Object(n.useRef)(),y=Object(_.c)(v,{freezeOnceVisible:!0}),N=!(null==y||!y.isIntersecting),L="animate__fadeInUp animate__animated",O=b(),I=O[0].isStintDetailOpen,w=O[1];return i.a.createElement("section",{className:r()([c.a.Stints__detail,c.a["Stints__detail__"+g],(a={},a[c.a.Stints__detailSelected]=p,a)]),style:{left:100*h+"%"}},i.a.createElement("button",{"aria-label":"menu",onClick:function(){return w({isStintDetailOpen:!I})},className:c.a.Hamburger__button},i.a.createElement("span",{className:r()([c.a.Hamburger,(t={},t[c.a.Hamburger__closed]=I,t)])},i.a.createElement("span",{className:c.a.Hamburger__inner}))),i.a.createElement("div",{className:r()([c.a.Stints__stuff]),ref:v},i.a.createElement("hgroup",null,i.a.createElement("h2",{className:r()([c.a.Stints__detail__title,(l={},l[L]=N,l)])},f),i.a.createElement("h3",{className:r()([c.a.Stints__detail__desc,(s={},s[L]=N,s)])},E)),i.a.createElement("time",{className:r()([c.a.Stints__detail__epoch],(d={},d[L+" animate__delay-1s"]=N,d))},S),k.length?i.a.createElement("ul",{className:r()([c.a.Stints__detail__highlights,(u={},u[L]=N,u)])},k.map((function(e,a){var t;return i.a.createElement("li",{key:e,className:r()([c.a.Stints__detail__highlight,(t={},t[L+" animate__delay-"+(a+1)+"s"]=N,t)])},i.a.createElement(m.a,{name:"caret",icon:Object(o.b)("caretRight"),width:"24.42",height:"16",fill:"none",className:r()([c.a.Stints__detail__highlight__icon])}),e)}))):null))},j=function(e){e.children;var a,t=Object(n.useState)({stint:"kudi",idx:0}),l=t[0],s=t[1],d=b(),o=d[0].isStintDetailOpen,m=d[1],u=Object(_.d)().stints,g=Object(n.useRef)(),p=Object(_.c)(g,{freezeOnceVisible:!0}),h=!(null==p||!p.isIntersecting);return i.a.createElement("section",{className:r()(c.a.Stints),id:"experience"},i.a.createElement("div",{className:r()([c.a.Stints__details,(a={},a[c.a.Skills__details__open]=o,a)])},i.a.createElement("section",{className:r()([c.a.Stints__wrapper]),style:{height:"100%",width:100*u.length+"%",transform:"translateX(-"+100*l.idx+"%)",transition:"transform 1s ease"}},u.map((function(e,a){var t=e.label,n=e.epoch,_=e.designation,s=e.slug,r=e.highlights;return i.a.createElement(w,{key:s,slug:s,selectedSkill:l.skill,idx:a,label:t,highlights:r,epoch:n,designation:_})})))),i.a.createElement("div",{className:c.a.Stints__list},i.a.createElement("section",{className:c.a.Stints__list__inner,ref:g},i.a.createElement("h1",{className:r()([c.a.Stints__title,{"animate__fadeInUp animate__animated":h}]),"data-label":"03."},"Experience."),i.a.createElement(L,null,u.map((function(e,a){var t=e.label,n=e.slug;return i.a.createElement(N,{selected:l.stint===n,onSelectEntry:function(){m({isStintDetailOpen:!0}),s({stint:n,idx:a})},animateCard:h,idx:a,label:t,key:n,slug:n},i.a.createElement("img",{src:"/media/"+n+".png",className:c.a.Stints__icon}))}))))))},C=function(e){e.children;var a=Object(_.d)().author.contacts,t=a.email,l=a.twitter,s=Object(n.useRef)(),d=Object(_.c)(s,{freezeOnceVisible:!0}),u=!(null==d||!d.isIntersecting);return i.a.createElement("section",{className:r()(c.a.Contact),ref:s,id:"contact"},i.a.createElement("section",{className:r()([c.a.container,c.a["container--fullHeight"]])},i.a.createElement("div",{className:c.a.landing__Contact},i.a.createElement("section",null,i.a.createElement("h1",{className:r()([c.a.Contact__title,{"animate__fadeInUp animate__animated":u}]),"data-label":"04."},"Let's chat."),i.a.createElement("p",{className:r()([c.a.Contact__intro,{"animate__fadeInUp animate__animated animate__delay-1s":u}])},"Got a question or proposal for me? Let’s get in touch! I have a personal rule of returning responses within a 3-hour window."),i.a.createElement("p",{className:r()([c.a.Contact__intro,{"animate__fadeInUp animate__animated animate__delay-2s":u}])},"Start by"," ",i.a.createElement("a",{className:"with-underline",href:"mailto:"+t},"saying hi")," "),i.a.createElement("section",{className:c.a.Contact__footer},i.a.createElement("a",{href:"https://twitter.com/"+l,className:r()([c.a.Contact__footer__link])},i.a.createElement(m.a,{name:"twitter",icon:Object(o.b)("twitter")}),i.a.createElement("span",{className:r()(["with-underline","ml-5"])},"twitter.com/",l)),i.a.createElement("p",null,"Designed & developed by Kay Mathew"))))))},H=function(){var e,a=b(),t=a[0].isMobileMenuOpen,n=a[1];return i.a.createElement("section",{className:c.a.landing},i.a.createElement(E,null),i.a.createElement(k,null),i.a.createElement(I,null),i.a.createElement(j,null),i.a.createElement(C,null),i.a.createElement("div",{className:r()([c.a.landing__overlay,(e={},e[c.a.landing__overlay__open]=t,e)]),onClick:function(){return n({isMobileMenuOpen:!1})}}))};a.default=function(e){var a=e.pageContext,t=Object(_.d)(),n=t.title,s=t.subtitle,r=a.currentPage,d=r>0?"Posts - Page "+r+" - "+n:n;return i.a.createElement(l.a,{title:d,description:s},i.a.createElement(f,null,i.a.createElement(H,null)))}},LC6O:function(e,a,t){e.exports={landing:"Landing-module--landing--1XgvS",landing__overlay:"Landing-module--landing__overlay--3S9S9",landing__overlay__open:"Landing-module--landing__overlay__open--3of29",landing__header:"Landing-module--landing__header--274RI",landing__logo:"Landing-module--landing__logo--33r_q",landing__nav__container:"Landing-module--landing__nav__container--IDmaM",landing__About:"Landing-module--landing__About--2y5xI",landing__Contact:"Landing-module--landing__Contact--1avY7",container:"Landing-module--container--2XIie","container--fullHeight":"Landing-module--container--fullHeight--8zuqO",MobileMenu:"Landing-module--MobileMenu--mqIcc",MobileMenu__open:"Landing-module--MobileMenu__open--6CSD2",Hamburger:"Landing-module--Hamburger--ofoXH",Hamburger__button:"Landing-module--Hamburger__button--3Bf98",Hamburger__closed:"Landing-module--Hamburger__closed--V17i8",Hamburger__inner:"Landing-module--Hamburger__inner--1AFkT",Hero:"Landing-module--Hero--mcXtX",Hero__headingGroup:"Landing-module--Hero__headingGroup--2FMMS",Hero__title:"Landing-module--Hero__title--1tvJ1",Hero__subtitle:"Landing-module--Hero__subtitle--TqxKT",Hero__intro:"Landing-module--Hero__intro--2xv6v",Hero__text:"Landing-module--Hero__text--2ukpt",NavList:"Landing-module--NavList--19G_b",NavList__item:"Landing-module--NavList__item--2EZ_D",NavList__link:"Landing-module--NavList__link--3CWm_",NavList__link__icon:"Landing-module--NavList__link__icon--gaQrW",About:"Landing-module--About--3TRFY",About__intro:"Landing-module--About__intro--RHnah",About__title:"Landing-module--About__title--1HTWi",Contact:"Landing-module--Contact--LiN5a",Contact__title:"Landing-module--Contact__title--20dA1",Contact__intro:"Landing-module--Contact__intro--1QsPp",Skills:"Landing-module--Skills--3dvTp",Stints:"Landing-module--Stints--1eLmH",Skills__title:"Landing-module--Skills__title--2YGFq",Stints__title:"Landing-module--Stints__title--3AQ7c",Skills__list:"Landing-module--Skills__list--ic1fr",Skills__details:"Landing-module--Skills__details--xGkTc",Stints__list:"Landing-module--Stints__list--2eK0m",Stints__details:"Landing-module--Stints__details--24ofB",Skills__list__inner:"Landing-module--Skills__list__inner--16Ce2",Stints__list__inner:"Landing-module--Stints__list__inner--34kLs",Skills__wrapper:"Landing-module--Skills__wrapper--25yBe",Stints__wrapper:"Landing-module--Stints__wrapper--38OT0",Skills__detail:"Landing-module--Skills__detail--3pmIh",Stints__detail:"Landing-module--Stints__detail--3vyFk",Skills__detail__title:"Landing-module--Skills__detail__title--2ixrH",Stints__detail__title:"Landing-module--Stints__detail__title--P53tY",Skills__detail__subtitle:"Landing-module--Skills__detail__subtitle--2ERFJ",Stints__detail__subtitle:"Landing-module--Stints__detail__subtitle--1Igx8",Skills__detail__desc:"Landing-module--Skills__detail__desc--2NLJ5",Stints__detail__desc:"Landing-module--Stints__detail__desc--389o-",Skills__detail__javascript:"Landing-module--Skills__detail__javascript--paIt6",Stints__detail__javascript:"Landing-module--Stints__detail__javascript--CodhZ",Skills__detail__nodejs:"Landing-module--Skills__detail__nodejs--2Uvge",Stints__detail__nodejs:"Landing-module--Stints__detail__nodejs--2eJxC",Skills__detail__react:"Landing-module--Skills__detail__react--3P_Qj",Stints__detail__react:"Landing-module--Stints__detail__react--2xMj3",Skills__detail__typescript:"Landing-module--Skills__detail__typescript--3XOBH",Stints__detail__typescript:"Landing-module--Stints__detail__typescript--JidxV",Skills__detail__python:"Landing-module--Skills__detail__python--1kFpr",Stints__detail__python:"Landing-module--Stints__detail__python--2JKx9",Skills__detail__rust:"Landing-module--Skills__detail__rust--Sqfx4",Stints__detail__rust:"Landing-module--Stints__detail__rust--3BxLj",Skills__details__open:"Landing-module--Skills__details__open--4PAbH",Stints__details__open:"Landing-module--Stints__details__open--3qY4a",Stints__icon:"Landing-module--Stints__icon--2gCd-",Stints__detail__epoch:"Landing-module--Stints__detail__epoch--gT0zd",Stints__detail__highlights:"Landing-module--Stints__detail__highlights--2xGj1",Stints__detail__highlight:"Landing-module--Stints__detail__highlight--2OAQv",Stints__detail__highlight__icon:"Landing-module--Stints__detail__highlight__icon--3E-em",Contact__footer:"Landing-module--Contact__footer--aPbYR",Contact__footer__link:"Landing-module--Contact__footer__link--3QFJ4"}},TSYQ:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var _=i.apply(null,n);_&&e.push(_)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var s in n)t.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(a,[]))||(e.exports=n)}()},Ys8a:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),l=t("euHg"),_=["name","className","icon"],s=function(e){var a=e.name,t=e.className,n=e.icon,l=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,_),s=Object.assign({},"string"==typeof n.path?{d:n.path}:n.path);return i.a.createElement("svg",Object.assign({className:t,viewBox:n.viewBox},l),i.a.createElement("title",null,a),Array.isArray(n.path)?n.path.map((function(e){return i.a.createElement("path",Object.assign({key:e.d},e))})):i.a.createElement("path",s))};s.defaultProps={className:t.n(l).a.icon};a.a=s},euHg:function(e,a,t){e.exports={icon:"Icon-module--icon--Gpyvw"}},faXO:function(e,a,t){e.exports={Entries:"Entries-module--Entries--J2fzD",EntryCard:"Entries-module--EntryCard--3KBVY",EntryCard__radio:"Entries-module--EntryCard__radio--2oWk4",EntryCard__title:"Entries-module--EntryCard__title--TRz-q",EntryCard__link:"Entries-module--EntryCard__link--25Npt"}}}]);
//# sourceMappingURL=component---src-templates-index-template-js-5ff980f969edb9b0be6f.js.map