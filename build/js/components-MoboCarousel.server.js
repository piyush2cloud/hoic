exports.id = "components-MoboCarousel";
exports.ids = ["components-MoboCarousel"];
exports.modules = {

/***/ "./src/client/components/MoboCarousel/index.js":
/*!*****************************************************!*\
  !*** ./src/client/components/MoboCarousel/index.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ MoboCarousel
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/MoboCarousel/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons */ "./src/client/components/Icons/index.js");




function MoboCarousel(_ref) {
  var slidesDataArray = _ref.moduleData.contentData;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      currentActiveElement = _useState2[0],
      setCurrentActiveElement = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      selectedSlideData = _useState4[0],
      setSelectedSlideData = _useState4[1];

  var handleMoboCarousel = function handleMoboCarousel(slideIndex) {
    setCurrentActiveElement(slideIndex);
    setSelectedSlideData(slidesDataArray[slideIndex]);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // eslint-disable-next-line no-underscore-dangle
    if (slidesDataArray[0] && slidesDataArray[0].gist.imageGist._9x16) {
      // eslint-disable-next-line no-underscore-dangle
      setSelectedSlideData(slidesDataArray[0]);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mobo-carousel-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mobo-carousel-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mobo-carousel-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mobo-carousel-active-image-container" // style={{
    //   backgroundImage: `linear-gradient(180deg, rgb(0 0 0 / 0.9) 10%, transparent 40%), linear-gradient(360deg, #000000 30%, transparent 40%), url(${
    //     selectedSlideData &&
    //     selectedSlideData.gist &&
    //     selectedSlideData.gist.imageGist &&
    //     selectedSlideData.gist.imageGist._9x16
    //   })`,
    //}}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mobo-carousel-active-image-info-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mobo-carousel-active-play-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_3__.PlayIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mobo-carousel-active-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mobo-carousel-heading"
  }, selectedSlideData && selectedSlideData.gist && selectedSlideData.gist.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "mobo-carousel-feature-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "mobo-carousel-feature-item"
  }, "2 Seasons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "mobo-carousel-feature-item"
  }, "12 Episodes"), selectedSlideData && selectedSlideData.categories[0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "mobo-carousel-feature-item"
  }, selectedSlideData.categories[0].title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mobo-carousel-active-plus-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_3__.PlusIcon, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mobo-carousel-indicator-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "mobo-carousel-indicator-list"
  }, slidesDataArray && slidesDataArray.map(function (slideData, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
        key: new Date().getTime() + index,
        className: "mobo-carousel-indicator-list-item ".concat(index === currentActiveElement ? 'active' : ''),
        onClick: function onClick() {
          handleMoboCarousel(index);
        },
        role: "button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
        // eslint-disable-next-line no-underscore-dangle
        src: slideData.gist.imageGist._16x9,
        alt: "",
        className: "mobo-carousel-indicator-image" // eslint-disable-next-line no-underscore-dangle
        ,
        "data-active-image": slideData.gist.imageGist._9x16
      }))
    );
  })))))));
}

/***/ }),

/***/ "./src/client/components/MoboCarousel/styles.css":
/*!*******************************************************!*\
  !*** ./src/client/components/MoboCarousel/styles.css ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ })

};
;
//# sourceMappingURL=components-MoboCarousel.server.js.map