(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[176,340,307,13,193,412],{3214:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var l=a(319),s=a.n(l),n=a(3038),c=a.n(n),i=a(7294),r=a(4298),o=a(9814);function u(e){var t=e.moduleData;if(!t)return null;var a=t.contentData,l=i.createRef(),n=(0,i.useState)(0),u=c()(n,2),d=u[0],m=u[1],E=function(){return m((function(e){return e+1}))},f=null,v=(0,i.useState)(!1),N=c()(v,2),g=N[0],y=N[1];(0,i.useEffect)((function(){var e=["first-slide","second-slide"],t=l.current,a=s()(t.getElementsByClassName("first-slide")),n=s()(t.getElementsByClassName("second-slide")),c=s()(t.children);return void 0!==n[0]&&(a[0].classList.remove(e[0]),n[0].classList.remove(e[1]),n[0].classList.add(e[0]),n[0].nextSibling?n[0].nextSibling.classList.add(e[1]):c[0].classList.add(e[1])),f=setTimeout(E,6e3),function(){clearTimeout(f)}}),[d]),(0,i.useEffect)((function(){var e,t;e=["first-slide","second-slide"],t=l.current,s()(t.children).forEach((function(t,a){a>=e.length||t.classList.add(e[a])}))}),[0]);var p=function(){y(!0)};return i.createElement("div",null,i.createElement("div",{className:"carousel-parent"},i.createElement("div",{className:"carousel-mask",ref:l,onMouseOver:function(){f&&clearTimeout(f)},onMouseLeave:function(){f=setTimeout(E,6e3)}},a&&a.map((function(e,t){return i.createElement(r.default,{slideData:e,key:"".concat(t,"-carousel-slide"),onTitleClick:p})})))),g&&i.createElement(o.default,{videoDeatilsData:a,openVideoPopup:g,onVideoPopupClosed:y}))}a(9607)},4298:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var l=a(7294),s=a(7098);function n(e){var t=e.slideData,a=void 0===t?{}:t,n=e.onTitleClick;return l.createElement("div",{className:"carousel-slide-container ",style:{backgroundImage:"url(".concat(a.gist.imageGist&&a.gist.imageGist._16x9,")")}},l.createElement("div",{className:"carousel-slide-details-container"},l.createElement("span",{className:"carousel-slide-feature-text"},"WORLD DIGITAL PREMIERE"),l.createElement("div",{className:"carousel-slide-title",onClick:function(){n&&n()}},a.gist&&a.gist.title),l.createElement("div",{className:"carousel-slide-feature-list-container"},l.createElement("div",{className:"carousel-slide-age-rating"},"13+"),l.createElement("ul",{className:"carousel-slide-feature-list-item"},a.gist.runtime&&l.createElement("li",null,Math.round(a.gist.runtime/60)," mins"),a.gist.year&&l.createElement("li",null,a.gist.year),a.categories[0]&&l.createElement("li",null,a.categories[0].title))),l.createElement("div",{className:"carousel-slide-action-container"},l.createElement("div",{className:"carousel-slide-cta-container"},l.createElement("button",{className:"primary-button carousel-slide-cta carousel-slide-play-icon-container",type:"button"},l.createElement(s.PlayIcon,null),l.createElement("span",{className:""},"Play Now"))),l.createElement("div",{className:"carousel-slide-info-icon-container"},l.createElement("button",{className:"secondary-button carousel-slide-secondary-icon carousel-slide-info-icon",type:"button"},l.createElement(s.InfoIcon,null))),l.createElement("div",{className:"carousel-slide-add-icon-container"},l.createElement("button",{className:"secondary-button carousel-slide-secondary-icon",type:"button"},l.createElement(s.PlusIcon,null)))),l.createElement("div",{className:"carousel-slide-description"},"A game of tunes - or a clue to a hidden treasure? It's a",l.createElement("br",null),"journey of music and riddles!",l.createElement("br",null),"Watch the trailer of Tansener Tanpura.")))}a(1536)},9607:()=>{},1536:()=>{}}]);
//# sourceMappingURL=components-Carousel.js.map