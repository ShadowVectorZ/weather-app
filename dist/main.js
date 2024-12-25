/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root{\n    background-color:rgb(0, 109, 211)\n}\n\n\n\nbutton{\n    color:black;}\n\n\n#form-div{\n    display:flex;\n    color:white;\n   justify-content:center;\n}\n\n#title{\n    color:white;\n}\n\n#container{\n    display:flex;\n    flex-wrap:wrap;\n    justify-content:space-evenly;\n    margin-top:20px;\n    padding:10px;\n}\n\n#container>div{\n    margin:10px;\n    display:flex;\n    justify-content:space-around;\n    color:black;\n}\n\n#left-side{\n    display:flex;\n    flex-wrap:wrap;\n    align-items:center;\n    flex-direction:column;\n    gap:10px;\n    background-color:rgb(255, 242, 166);\n    opacity:0.9;\n    color:black;\n}\n\n\n\n#right-side{\n    display:flex;\n    align-items:center;\n    flex-wrap:wrap;\n    flex-direction:column;\n    background-color:rgb(255, 242, 166);\n    opacity:0.9;\n}\n\n#title{\n   \n    display:flex;\n    justify-content:center;\n    margin-top:50px;\n}\n\n#buttonDiv{\n    display:flex;\n    justify-content:center;\n    gap:10px;\n    margin:10px;\n}\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newPlace: () => (/* binding */ newPlace)\n/* harmony export */ });\n/* harmony import */ var _weatherInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherInfo */ \"./src/weatherInfo.js\");\n\nlet newPlace\nlet locationForm = document.querySelector('#locationForm')\nlocationForm.addEventListener('submit', (event) => {\n  event.preventDefault()\n  newPlace = document.querySelector('#formLocation').value\n  ;(0,_weatherInfo__WEBPACK_IMPORTED_MODULE_0__.getWeather)()\n  locationForm.reset()\n}\n)\n\n\n\n//# sourceURL=webpack://weather-app/./src/form.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _weatherInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherInfo.js */ \"./src/weatherInfo.js\");\n\n\n\n\n\n\nlet convertToCelsius = function (number) {\n  let temperature = Number(number)\n  let newTemperature = (((temperature) - 32) * (5 / 9))\n  let result = newTemperature.toFixed(1)\n  return (result)\n};\n\n\n\n\n\n\n//<a target=\"_blank\" href=\"https://icons8.com/icon/15352/sun\">Sun</a> icon by <a target=\"_blank\" href=\"https://icons8.com\">Icons8</a>\n//<a target=\"_blank\" href=\"https://icons8.com/icon/15360/rain\">Rain</a> icon by <a target=\"_blank\" href=\"https://icons8.com\">Icons8</a>\n//<a target=\"_blank\" href=\"https://icons8.com/icon/11871/cloud\">Cloud</a> icon by <a target=\"_blank\" href=\"https://icons8.com\">Icons8</a>\n//<a target=\"_blank\" href=\"https://icons8.com/icon/15359/partly-cloudy-day\">Partly Cloudy Day</a> icon by <a target=\"_blank\" href=\"https://icons8.com\">Icons8</a>\n//<a target=\"_blank\" href=\"https://icons8.com/icon/15356/snow\">Snow</a> icon by <a target=\"_blank\" href=\"https://icons8.com\">Icons8</a>\n\n//# sourceURL=webpack://weather-app/./src/script.js?");

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonDiv: () => (/* binding */ buttonDiv),\n/* harmony export */   cloudCoverDiv: () => (/* binding */ cloudCoverDiv),\n/* harmony export */   conditionsDiv: () => (/* binding */ conditionsDiv),\n/* harmony export */   descripDiv: () => (/* binding */ descripDiv),\n/* harmony export */   humidityDiv: () => (/* binding */ humidityDiv),\n/* harmony export */   img: () => (/* binding */ img),\n/* harmony export */   leftSide: () => (/* binding */ leftSide),\n/* harmony export */   maxTemp: () => (/* binding */ maxTemp),\n/* harmony export */   minTemp: () => (/* binding */ minTemp),\n/* harmony export */   precipDiv: () => (/* binding */ precipDiv),\n/* harmony export */   rightSide: () => (/* binding */ rightSide),\n/* harmony export */   tempDiv: () => (/* binding */ tempDiv),\n/* harmony export */   title: () => (/* binding */ title),\n/* harmony export */   windSpeed: () => (/* binding */ windSpeed)\n/* harmony export */ });\nlet title=document.querySelector(`#title`)\nlet leftSide=document.querySelector(`#left-side`)\nlet rightSide=document.querySelector(`#right-side`)\nlet conditionsDiv = document.querySelector('#conditions')\nlet humidityDiv = document.querySelector('#humidity')\nlet tempDiv = document.querySelector('#temp')\nlet cloudCoverDiv = document.querySelector('#cloudcover')\nlet precipDiv = document.querySelector('#precip')\nlet descripDiv=document.querySelector('#description')\nlet windSpeed=document.querySelector('#wind-speed')\nlet minTemp=document.querySelector('#min-temp')\nlet maxTemp=document.querySelector('#max-temp')\nlet buttonDiv=document.querySelector(`#buttonDiv`)\nlet img=document.querySelector('#img')\n\n\n\n//# sourceURL=webpack://weather-app/./src/variables.js?");

