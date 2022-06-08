/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/home.js":
/*!*************************!*\
  !*** ./src/app/home.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _assets_images_dominicanflag_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/dominicanflag.jpeg */ "./src/assets/images/dominicanflag.jpeg");

function homePage() {
  var createPage = function createPage() {
    return "<div data-name=\"home\">\n    <h1>Welcome to the Dominican Restaurant</h1>\n    <img src=\"".concat(_assets_images_dominicanflag_jpeg__WEBPACK_IMPORTED_MODULE_0__, "\" alt=\"Dominican Flag\" />\n    <div>\n        <h3>We Serve Authentic Dominican Food</h3>\n        <span>Check out our menu</span>\n    </div>\n    </div>");
  };

  var contentDiv = document.createElement('div');
  contentDiv.setAttribute("data-name", 'home');
  contentDiv.innerHTML = " <h1>Welcome to the Dominican Restaurant</h1>\n    <img src=".concat(_assets_images_dominicanflag_jpeg__WEBPACK_IMPORTED_MODULE_0__, " alt=\"Dominican Flag\" />\n    <div>\n        <h3>We Serve Authentic Dominican Food</h3>\n        <span>Check out our menu</span>\n    </div>");
  return {
    createPage: createPage,
    content: contentDiv
  };
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Anton-Regular.ttf */ "./src/assets/fonts/Anton-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/DidactGothic-Regular.ttf */ "./src/assets/fonts/DidactGothic-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"Anton\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: \"Didact Gothic\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n:root {\n    --clr-red: 353 84% 43%;\n    --clr-blue: 212 100% 19%;\n    --clr-white: 0 0 100%;\n    --clr-green: 120 100% 19.4%;\n    --clr-yellow: 49.4 98.3% 46.3%;\n    --clr-dark: 230 35% 7%;\n    --fs-900: clamp(5rem, 8vw + 1rem ,9.375rem);\n    --fs-800: 3.5rem;\n    --fs-700: 1.5rem;\n    --fs-600: 1rem;\n    --fs-500: 1rem;\n    --fs-400: 0.9375rem;\n    --fs-300: 1rem;\n    --fs-200: 0.875rem;\n\n    --ff-gothic: \"Didact Gothic\", sans-serif;\n    --ff-anton: \"Anton\", sans-serif;\n}\n\n@media (min-width: 768px) {\n    :root {\n        --fs-900: 9.375rem;\n        --fs-800: 5rem;\n        --fs-700: 2.5rem;\n        --fs-600: 1.5rem;\n        --fs-500: 1.25rem;\n        --fs-400: 1rem;\n    }\n}\n\n/* 45em */\n@media (min-width: 1200px) {\n    :root {\n        --fs-800: 6.25rem;\n        --fs-700: 3.5rem;\n        --fs-600: 2rem;\n        --fs-500: 1.75rem;\n        --fs-400: 1.125rem;\n    }\n}\n\n*,\n*::after,\n*::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nfigure,\npicture {\n    margin: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n    font-weight: 400;\n}\n\nbody {\n    font-family: var(--ff-gothic);\n    font-size: var(--fs-400);\n    line-height: 1.5;\n    min-height: 100vh;\n    overflow-x: hidden;\n}\n\n/* make images easier to work with */\nimg,\npicture {\n    max-width: 100%;\n    display: block;\n}\n\n/* make forms easier to work with */\n/* because fonts are not inherited in forms */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n/*  remove animations for people who've turned them off */\n@media (prefers-reduced-motion: reduce) {\n    *,\n    *::before,\n    *::after {\n        animation-duration: 0.01ms !important;\n        animation-iteration-count: 1 !important;\n        transition-duration: 0.01ms !important;\n        scroll-behavior: auto !important;\n    }\n}\n\n.flex {\n    display: flex;\n    gap: var(--gap, 1rem); \n}\n\n.grid {\n    display: grid;\n    gap: var(--gap, 1rem); \n}\n\n.d-block {\n    display: block;\n}\n\n.bg-dark {\n    background-color: hsl( var(--clr-dark));\n}\n.bg-red {\n    background-color: hsl( var(--clr-red));\n}\n.bg-blue {\n    background-color: hsl( var(--clr-blue));\n}\n\n.bg-yellow {\n    background-color: hsl( var(--clr-yellow));\n}\n\n.bg-green {\n    background-color: hsl( var(--clr-green));\n}\n\n.text-dark {\n    color: hsl(var(--clr-dark));\n}\n\n.text-red {\n    color: hsl(var(--clr-red));\n}\n\n.text-blue {\n    color: hsl(var(--clr-blue));\n}\n\n/* typography */\n\n.ff-gothic { \n    font-family: var(--ff-gothic); \n} \n.ff-anton { \n    font-family: var(--ff-anton); \n} \n \n\n.letter-spacing-1 { \n    letter-spacing: 4.75px; \n} \n.letter-spacing-2 { \n    letter-spacing: 2.7px; \n} \n.letter-spacing-3 { \n    letter-spacing: 2.35px; \n} \n\n.uppercase { \n    text-transform: uppercase; \n}\n\n.fs-900 { \n    font-size: var(--fs-900); \n}\n.fs-800 { \n    font-size: var(--fs-800); \n}\n.fs-700 { \n    font-size: var(--fs-700); \n}\n.fs-600 { \n    font-size: var(--fs-600); \n}\n.fs-500 { \n    font-size: var(--fs-500); \n}\n.fs-400 { \n    font-size: var(--fs-400); \n}\n.fs-300 { \n    font-size: var(--fs-300); \n}\n.fs-200 { \n    font-size: var(--fs-200); \n}\n\n.fs-900,\n.fs-800,\n.fs-700,\n.fs-600 {\n    line-height: 1.1;\n}", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,4CAA6C;AACjD;;AAEA;IACI,4BAA4B;IAC5B,4CAAoD;AACxD;;AAEA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,qBAAqB;IACrB,2BAA2B;IAC3B,8BAA8B;IAC9B,sBAAsB;IACtB,2CAA2C;IAC3C,gBAAgB;IAChB,gBAAgB;IAChB,cAAc;IACd,cAAc;IACd,mBAAmB;IACnB,cAAc;IACd,kBAAkB;;IAElB,wCAAwC;IACxC,+BAA+B;AACnC;;AAEA;IACI;QACI,kBAAkB;QAClB,cAAc;QACd,gBAAgB;QAChB,gBAAgB;QAChB,iBAAiB;QACjB,cAAc;IAClB;AACJ;;AAEA,SAAS;AACT;IACI;QACI,iBAAiB;QACjB,gBAAgB;QAChB,cAAc;QACd,iBAAiB;QACjB,kBAAkB;IACtB;AACJ;;AAEA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;;AAGA;;;;;;;;;;IAUI,SAAS;AACb;;AAEA;;;;;;;IAOI,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,wBAAwB;IACxB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA,oCAAoC;AACpC;;IAEI,eAAe;IACf,cAAc;AAClB;;AAEA,mCAAmC;AACnC,6CAA6C;AAC7C;;;;IAII,aAAa;AACjB;AACA,yDAAyD;AACzD;IACI;;;QAGI,qCAAqC;QACrC,uCAAuC;QACvC,sCAAsC;QACtC,gCAAgC;IACpC;AACJ;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,uCAAuC;AAC3C;AACA;IACI,sCAAsC;AAC1C;AACA;IACI,uCAAuC;AAC3C;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA,eAAe;;AAEf;IACI,6BAA6B;AACjC;AACA;IACI,4BAA4B;AAChC;;;AAGA;IACI,sBAAsB;AAC1B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,wBAAwB;AAC5B;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,wBAAwB;AAC5B;;AAEA;;;;IAII,gBAAgB;AACpB","sourcesContent":["@font-face {\n    font-family: \"Anton\";\n    src: url('../assets/fonts/Anton-Regular.ttf');\n}\n\n@font-face {\n    font-family: \"Didact Gothic\";\n    src: url('../assets/fonts/DidactGothic-Regular.ttf');\n}\n\n:root {\n    --clr-red: 353 84% 43%;\n    --clr-blue: 212 100% 19%;\n    --clr-white: 0 0 100%;\n    --clr-green: 120 100% 19.4%;\n    --clr-yellow: 49.4 98.3% 46.3%;\n    --clr-dark: 230 35% 7%;\n    --fs-900: clamp(5rem, 8vw + 1rem ,9.375rem);\n    --fs-800: 3.5rem;\n    --fs-700: 1.5rem;\n    --fs-600: 1rem;\n    --fs-500: 1rem;\n    --fs-400: 0.9375rem;\n    --fs-300: 1rem;\n    --fs-200: 0.875rem;\n\n    --ff-gothic: \"Didact Gothic\", sans-serif;\n    --ff-anton: \"Anton\", sans-serif;\n}\n\n@media (min-width: 768px) {\n    :root {\n        --fs-900: 9.375rem;\n        --fs-800: 5rem;\n        --fs-700: 2.5rem;\n        --fs-600: 1.5rem;\n        --fs-500: 1.25rem;\n        --fs-400: 1rem;\n    }\n}\n\n/* 45em */\n@media (min-width: 1200px) {\n    :root {\n        --fs-800: 6.25rem;\n        --fs-700: 3.5rem;\n        --fs-600: 2rem;\n        --fs-500: 1.75rem;\n        --fs-400: 1.125rem;\n    }\n}\n\n*,\n*::after,\n*::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nfigure,\npicture {\n    margin: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n    font-weight: 400;\n}\n\nbody {\n    font-family: var(--ff-gothic);\n    font-size: var(--fs-400);\n    line-height: 1.5;\n    min-height: 100vh;\n    overflow-x: hidden;\n}\n\n/* make images easier to work with */\nimg,\npicture {\n    max-width: 100%;\n    display: block;\n}\n\n/* make forms easier to work with */\n/* because fonts are not inherited in forms */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n/*  remove animations for people who've turned them off */\n@media (prefers-reduced-motion: reduce) {\n    *,\n    *::before,\n    *::after {\n        animation-duration: 0.01ms !important;\n        animation-iteration-count: 1 !important;\n        transition-duration: 0.01ms !important;\n        scroll-behavior: auto !important;\n    }\n}\n\n.flex {\n    display: flex;\n    gap: var(--gap, 1rem); \n}\n\n.grid {\n    display: grid;\n    gap: var(--gap, 1rem); \n}\n\n.d-block {\n    display: block;\n}\n\n.bg-dark {\n    background-color: hsl( var(--clr-dark));\n}\n.bg-red {\n    background-color: hsl( var(--clr-red));\n}\n.bg-blue {\n    background-color: hsl( var(--clr-blue));\n}\n\n.bg-yellow {\n    background-color: hsl( var(--clr-yellow));\n}\n\n.bg-green {\n    background-color: hsl( var(--clr-green));\n}\n\n.text-dark {\n    color: hsl(var(--clr-dark));\n}\n\n.text-red {\n    color: hsl(var(--clr-red));\n}\n\n.text-blue {\n    color: hsl(var(--clr-blue));\n}\n\n/* typography */\n\n.ff-gothic { \n    font-family: var(--ff-gothic); \n} \n.ff-anton { \n    font-family: var(--ff-anton); \n} \n \n\n.letter-spacing-1 { \n    letter-spacing: 4.75px; \n} \n.letter-spacing-2 { \n    letter-spacing: 2.7px; \n} \n.letter-spacing-3 { \n    letter-spacing: 2.35px; \n} \n\n.uppercase { \n    text-transform: uppercase; \n}\n\n.fs-900 { \n    font-size: var(--fs-900); \n}\n.fs-800 { \n    font-size: var(--fs-800); \n}\n.fs-700 { \n    font-size: var(--fs-700); \n}\n.fs-600 { \n    font-size: var(--fs-600); \n}\n.fs-500 { \n    font-size: var(--fs-500); \n}\n.fs-400 { \n    font-size: var(--fs-400); \n}\n.fs-300 { \n    font-size: var(--fs-300); \n}\n.fs-200 { \n    font-size: var(--fs-200); \n}\n\n.fs-900,\n.fs-800,\n.fs-700,\n.fs-600 {\n    line-height: 1.1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/Anton-Regular.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Anton-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Anton-Regular.ttf";

/***/ }),

