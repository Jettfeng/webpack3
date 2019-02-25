webpackJsonp([2,0,1],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ("moduleA");


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moduleA__ = __webpack_require__(0);

console.log("this is subPageA");

/* harmony default export */ __webpack_exports__["default"] = ("subPageA");


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moduleA__ = __webpack_require__(0);

console.log("this is subPageB");
/* harmony default export */ __webpack_exports__["default"] = ("subPageB");


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subPageA__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subPageB__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);




undefined/*! require.include ./moduleA */;

var page = "subPageB";
if (page === "subPageA") {
  new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 1)).then(function(
    subPageA
  ) {
    console.log(subPageA);
  });
} else if (page === "subPageB") {
  new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 2)).then(function(
    subPageB
  ) {
    console.log(subPageB);
  });
}

/* harmony default export */ __webpack_exports__["default"] = ("pageB");


/***/ })
],[7]);