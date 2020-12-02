exports.id = "components-Footer";
exports.ids = ["components-Footer"];
exports.modules = {

/***/ "./src/client/components/Footer/index.js":
/*!***********************************************!*\
  !*** ./src/client/components/Footer/index.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Footer
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/Footer/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons */ "./src/client/components/Icons/index.js");



function Footer(_ref) {
  var logo = _ref.logo,
      socialLinks = _ref.socialLinks,
      links = _ref.links;
  var iconMap = {
    facebook: _Icons__WEBPACK_IMPORTED_MODULE_2__.FacebookIcon,
    twitter: _Icons__WEBPACK_IMPORTED_MODULE_2__.TwitterIcon,
    youtube: _Icons__WEBPACK_IMPORTED_MODULE_2__.YoutubeIcon,
    instagram: _Icons__WEBPACK_IMPORTED_MODULE_2__.InstagramIcon
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: logo,
    alt: "",
    srcSet: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-social-media-container"
  }, socialLinks && socialLinks.map(function (socialLink) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: socialLink.link
    }, iconMap[socialLink.platform] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(iconMap[socialLink.platform]));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "footer-links-list"
  }, links && links.map(function (link) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: link.anchorLink
    }, link.anchorText));
  })));
}

/***/ }),

/***/ "./src/client/components/Footer/styles.css":
/*!*************************************************!*\
  !*** ./src/client/components/Footer/styles.css ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ })

};
;
//# sourceMappingURL=components-Footer.server.js.map