/***/ "./src/assets/fonts/DidactGothic-Regular.ttf":
/*!***************************************************!*\
  !*** ./src/assets/fonts/DidactGothic-Regular.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "DidactGothic-Regular.ttf";

/***/ }),

/***/ "./src/assets/images/dominicanflag.jpeg":
/*!**********************************************!*\
  !*** ./src/assets/images/dominicanflag.jpeg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dominicanflag.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/app/main.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _assets_images_dominicanflag_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/dominicanflag.jpeg */ "./src/assets/images/dominicanflag.jpeg");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/app/home.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





function contentElement() {
  var contentDiv = document.querySelector("#content");
  return {
    contentDiv: contentDiv
  };
}

;

function bodyContent() {
  var mainEl = document.createElement('main');
  mainEl.setAttribute('id', "tab-content");
  return {
    mainEl: mainEl
  };
}

;

function tabsController() {
  var tabContentArr = ['home', 'menu', 'contact'];
  var tabController = document.createElement('ul');
  tabController.setAttribute("role", "tabslist");
  var tabElements = tabContentArr.map(function (name) {
    return "<li data-visible=".concat(false, " data-name=\"", name, "\" class=\"tab-item text-red fs-500\">").concat(name, "</li>");
  });
  tabController.innerHTML = tabElements.join('');
  return {
    tabList: _toConsumableArray(document.querySelectorAll('[data-visible]')),
    tabContentArr: tabContentArr,
    tabController: tabController,
    tabElements: tabElements
  };
}

