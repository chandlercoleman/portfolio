(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{23:function(e,t,a){e.exports=a(44)},33:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},35:function(e,t,a){e.exports=a.p+"static/media/video-placeholder.0f5afa76.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.26c04f15.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.26c04f15.svg"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.26c04f15.svg"},39:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.26c04f15.svg"},40:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.f207ea77.png"},41:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.ce43ae23.png"},42:function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.2f837294.png"},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var l=a(0),i=a.n(l),r=a(21),n=a.n(r),s=a(5),o=a(7),c=a(2),m=["component","layout"],d=function(e){var t=e.component,a=e.layout,l=Object(c.a)(e,m);return a=void 0===a?function(e){return i.a.createElement(i.a.Fragment,null,e.children)}:a,i.a.createElement(s.a,Object.assign({},l,{render:function(e){return i.a.createElement(a,null,i.a.createElement(t,e))}}))},v=a(11),u=a(3),h=a.n(u),p=a(17),b=i.a.forwardRef((function(e,t){var a=Object(l.useState)(window.innerHeight),r=Object(v.a)(a,2),n=r[0],s=r[1],o=Object(l.useState)([]),c=Object(v.a)(o,2),m=c[0],d=c[1],u=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},h=function(){if(!u())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),l=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=n-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,l)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(l.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(l.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(u()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),h())}),[m]);var b=function(){u()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(p.throttle)((function(){b(),h()}),30),E=Object(p.throttle)((function(){s(window.innerHeight)}),30);return Object(l.useEffect)((function(){b(),h()}),[n]),i.a.createElement(i.a.Fragment,null,e.children())}));b.propTypes={children:h.a.func.isRequired};var f=b,E=a(13),g=(a(33),function(){return i.a.createElement("div",{class:"chandler-is-awesome"},"Welcome to my hidden page... its CONFESSION time!",i.a.createElement("div",{class:"cool-c"},"I actually don't fully understand this",i.a.createElement("div",{class:"last-minute"},"When I was 10, I twisted my ankle rollerskating.",i.a.createElement("div",{class:"zendaya"},"I used to tell people Zendaya was my sister because both our last names are Coleman",i.a.createElement("div",{class:"ticket"},"I've gotten three speeding tickets in my life.",i.a.createElement("div",{class:"play"},"In elementary school, I played one of the three little pigs in our school play."))))))}),N=a(1),w=a.n(N),O=a(8),y=["className","src","width","height","alt"],j=function(e){var t=e.className,a=e.src,r=e.width,n=e.height,s=e.alt,o=Object(c.a)(e,y),m=Object(l.useState)(!1),d=Object(v.a)(m,2),u=d[0],h=d[1],p=Object(l.useRef)(null);Object(l.useEffect)((function(){b(p.current)}),[]);var b=function(e){var t,a,l=document.createElement("img");u||(e.style.display="none",e.before(l),l.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),l.width=e.getAttribute("width"),l.height=e.getAttribute("height"),l.style.opacity="0",e.className&&l.classList.add(e.className),l.remove(),e.style.display="")};return i.a.createElement("img",Object.assign({},o,{ref:p,className:t,src:a,width:r,height:n,alt:s,onLoad:function(){h(!0)}}))};j.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var x=j,D=["className"],C=function(e){var t=e.className,l=Object(c.a)(e,D),r=w()("brand",t);return i.a.createElement("div",Object.assign({},l,{className:r}),i.a.createElement("h1",{className:"m-0"},i.a.createElement(O.a,{to:"/"},i.a.createElement(x,{src:a(34),alt:"Open",className:"acorn",width:32,height:32}))))},k=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"],I=function(e){var t=e.className,a=e.navPosition,r=e.hideNav,n=e.hideSignin,s=e.bottomOuterDivider,o=e.bottomDivider,m=Object(c.a)(e,k),d=Object(l.useState)(!1),u=Object(v.a)(d,2),h=u[0],p=u[1],b=Object(l.useRef)(null),f=Object(l.useRef)(null);Object(l.useEffect)((function(){return h&&E(),document.addEventListener("keydown",N),document.addEventListener("click",y),function(){document.removeEventListener("keydown",N),document.removeEventListener("click",y),g()}}));var E=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",p(!0)},g=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),p(!1)},N=function(e){h&&27===e.keyCode&&g()},y=function(e){b.current&&h&&!b.current.contains(e.target)&&e.target!==f.current&&g()},j=w()("site-header",s&&"has-bottom-divider",t);return i.a.createElement("header",Object.assign({},m,{className:j}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:w()("site-header-inner",o&&"has-bottom-divider")},i.a.createElement(C,null),!r&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:h?g:E},i.a.createElement("span",{className:"screen-reader"},"Menu"),i.a.createElement("span",{className:"hamburger"},i.a.createElement("span",{className:"hamburger-inner"}))),i.a.createElement("nav",{ref:b,className:w()("header-nav",h&&"is-active")},i.a.createElement("div",{className:"header-nav-inner"},i.a.createElement("ul",{className:w()("list-reset text-xs",a&&"header-nav-".concat(a))},i.a.createElement("li",null,i.a.createElement(O.a,{to:"",onClick:g},"Gallery"))),!n&&i.a.createElement("ul",{className:"list-reset header-nav-right"},i.a.createElement("li",null,i.a.createElement(O.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:g},"Contact")))))))))};I.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var H=I,L=["className"],F=function(e){var t=e.className,a=Object(c.a)(e,L),l=w()("footer-nav",t);return i.a.createElement("nav",Object.assign({},a,{className:l}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement(O.a,{to:"#0"},"Contact")),i.a.createElement("li",null,i.a.createElement(O.a,{to:"#0"},"About us")),i.a.createElement("li",null,i.a.createElement(O.a,{to:"#0"},"FAQ's")),i.a.createElement("li",null,i.a.createElement(O.a,{to:"#0"},"Support"))))},S=["className"],P=function(e){var t=e.className,a=Object(c.a)(e,S),l=w()("footer-social",t);return i.a.createElement("div",Object.assign({},a,{className:l}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://facebook.com/"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Facebook"),i.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://twitter.com/"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Twitter"),i.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://google.com/"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Instagram"),i.a.createElement("g",null,i.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),i.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),i.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},A=["className","topOuterDivider","topDivider"],B=function(e){var t=e.className,a=e.topOuterDivider,l=e.topDivider,r=Object(c.a)(e,A),n=w()("site-footer center-content-mobile",a&&"has-top-divider",t);return i.a.createElement("footer",Object.assign({},r,{className:n}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:w()("site-footer-inner",l&&"has-top-divider")},i.a.createElement("div",{className:"footer-top space-between text-xxs"},i.a.createElement(C,null),i.a.createElement(P,null)),i.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},i.a.createElement(F,null),i.a.createElement("div",{className:"footer-copyright"},"Made by ",i.a.createElement("a",{href:"/portfolio/easter-egg"},"Cruip"),". All right reserved")))))};B.defaultProps={topOuterDivider:!1,topDivider:!1};var M=B,T=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(H,{navPosition:"right",className:"reveal-from-bottom"}),i.a.createElement("main",{className:"site-content"},t),i.a.createElement(M,null))},z=a(4),_={types:{topOuterDivider:h.a.bool,bottomOuterDivider:h.a.bool,topDivider:h.a.bool,bottomDivider:h.a.bool,hasBgColor:h.a.bool,invertColor:h.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},R={types:Object(z.a)({},_.types),defaults:Object(z.a)({},_.defaults)},W={types:Object(z.a)(Object(z.a)({},_.types),{},{invertMobile:h.a.bool,invertDesktop:h.a.bool,alignTop:h.a.bool,imageFill:h.a.bool}),defaults:Object(z.a)(Object(z.a)({},_.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},G={types:Object(z.a)(Object(z.a)({},_.types),{},{pushLeft:h.a.bool}),defaults:Object(z.a)(Object(z.a)({},_.defaults),{},{pushLeft:!1})},V=["className"],q=function(e){var t=e.className,a=Object(c.a)(e,V),l=w()("button-group",t);return i.a.createElement("div",Object.assign({},a,{className:l}))},J=["className","tag","color","size","loading","wide","wideMobile","disabled"],K=function(e){var t=e.className,a=e.tag,l=e.color,r=e.size,n=e.loading,s=e.wide,o=e.wideMobile,m=e.disabled,d=Object(c.a)(e,J),v=w()("button",l&&"button-".concat(l),r&&"button-".concat(r),n&&"is-loading",s&&"button-block",o&&"button-wide-mobile",t),u=a;return i.a.createElement(u,Object.assign({},d,{className:v,disabled:m}))};K.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var U=K,Y=["className","children","handleClose","show","closeHidden","video","videoTag"],Q=function(e){var t=e.className,a=e.children,r=e.handleClose,n=e.show,s=e.closeHidden,o=e.video,m=e.videoTag,d=Object(c.a)(e,Y);Object(l.useEffect)((function(){return document.addEventListener("keydown",u),document.addEventListener("click",h),function(){document.removeEventListener("keydown",u),document.removeEventListener("click",h)}})),Object(l.useEffect)((function(){v()}),[d.show]);var v=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},u=function(e){27===e.keyCode&&r(e)},h=function(e){e.stopPropagation()},p=w()("modal",n&&"is-active",o&&"modal-video",t);return i.a.createElement(i.a.Fragment,null,n&&i.a.createElement("div",Object.assign({},d,{className:p,onClick:r}),i.a.createElement("div",{className:"modal-inner",onClick:h},o?i.a.createElement("div",{className:"responsive-video"},"iframe"===m?i.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):i.a.createElement("video",{"v-else":!0,controls:!0,src:o})):i.a.createElement(i.a.Fragment,null,!s&&i.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),i.a.createElement("div",{className:"modal-content"},a)))))};Q.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var X=Q,Z=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],$=Object(z.a)({},R.defaults),ee=function(e){var t=e.className,r=e.topOuterDivider,n=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,m=e.hasBgColor,d=e.invertColor,u=Object(c.a)(e,Z),h=Object(l.useState)(!1),p=Object(v.a)(h,2),b=p[0],f=p[1],E=w()("hero section center-content",r&&"has-top-divider",n&&"has-bottom-divider",m&&"has-bg-color",d&&"invert-color",t),g=w()("hero-inner section-inner",s&&"has-top-divider",o&&"has-bottom-divider");return i.a.createElement("section",Object.assign({},u,{className:E}),i.a.createElement("div",{className:"container-sm"},i.a.createElement("div",{className:g},i.a.createElement("div",{className:"hero-content"},i.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Chandler ",i.a.createElement("span",{className:"text-color-primary"}," Coleman ")),i.a.createElement("div",{className:"container-xs"},i.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Just taking life one day at a time"),i.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},i.a.createElement(q,null,i.a.createElement(U,{tag:"a",color:"primary",wideMobile:!0,href:"https://www.instagram.com/coleman.chandler/"},"ig: @chandler_coleman"),i.a.createElement(U,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/cruip/open-react-template/"},"snap: @chan_coleman"))))),i.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},i.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),f(!0)}},i.a.createElement(x,{className:"has-shadow",src:a(35),alt:"Hero",width:570,height:600}))),i.a.createElement(X,{id:"video-modal",show:b,handleClose:function(e){e.preventDefault(),f(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};ee.defaultProps=$;var te=ee,ae=["className","data","children","tag"],le=function(e){var t=e.className,a=e.data,l=e.children,r=e.tag,n=Object(c.a)(e,ae),s=w()("section-header",t),o=r;return i.a.createElement(i.a.Fragment,null,(a.title||a.paragraph)&&i.a.createElement("div",Object.assign({},n,{className:s}),i.a.createElement("div",{className:"container-xs"},l,a.title&&i.a.createElement(o,{className:w()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&i.a.createElement("p",{className:"m-0"},a.paragraph))))};le.defaultProps={children:null,tag:"h2"};var ie=le,re=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],ne=Object(z.a)({},G.defaults),se=function(e){var t=e.className,l=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,v=Object(c.a)(e,re),u=w()("features-tiles section",l&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),h=w()("features-tiles-inner section-inner pt-0",n&&"has-top-divider",s&&"has-bottom-divider"),p=w()("tiles-wrap center-content",d&&"push-left");return i.a.createElement("section",Object.assign({},v,{className:u}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:h},i.a.createElement(ie,{data:{title:"Senior Year",paragraph:"Im feeling pretty good about this year, hopefully its fun and I get a 4.0 #smartgang."},className:"center-content"}),i.a.createElement("div",{className:p},i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(x,{src:a(36),alt:"Features tile icon 01",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"}),i.a.createElement("p",{className:"m-0 text-sm"},"I was born and raised in Fort Worth, TX. Yeehaw!")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(x,{src:a(37),alt:"Features tile icon 02",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"}),i.a.createElement("p",{className:"m-0 text-sm"},"I turned 21 this summer shoutout to all the Geminis out there.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(x,{src:a(38),alt:"Features tile icon 03",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"}),i.a.createElement("p",{className:"m-0 text-sm"},"For fun I like to watch tv, hangout with friends, and make art.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(x,{src:a(39),alt:"Features tile icon 04",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"}),i.a.createElement("p",{className:"m-0 text-sm"},"Hit me up if you want to be friends, Im super fun I swear!"))))))))};se.defaultProps=ne;var oe=se,ce=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],me=Object(z.a)({},W.defaults),de=function(e){var t=e.className,l=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,v=e.invertDesktop,u=e.alignTop,h=e.imageFill,p=Object(c.a)(e,ce),b=w()("features-split section",l&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),f=w()("features-split-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider"),E=w()("split-wrap",d&&"invert-mobile",v&&"invert-desktop",u&&"align-top");return i.a.createElement("section",Object.assign({},p,{className:b}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:f},i.a.createElement(ie,{data:{title:"Future Plans?",paragraph:"After college Im not exactly sure what I want to do. Probably move somewhere new, possibly Oregon and fingers crossed I find a job!"},className:"center-content"}),i.a.createElement("div",{className:E},i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"}),i.a.createElement("h3",{className:"mt-0 mb-12"},"Selci Hopkins"),i.a.createElement("p",{className:"m-0"},"I currently live off campus for the first time in my college career. Selci and I live in a house together with her dog Addie (not pictured). So if you see her around campus make sure you say hi!")),i.a.createElement("div",{className:w()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(x,{src:a(40),alt:"Features split 01",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"}),i.a.createElement("h3",{className:"mt-0 mb-12"},"Family"),i.a.createElement("p",{className:"m-0"},"My family are some of the most important people in my life. I have two older brothers and one younger brother, so it's always loud in our house!")),i.a.createElement("div",{className:w()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(x,{src:a(41),alt:"Features split 02",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"}),i.a.createElement("h3",{className:"mt-0 mb-12"},"Spend Some Time Outside"),i.a.createElement("p",{className:"m-0"},"I took this picture at Island Park right here in Winfield! I love spending time in nature, going on walks, taking photographs and really anything else.")),i.a.createElement("div",{className:w()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(x,{src:a(42),alt:"Features split 03",width:528,height:396})))))))};de.defaultProps=me;var ve=de,ue=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],he=Object(z.a)({},G.defaults),pe=function(e){var t=e.className,a=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,ue),v=w()("testimonial section",a&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),u=w()("testimonial-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider"),h=w()("tiles-wrap",m&&"push-left");return i.a.createElement("section",Object.assign({},d,{className:v}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:u},i.a.createElement(ie,{data:{title:"Art Gallery",paragraph:"Here are some of my favorite pieces I have made over the years."},className:"center-content"}),i.a.createElement("div",{className:h},i.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"})),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"}),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"}))))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"})),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"}),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"}))))),i.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"})),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"}),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"})))))))))};pe.defaultProps=he;var be=pe,fe=["className","children","labelHidden","id"],Ee=function(e){var t=e.className,a=e.children,l=e.labelHidden,r=e.id,n=Object(c.a)(e,fe),s=w()("form-label",l&&"screen-reader",t);return i.a.createElement("label",Object.assign({},n,{className:s,htmlFor:r}),a)};Ee.defaultProps={children:null,labelHidden:!1,id:null};var ge=Ee,Ne=["children","className","status"],we=function(e){var t=e.children,a=e.className,l=e.status,r=Object(c.a)(e,Ne),n=w()("form-hint",l&&"text-color-".concat(l),a);return i.a.createElement("div",Object.assign({},r,{className:n}),t)};we.defaultProps={children:null,status:!1};var Oe=we,ye=["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"],je=function(e){var t=e.className,a=e.children,l=e.label,r=e.labelHidden,n=e.type,s=e.name,o=e.status,m=e.disabled,d=e.value,v=e.formGroup,u=e.hasIcon,h=e.size,p=e.placeholder,b=e.rows,f=e.hint,E=Object(c.a)(e,ye),g=w()(v&&""!==v&&("desktop"===v?"form-group-desktop":"form-group"),u&&""!==u&&"has-icon-"+u),N=w()("form-input",h&&"form-input-".concat(h),o&&"form-".concat(o),t),O="textarea"===n?"textarea":"input";return i.a.createElement(i.a.Fragment,null,l&&i.a.createElement(ge,{labelHidden:r,id:E.id},l),i.a.createElement("div",{className:g},i.a.createElement(O,Object.assign({},E,{type:"textarea"!==n?n:null,className:N,name:s,disabled:m,value:d,placeholder:p,rows:"textarea"===n?b:null})),a),f&&i.a.createElement(Oe,{status:o},f))};je.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var xe=je,De=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],Ce=Object(z.a)(Object(z.a)({},R.defaults),{},{split:!1}),ke=function(e){var t=e.className,a=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.split,d=Object(c.a)(e,De),v=w()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),u=w()("cta-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider",m&&"cta-split");return i.a.createElement("section",Object.assign({},d,{className:v}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:u},i.a.createElement("div",{className:"cta-slogan"},i.a.createElement("h3",{className:"m-0"},"Hope you enjoyed learning a little bit about me!")),i.a.createElement("div",{className:"cta-action"},i.a.createElement(xe,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Leave A Message"},i.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};ke.defaultProps=Ce;var Ie=ke,He=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(te,{className:"illustration-section-01"}),i.a.createElement(oe,null),i.a.createElement(ve,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),i.a.createElement(be,{topDivider:!0}),i.a.createElement(Ie,{split:!0}))};E.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var Le=function(){var e=Object(l.useRef)(),t=Object(s.f)();return Object(l.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){E.a.set({page:e}),E.a.pageview(e)}(a)}),[t]),i.a.createElement(f,{ref:e,children:function(){return i.a.createElement(s.c,null,i.a.createElement(d,{exact:!0,path:"/portfolio",component:He,layout:T}),i.a.createElement(d,{exact:!0,path:"/portfolio/easter-egg",component:g}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(43);var Fe=Object(o.a)();n.a.render(i.a.createElement(s.b,{history:Fe},i.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.698ada02.chunk.js.map