exports.id = "components-OriginalSeries";
exports.ids = ["components-OriginalSeries"];
exports.modules = {

/***/ "./src/client/components/BigPoster/index.js":
/*!**************************************************!*\
  !*** ./src/client/components/BigPoster/index.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ BigPoster
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/BigPoster/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons */ "./src/client/components/Icons/index.js");



function BigPoster(_ref) {
  var gist = _ref.gist,
      feturedText = _ref.feturedText,
      s = _ref.s,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant;
  var variantToSize = {
    "default": '_16x9',
    'new-release': '_32x9',
    series: '_16x9',
    'original-series': '_16x9',
    landscape: '_16x9',
    portrait: '_9x16'
  };
  var imageRatioForSmallSizeLoading = {
    _16x9: 1.77,
    _9x16: 0.56,
    _1x1: 1,
    _32x9: 3.55
  };
  console.log(s);
  var size = s.thumbnailType;
  console.log('size', size, variantToSize[size]);
  var shortOrlong = s.thumbnailType === 'landscape' ? 'short' : 'long'; // gist && gist.imageGist[variantToSize[size]] ? 'short' : 'long';

  var imageUrl = gist && (gist.imageGist[variantToSize[size]] || gist.imageGist[variantToSize[variant]]); // const imageUrl = gist && gist.imageGist[variantToSize[variant]];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big-poster-container ".concat("big-poster-".concat(shortOrlong))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big-poster-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big-poster-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big-poster-img-container",
    style: {
      backgroundImage: "url(".concat(imageUrl, "), linear-gradient(#212121, #212121)")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big-poster-info-container"
  }, feturedText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big-poster-featured-text primary-gradient"
  }, feturedText), gist && gist.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big-poster-title"
  }, gist.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big -poster-feature"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "big-poster-feature-list"
  }, gist && gist.runtime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, gist && Math.round(gist.runtime / 60), " mins"), gist && gist.year && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, gist.year), gist && gist.primaryCategory && gist.primaryCategory.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, gist.primaryCategory.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big-poster-additional-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big-poster-buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big-poster-play-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big-poster-play-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.PlayIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big-poster-play-text"
  }, "Play Now")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big-poster-info-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big-poster-info-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.InfoIcon, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big-poster-plus-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big-poster-plus-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.PlusIcon, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "big-poster-description"
  }, "A love story amdist agitation and crime... Find out about the fight to survive, during the Bangladesh freedom struggle."))))));
}

/***/ }),

/***/ "./src/client/components/OriginalSeries/index.js":
/*!*******************************************************!*\
  !*** ./src/client/components/OriginalSeries/index.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ OriginalSeries
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/OriginalSeries/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BigPoster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BigPoster */ "./src/client/components/BigPoster/index.js");




function OriginalSeries(_ref) {
  var moduleData = _ref.moduleData,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'original-series' : _ref$variant;
  if (!moduleData) return null;
  var title = moduleData.title,
      _moduleData$subtitle = moduleData.subtitle,
      subtitle = _moduleData$subtitle === void 0 ? '' : _moduleData$subtitle,
      posters = moduleData.contentData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "original-series-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "original-series-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "original-series-title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "original-series-subtitle"
  }, subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "original-series-tiles"
  }, posters && posters.map(function (poster, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_BigPoster__WEBPACK_IMPORTED_MODULE_3__.default, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: "".concat(index, "-original-series")
    }, poster, {
      variant: variant
    }));
  }))));
}

/***/ }),

/***/ "./src/client/components/BigPoster/styles.css":
/*!****************************************************!*\
  !*** ./src/client/components/BigPoster/styles.css ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/client/components/OriginalSeries/styles.css":
/*!*********************************************************!*\
  !*** ./src/client/components/OriginalSeries/styles.css ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ })

};
;
//# sourceMappingURL=components-OriginalSeries.server.js.map