var changeTabs = function changeTabs(e) {
  return function (id) {
    var tabButtons = tabsController().tabList; // tabButtons.forEach(btn => {
    //     btn.addEventListener('click', (e)=> {
    //         if (e.target.dataset.name === "home") {
    //             bodyContent().mainEl.innerHTML = homePage().createPage;
    //         }
    //     })
    // })
  };
};

function homeContent() {
  var createPage = function createPage() {
    return "<div data-name=\"home\">\n    <h1>Welcome to the Dominican Restaurant</h1>\n    <img src=\"".concat(_assets_images_dominicanflag_jpeg__WEBPACK_IMPORTED_MODULE_1__, "\" alt=\"Dominican Flag\" />\n    <div>\n        <h3>We Serve Authentic Dominican Food</h3>\n        <span>Check out our menu</span>\n    </div>\n    </div>");
  };

  var contentDiv = document.createElement('div');
  var flagImage = document.createElement("img");
  flagImage.src = _assets_images_dominicanflag_jpeg__WEBPACK_IMPORTED_MODULE_1__;
  flagImage.setAttribute('alt', "Dominican Flag");
  var headingEl = document.createElement("h1");
  headingEl.textContent = "Welcome To The Dominican Restautant";
  var divEl = document.createElement("div");
  var headingThreeEl = document.createElement("h3");
  headingThreeEl.textContent = "We serve Authentic Dominican Food";
  var spanEl = document.createElement("span");
  spanEl.textContent = "Check out our Menu";
  contentDiv.append(flagImage, headingEl, divEl.append(headingThreeEl, spanEl));
  return {
    createPage: createPage,
    content: contentDiv
  };
}

function contentController() {
  var contentDiv = document.querySelector("#content");
  var mainEl = document.createElement('main');
  mainEl.setAttribute('id', "tab-content");
  contentDiv.appendChild(tabsController().tabController);
  contentDiv.appendChild(mainEl);
  var tabButtonArr = tabsController().tabButton;
  tabButtonArr[0].dataset.visible = true;
  mainEl.innerHTML = homeContent().content;
}

;
window.addEventListener('DOMContentLoaded', contentController);
})();

/******/ })()
;
//# sourceMappingURL=main.[contenthast].js.map