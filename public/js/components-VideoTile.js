(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[789,193,285],{7067:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var l=i(7294),a=(i(9046),i(7098));function r(e){var t=e.gist,i=e.variant,r=void 0===i?"short":i,n=e.ageRestriction,o=e.featureText,c=e.color,s={short:"_16x9",long:"_9x16",cube:"_1x1",circle:"_1x1",genre:"_16x9","extra-wide":"_32x9",landscape:"_16x9",portrait:"_9x16"},m=e.s.thumbnailType;console.log("size",m,s[m]);var v=t&&t.imageGist[s[m]]?"short":"long",d=t&&(t.imageGist[s[m]]||t.imageGist[s[r]]);return l.createElement("div",{className:"video-tile-container"},l.createElement("div",{className:"video-tile-wrapper video-tile-".concat(v)},l.createElement("div",{className:"video-tile-parent",style:{backgroundImage:"url(".concat(d,"), linear-gradient(#212121, #212121)")}},o&&l.createElement("div",{className:"video-tile-new-label"},o),l.createElement("div",{className:"video-tile-progress"}),l.createElement("div",{className:"video-tile-long-hover-info-container"},l.createElement("div",{className:"video-tile-long-hover-title-action-container"},l.createElement("div",{className:"video-tile-long-hover-title ".concat(t&&t.title)},t?t.title:""),l.createElement("div",{className:"video-tile-long-hover-action-container"},l.createElement("div",{className:"video-tile-long-hover-play-icon-container"},l.createElement(a.PlayIcon,null)),l.createElement("div",{className:"video-tile-long-hover-plus-icon-container"},l.createElement(a.PlusIcon,null)))),l.createElement("ul",{className:"video-tile-long-hover-feature-list"},n&&l.createElement("li",{className:"video-tile-long-hover-feature-item video-tile-age-rating"},n),t&&t.runtime&&l.createElement("li",{className:"video-tile-long-hover-feature-item"},Math.round(t.runtime/60)," mins"),t&&t.year&&l.createElement("li",{className:"video-tile-long-hover-feature-item"},t.year),t&&t.primaryCategory&&t.primaryCategory.title&&l.createElement("li",{className:"video-tile-long-hover-feature-item"},t.primaryCategory.title)))),l.createElement("div",{className:"video-tile-info"},l.createElement("div",{className:"video-tile-action-container"},l.createElement("div",{className:"video-tile-title",style:{"--genre-color":c?"".concat(c,"6b"):"#b71c1c6b"}},t?t.title:"",n&&l.createElement("div",{className:"video-tile-age-rating"},n)),l.createElement("div",{className:"video-tile-icon-container"},l.createElement("div",{className:"video-tile-play-icon video-tile-icon"},l.createElement(a.PlayIcon,null)),l.createElement("div",{className:"video-tile-plus-icon video-tile-icon"},l.createElement(a.PlusIcon,null)))),l.createElement("ul",{className:"video-tile-feature-list"},t&&t.runtime&&l.createElement("li",null,Math.round(t.runtime/60)," mins"),t&&t.year&&l.createElement("li",null,t.year),t&&t.primaryCategory&&t.primaryCategory.title&&l.createElement("li",null,t.primaryCategory.title)),t&&l.createElement("div",{className:"video-tile-description"},t.description))))}},9046:()=>{}}]);
//# sourceMappingURL=components-VideoTile.js.map