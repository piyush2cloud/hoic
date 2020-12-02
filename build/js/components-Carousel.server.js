exports.id = "components-Carousel";
exports.ids = ["components-Carousel"];
exports.modules = {

/***/ "./src/client/components/Carousel/index.js":
/*!*************************************************!*\
  !*** ./src/client/components/Carousel/index.js ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Carousel
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CarouselSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CarouselSlide */ "./src/client/components/CarouselSlide/index.js");
/* harmony import */ var _VideoDetailsPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../VideoDetailsPopup */ "./src/client/components/VideoDetailsPopup/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/Carousel/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);






function Carousel(_ref) {
  var moduleData = _ref.moduleData;
  if (!moduleData) return null;
  var slidesDataArray = moduleData.contentData;
  var carousel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createRef();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      carouselTimmer = _useState2[0],
      setCarouselTimmer = _useState2[1];

  var timer = function timer() {
    return setCarouselTimmer(function (prevTime) {
      return prevTime + 1;
    });
  };

  var initCar = 0;
  var timerId = null;
  var carouselTimer = 6000;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      showMoviePopup = _useState4[0],
      setShowMoviePopup = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    // console.log('change slide');
    var carouselClasses = ['first-slide', 'second-slide'];
    var carouselNode = carousel.current;

    var carouselFirstItem = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(carouselNode.getElementsByClassName('first-slide'));

    var carouselSecondItem = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(carouselNode.getElementsByClassName('second-slide'));

    var carouselItems = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(carouselNode.children); //   if (carouselSecondItem[0] !== undefined) {
    //     carouselFirstItem[0].classList.remove(carouselClasses[0]);
    //     carouselSecondItem[0].classList.remove(carouselClasses[1]);
    //     carouselSecondItem[0].classList.add(carouselClasses[0]);
    //     if (carouselSecondItem[0].nextSibling) {
    //       carouselSecondItem[0].nextSibling.classList.add(carouselClasses[1]);
    //     } else {
    //       carouselItems[0].classList.add(carouselClasses[1]);
    //     }
    //   } else {
    //     // empty
    //   }


    timerId = setTimeout(timer, carouselTimer);
    return function () {
      clearTimeout(timerId);
    };
  }, [carouselTimmer]); // useEffect(() => {
  //   function initCarousel() {
  //     const carouselClasses = ['first-slide', 'second-slide'];
  //     const carouselNode = carousel.current;
  //     // console.log(carouselNode);
  //     const carouselItems = [...carouselNode.children];
  //     //   console.log(carouselItems);
  //     carouselItems.forEach((carouselItem, index) => {
  //       if (index >= carouselClasses.length) {
  //         return;
  //       }
  //       carouselItem.classList.add(carouselClasses[index]);
  //     });
  //   }
  //   initCarousel();
  // }, [initCar]);

  var carouselOnMouseOver = function carouselOnMouseOver() {
    if (timerId) {
      clearTimeout(timerId);
    }
  };

  var carouselOnMouseLeave = function carouselOnMouseLeave() {
    timerId = setTimeout(timer, carouselTimer);
  };

  var titleClickHandler = function titleClickHandler() {
    setShowMoviePopup(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "carousel-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "carousel-mask",
    ref: carousel,
    onMouseOver: carouselOnMouseOver,
    onMouseLeave: carouselOnMouseLeave
  }, slidesDataArray && slidesDataArray.map(function (slideData, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_CarouselSlide__WEBPACK_IMPORTED_MODULE_3__.default, {
      slideData: slideData,
      key: "".concat(index, "-carousel-slide"),
      onTitleClick: titleClickHandler
    });
  }))), showMoviePopup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_VideoDetailsPopup__WEBPACK_IMPORTED_MODULE_4__.default, {
    videoDeatilsData: slidesDataArray,
    openVideoPopup: showMoviePopup,
    onVideoPopupClosed: setShowMoviePopup
  }));
}

/***/ }),

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

/***/ "./src/client/components/Carousel/styles.css":
/*!***************************************************!*\
  !*** ./src/client/components/Carousel/styles.css ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// extracted by mini-css-extract-plugin

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
//# sourceMappingURL=components-Carousel.server.js.map