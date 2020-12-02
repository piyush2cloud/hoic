exports.id = "components-CarouselSlide";
exports.ids = ["components-CarouselSlide"];
exports.modules = {

/***/ "./src/client/components/CarouselSlide/index.js":
/*!******************************************************!*\
  !*** ./src/client/components/CarouselSlide/index.js ***!
  \******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CarouselSlide
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons */ "./src/client/components/Icons/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/CarouselSlide/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);



function CarouselSlide(_ref) {
  var _ref$slideData = _ref.slideData,
      slideData = _ref$slideData === void 0 ? {} : _ref$slideData,
      onTitleClick = _ref.onTitleClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-slide-container ",
    style: {
      // eslint-disable-next-line no-underscore-dangle
      backgroundImage: "url(".concat(slideData.gist.imageGist && slideData.gist.imageGist._16x9, ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-slide-details-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "carousel-slide-feature-text"
  }, "WORLD DIGITAL PREMIERE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-slide-title",
    onClick: function onClick() {
      onTitleClick ? onTitleClick() : null;
    }
  }, slideData.gist && slideData.gist.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-slide-feature-list-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-slide-age-rating"
  }, "13+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "carousel-slide-feature-list-item"
  }, slideData.gist.runtime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, Math.round(slideData.gist.runtime / 60), " mins"), slideData.gist.year && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, slideData.gist.year), slideData.categories[0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, slideData.categories[0].title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-slide-action-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-slide-cta-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "primary-button carousel-slide-cta carousel-slide-play-icon-container",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_1__.PlayIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: ""
  }, "Play Now"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-slide-info-icon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "secondary-button carousel-slide-secondary-icon carousel-slide-info-icon",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_1__.InfoIcon, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-slide-add-icon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "secondary-button carousel-slide-secondary-icon",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_1__.PlusIcon, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-slide-description"
  }, "A game of tunes - or a clue to a hidden treasure? It's a", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "journey of music and riddles!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Watch the trailer of Tansener Tanpura.")));
}

/***/ }),

/***/ "./src/client/components/CarouselSlide/styles.css":
/*!********************************************************!*\
  !*** ./src/client/components/CarouselSlide/styles.css ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ })

};
;
//# sourceMappingURL=components-CarouselSlide.server.js.map