/***/ }),

/***/ "./src/weatherInfo.js":
/*!****************************!*\
  !*** ./src/weatherInfo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _images_cloudy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/cloudy.png */ \"./src/images/cloudy.png\");\n/* harmony import */ var _images_partly_cloudy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/partly-cloudy.png */ \"./src/images/partly-cloudy.png\");\n/* harmony import */ var _images_rain_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/rain.png */ \"./src/images/rain.png\");\n/* harmony import */ var _images_snow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/snow.png */ \"./src/images/snow.png\");\n/* harmony import */ var _images_sun_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/sun.png */ \"./src/images/sun.png\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./variables.js */ \"./src/variables.js\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form.js */ \"./src/form.js\");\n\n\n\n\n\n\n\n\n\nlet getWeather = function () {\n    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${_form_js__WEBPACK_IMPORTED_MODULE_6__.newPlace}?key=9VW6V5TZUV62HFKHVM5C6RFHZ`, { mode: 'cors' })\n      .then(function (response) {\n        return response.json();\n      })\n      .then(function (response) {\n        switch(response.currentConditions.conditions){\n          case 'Partially cloudy':\n            _variables_js__WEBPACK_IMPORTED_MODULE_5__.img.src=_images_partly_cloudy_png__WEBPACK_IMPORTED_MODULE_1__;\n            break;\n            case 'Overcast':\n            _variables_js__WEBPACK_IMPORTED_MODULE_5__.img.src=_images_cloudy_png__WEBPACK_IMPORTED_MODULE_0__;\n            break;\n            case 'Clear':\n            _variables_js__WEBPACK_IMPORTED_MODULE_5__.img.src=_images_sun_png__WEBPACK_IMPORTED_MODULE_4__;\n            break;\n            case 'Rain':\n            _variables_js__WEBPACK_IMPORTED_MODULE_5__.img.src=_images_rain_png__WEBPACK_IMPORTED_MODULE_2__;\n            break;\n            case 'Rain, Partially cloudy':\n            _variables_js__WEBPACK_IMPORTED_MODULE_5__.img.src=_images_rain_png__WEBPACK_IMPORTED_MODULE_2__;\n            break;\n            case 'Rain, Overcast':\n            _variables_js__WEBPACK_IMPORTED_MODULE_5__.img.src=_images_rain_png__WEBPACK_IMPORTED_MODULE_2__;\n            break;\n            case 'Snow, Overcast':\n            _variables_js__WEBPACK_IMPORTED_MODULE_5__.img.src=_images_snow_png__WEBPACK_IMPORTED_MODULE_3__;\n            break;\n            case 'Snow, Partially cloudy':\n            _variables_js__WEBPACK_IMPORTED_MODULE_5__.img.src=_images_snow_png__WEBPACK_IMPORTED_MODULE_3__;\n            break;\n            case 'Snow':\n            _variables_js__WEBPACK_IMPORTED_MODULE_5__.img.src=_images_snow_png__WEBPACK_IMPORTED_MODULE_3__;\n            break;\n  \n        }\n        _variables_js__WEBPACK_IMPORTED_MODULE_5__.title.textContent=`${_form_js__WEBPACK_IMPORTED_MODULE_6__.newPlace}`\n        _variables_js__WEBPACK_IMPORTED_MODULE_5__.conditionsDiv.textContent = `Conditions: ${response.currentConditions.conditions}`\n        _variables_js__WEBPACK_IMPORTED_MODULE_5__.descripDiv.textContent=`Description: ${response.description}`\n        _variables_js__WEBPACK_IMPORTED_MODULE_5__.tempDiv.textContent = `Temperature: ${response.currentConditions.temp} F`;\n        _variables_js__WEBPACK_IMPORTED_MODULE_5__.minTemp.textContent=`Min Temp: ${response.days[0].tempmin} F`\n        _variables_js__WEBPACK_IMPORTED_MODULE_5__.maxTemp.textContent=`Max Temp: ${response.days[0].tempmax} F`\n  \n        _variables_js__WEBPACK_IMPORTED_MODULE_5__.cloudCoverDiv.textContent = `Cloud Cover: ${response.currentConditions.cloudcover}`;\n        _variables_js__WEBPACK_IMPORTED_MODULE_5__.precipDiv.textContent = `Precipitation: ${response.currentConditions.precip}`;\n        _variables_js__WEBPACK_IMPORTED_MODULE_5__.humidityDiv.textContent = `Humidity: ${response.currentConditions.humidity}`;\n        _variables_js__WEBPACK_IMPORTED_MODULE_5__.windSpeed.textContent=`Wind Speed: ${response.currentConditions.windspeed}`\n       \n        _variables_js__WEBPACK_IMPORTED_MODULE_5__.leftSide.setAttribute('style','width:500px;')\n        _variables_js__WEBPACK_IMPORTED_MODULE_5__.leftSide.setAttribute(\"style\", \"padding:10px;\")\n        _variables_js__WEBPACK_IMPORTED_MODULE_5__.rightSide.setAttribute('style','width:500px;')\n        \n        while(_variables_js__WEBPACK_IMPORTED_MODULE_5__.buttonDiv.firstChild){\n          _variables_js__WEBPACK_IMPORTED_MODULE_5__.buttonDiv.removeChild(_variables_js__WEBPACK_IMPORTED_MODULE_5__.buttonDiv.lastChild)\n        }\n  \n        const celButton = document.createElement('button')\n        celButton.classList.add('tempButton')\n        celButton.textContent = 'Celsius'\n        celButton.addEventListener('click', () => {\n          _variables_js__WEBPACK_IMPORTED_MODULE_5__.tempDiv.textContent=`Temperature: ${(convertToCelsius(`${response.currentConditions.temp}`))} C`\n          _variables_js__WEBPACK_IMPORTED_MODULE_5__.minTemp.textContent=`Min Temp: ${(convertToCelsius(`${response.days[0].tempmin}`))} C`\n          _variables_js__WEBPACK_IMPORTED_MODULE_5__.maxTemp.textContent=`Max Temp: ${(convertToCelsius(`${response.days[0].tempmax}`))} C`\n        })\n        _variables_js__WEBPACK_IMPORTED_MODULE_5__.buttonDiv.appendChild(celButton)\n  \n        const farButton = document.createElement('button')\n        farButton.classList.add('tempButton')\n        farButton.textContent = 'Fahrenheit'\n        farButton.addEventListener('click', () => {\n          _variables_js__WEBPACK_IMPORTED_MODULE_5__.tempDiv.textContent=`Temperature: ${response.currentConditions.temp} F`\n          _variables_js__WEBPACK_IMPORTED_MODULE_5__.minTemp.textContent=`Min Temp: ${response.days[0].tempmin} F`\n          _variables_js__WEBPACK_IMPORTED_MODULE_5__.maxTemp.textContent=`Max Temp: ${response.days[0].tempmax} F`\n        })\n        _variables_js__WEBPACK_IMPORTED_MODULE_5__.buttonDiv.appendChild(farButton)\n  \n  \n      })\n  }\n\n  \n\n//# sourceURL=webpack://weather-app/./src/weatherInfo.js?");

/***/ }),

/***/ "./src/images/cloudy.png":
/*!*******************************!*\
  !*** ./src/images/cloudy.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"94d3043916304b543af6.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/cloudy.png?");

/***/ }),

/***/ "./src/images/partly-cloudy.png":
/*!**************************************!*\
  !*** ./src/images/partly-cloudy.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"af096e0e0dcdf4e848a5.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/partly-cloudy.png?");

/***/ }),

/***/ "./src/images/rain.png":
/*!*****************************!*\
  !*** ./src/images/rain.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"210b8eadfab639546b02.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/rain.png?");

/***/ }),

/***/ "./src/images/snow.png":
/*!*****************************!*\
  !*** ./src/images/snow.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7d1fe8495abca370df43.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/snow.png?");

/***/ }),

/***/ "./src/images/sun.png":
/*!****************************!*\
  !*** ./src/images/sun.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f5f3731430c79558cc22.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/sun.png?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;