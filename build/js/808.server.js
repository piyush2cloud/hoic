exports.id=808,exports.ids=[808,193,789,285,956],exports.modules={7067:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var a=i(9297),l=i.n(a),r=(i(9046),i(7098));function n(e){var t=e.gist,i=e.variant,a=void 0===i?"short":i,n=e.ageRestriction,o=e.featureText,c=e.color,s={short:"_16x9",long:"_9x16",cube:"_1x1",circle:"_1x1",genre:"_16x9","extra-wide":"_32x9",landscape:"_16x9",portrait:"_9x16"},m=e.s.thumbnailType;console.log("size",m,s[m]);var v=t&&t.imageGist[s[m]]?"short":"long",d=t&&(t.imageGist[s[m]]||t.imageGist[s[a]]);return l().createElement("div",{className:"video-tile-container"},l().createElement("div",{className:"video-tile-wrapper video-tile-".concat(v)},l().createElement("div",{className:"video-tile-parent",style:{backgroundImage:"url(".concat(d,"), linear-gradient(#212121, #212121)")}},o&&l().createElement("div",{className:"video-tile-new-label"},o),l().createElement("div",{className:"video-tile-progress"}),l().createElement("div",{className:"video-tile-long-hover-info-container"},l().createElement("div",{className:"video-tile-long-hover-title-action-container"},l().createElement("div",{className:"video-tile-long-hover-title ".concat(t&&t.title)},t?t.title:""),l().createElement("div",{className:"video-tile-long-hover-action-container"},l().createElement("div",{className:"video-tile-long-hover-play-icon-container"},l().createElement(r.PlayIcon,null)),l().createElement("div",{className:"video-tile-long-hover-plus-icon-container"},l().createElement(r.PlusIcon,null)))),l().createElement("ul",{className:"video-tile-long-hover-feature-list"},n&&l().createElement("li",{className:"video-tile-long-hover-feature-item video-tile-age-rating"},n),t&&t.runtime&&l().createElement("li",{className:"video-tile-long-hover-feature-item"},Math.round(t.runtime/60)," mins"),t&&t.year&&l().createElement("li",{className:"video-tile-long-hover-feature-item"},t.year),t&&t.primaryCategory&&t.primaryCategory.title&&l().createElement("li",{className:"video-tile-long-hover-feature-item"},t.primaryCategory.title)))),l().createElement("div",{className:"video-tile-info"},l().createElement("div",{className:"video-tile-action-container"},l().createElement("div",{className:"video-tile-title",style:{"--genre-color":c?"".concat(c,"6b"):"#b71c1c6b"}},t?t.title:"",n&&l().createElement("div",{className:"video-tile-age-rating"},n)),l().createElement("div",{className:"video-tile-icon-container"},l().createElement("div",{className:"video-tile-play-icon video-tile-icon"},l().createElement(r.PlayIcon,null)),l().createElement("div",{className:"video-tile-plus-icon video-tile-icon"},l().createElement(r.PlusIcon,null)))),l().createElement("ul",{className:"video-tile-feature-list"},t&&t.runtime&&l().createElement("li",null,Math.round(t.runtime/60)," mins"),t&&t.year&&l().createElement("li",null,t.year),t&&t.primaryCategory&&t.primaryCategory.title&&l().createElement("li",null,t.primaryCategory.title)),t&&l().createElement("div",{className:"video-tile-description"},t.description))))}},4429:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>d});var a=i(5606),l=i.n(a),r=i(12),n=i.n(r),o=i(9297),c=i.n(o),s=(i(6320),i(7067));function m(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function v(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?m(Object(i),!0).forEach((function(t){n()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e){var t=e.moduleData,i=e.s,a=e.variant,r=void 0===a?"short":a;if(!t)return null;var n=t.contentData,o=t.title;return c().createElement("div",{className:"video-tiles-parent video-tiles-".concat(r)},c().createElement("div",{className:"video-tiles-heading"},o),c().createElement("div",null,c().createElement("div",{className:"video-tiles"},n&&n.map((function(e,t){return c().createElement(s.default,l()({key:"videotile-".concat(t,"-").concat(r)},v(v({},e),{},{variant:r,s:i})))})))))}},9046:()=>{},6320:()=>{}};
//# sourceMappingURL=808.server.js.map