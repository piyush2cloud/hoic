exports.id = "components-VideoTile";
exports.ids = ["components-VideoTile"];
exports.modules = {

/***/ "./src/client/components/VideoTile/index.js":
/*!**************************************************!*\
  !*** ./src/client/components/VideoTile/index.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ VideoTile
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/VideoTile/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons */ "./src/client/components/Icons/index.js");



function VideoTile(_ref) {
  var gist = _ref.gist,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'short' : _ref$variant,
      ageRestriction = _ref.ageRestriction,
      featureText = _ref.featureText,
      color = _ref.color,
      s = _ref.s;
  var variantToSize = {
    "short": '_16x9',
    "long": '_9x16',
    cube: '_1x1',
    circle: '_1x1',
    genre: '_16x9',
    'extra-wide': '_32x9',
    landscape: '_16x9',
    portrait: '_9x16'
  };
  var sizes = {
    landscape: '_16x9',
    portrait: '_9x16'
  };
  var imageRatioForSmallSizeLoading = {
    _16x9: 1.77,
    _9x16: 0.56,
    _1x1: 1,
    _32x9: 3.55
  };
  var size = s.thumbnailType;
  console.log('size', size, variantToSize[size]);
  var shortOrlong = gist && gist.imageGist[variantToSize[size]] ? 'short' : 'long';
  var imageUrl = gist && (gist.imageGist[variantToSize[size]] || gist.imageGist[variantToSize[variant]]); // const imageUrl = gist && gist.imageGist[];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-wrapper video-tile-".concat(shortOrlong)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-parent",
    style: {
      backgroundImage: "url(".concat(imageUrl, "), linear-gradient(#212121, #212121)")
    }
  }, featureText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-new-label"
  }, featureText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-progress"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-long-hover-info-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-long-hover-title-action-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-long-hover-title ".concat(gist && gist.title)
  }, gist ? gist.title : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-long-hover-action-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-long-hover-play-icon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.PlayIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-long-hover-plus-icon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.PlusIcon, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "video-tile-long-hover-feature-list"
  }, ageRestriction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "video-tile-long-hover-feature-item video-tile-age-rating"
  }, ageRestriction), gist && gist.runtime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "video-tile-long-hover-feature-item"
  }, Math.round(gist.runtime / 60), " mins"), gist && gist.year && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "video-tile-long-hover-feature-item"
  }, gist.year), gist && gist.primaryCategory && gist.primaryCategory.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "video-tile-long-hover-feature-item"
  }, gist.primaryCategory.title)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-action-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-title",
    style: {
      '--genre-color': color ? "".concat(color, "6b") : '#b71c1c6b'
    }
  }, gist ? gist.title : '', ageRestriction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-age-rating"
  }, ageRestriction)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-icon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-play-icon video-tile-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.PlayIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-plus-icon video-tile-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.PlusIcon, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "video-tile-feature-list"
  }, gist && gist.runtime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, Math.round(gist.runtime / 60), " mins"), gist && gist.year && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, gist.year), gist && gist.primaryCategory && gist.primaryCategory.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, gist.primaryCategory.title)), gist && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-tile-description"
  }, gist.description))));
}

/***/ }),

/***/ "./src/client/components/VideoTile/styles.css":
/*!****************************************************!*\
  !*** ./src/client/components/VideoTile/styles.css ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ })

};
;
//# sourceMappingURL=components-VideoTile.server.js.map