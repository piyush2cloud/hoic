exports.id=176,exports.ids=[176,340,307,13,193,412],exports.modules={3214:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var l=a(6280),s=a.n(l),n=a(9e3),c=a.n(n),i=a(9297),r=a.n(i),o=a(4298),u=a(9814);function d(e){var t=e.moduleData;if(!t)return null;var a=t.contentData,l=r().createRef(),n=(0,i.useState)(0),d=c()(n,2),m=d[0],f=d[1],E=function(){return f((function(e){return e+1}))},v=null,g=(0,i.useState)(!1),N=c()(g,2),p=N[0],y=N[1];(0,i.useEffect)((function(){var e=["first-slide","second-slide"],t=l.current,a=s()(t.getElementsByClassName("first-slide")),n=s()(t.getElementsByClassName("second-slide")),c=s()(t.children);return void 0!==n[0]&&(a[0].classList.remove(e[0]),n[0].classList.remove(e[1]),n[0].classList.add(e[0]),n[0].nextSibling?n[0].nextSibling.classList.add(e[1]):c[0].classList.add(e[1])),v=setTimeout(E,6e3),function(){clearTimeout(v)}}),[m]),(0,i.useEffect)((function(){var e,t;e=["first-slide","second-slide"],t=l.current,s()(t.children).forEach((function(t,a){a>=e.length||t.classList.add(e[a])}))}),[0]);var b=function(){y(!0)};return r().createElement("div",null,r().createElement("div",{className:"carousel-parent"},r().createElement("div",{className:"carousel-mask",ref:l,onMouseOver:function(){v&&clearTimeout(v)},onMouseLeave:function(){v=setTimeout(E,6e3)}},a&&a.map((function(e,t){return r().createElement(o.default,{slideData:e,key:"".concat(t,"-carousel-slide"),onTitleClick:b})})))),p&&r().createElement(u.default,{videoDeatilsData:a,openVideoPopup:p,onVideoPopupClosed:y}))}a(9607)},4298:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var l=a(9297),s=a.n(l),n=a(7098);function c(e){var t=e.slideData,a=void 0===t?{}:t,l=e.onTitleClick;return s().createElement("div",{className:"carousel-slide-container ",style:{backgroundImage:"url(".concat(a.gist.imageGist&&a.gist.imageGist._16x9,")")}},s().createElement("div",{className:"carousel-slide-details-container"},s().createElement("span",{className:"carousel-slide-feature-text"},"WORLD DIGITAL PREMIERE"),s().createElement("div",{className:"carousel-slide-title",onClick:function(){l&&l()}},a.gist&&a.gist.title),s().createElement("div",{className:"carousel-slide-feature-list-container"},s().createElement("div",{className:"carousel-slide-age-rating"},"13+"),s().createElement("ul",{className:"carousel-slide-feature-list-item"},a.gist.runtime&&s().createElement("li",null,Math.round(a.gist.runtime/60)," mins"),a.gist.year&&s().createElement("li",null,a.gist.year),a.categories[0]&&s().createElement("li",null,a.categories[0].title))),s().createElement("div",{className:"carousel-slide-action-container"},s().createElement("div",{className:"carousel-slide-cta-container"},s().createElement("button",{className:"primary-button carousel-slide-cta carousel-slide-play-icon-container",type:"button"},s().createElement(n.PlayIcon,null),s().createElement("span",{className:""},"Play Now"))),s().createElement("div",{className:"carousel-slide-info-icon-container"},s().createElement("button",{className:"secondary-button carousel-slide-secondary-icon carousel-slide-info-icon",type:"button"},s().createElement(n.InfoIcon,null))),s().createElement("div",{className:"carousel-slide-add-icon-container"},s().createElement("button",{className:"secondary-button carousel-slide-secondary-icon",type:"button"},s().createElement(n.PlusIcon,null)))),s().createElement("div",{className:"carousel-slide-description"},"A game of tunes - or a clue to a hidden treasure? It's a",s().createElement("br",null),"journey of music and riddles!",s().createElement("br",null),"Watch the trailer of Tansener Tanpura.")))}a(1536)},9607:()=>{},1536:()=>{}};
//# sourceMappingURL=176.server.js.map