webpackJsonp([4],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ("moduleA");


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
 //同步加载lodash
undefined/*! require.include ./moduleA */;
//subPageA和subPageB引入了moduleA,pageA同时引入了subPageA和subPageB，所以在pageA中直接引入moduleA
var page = "subPageA";
if (page === "subPageA") {
  //   require.ensure(
  //     ["./subPageA"],
  //     function(subPageA) {
  //         console.log(subPageA);

  //       //var subPageA = require("./subPageA");//z必须要写，不然subPageA里面的代码不会执行
  //     }
  //   );
  // 也可以直接是使用import引入
  __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 1)).then(function(
    /* webpackChunkName:'subPageA' */ //定义模块名称，如果将subPageA于subPageB定义为相同的名字，2个模块会合并为一个
    subPageA
  ) {
    console.log(subPageA);
  });
} else if (page === "subPageB") {
  __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 2)).then(function(
    subPageB
  ) {
    console.log(subPageB);
  });
  //   require.ensure(
  //     ["./subPageB"],
  //     function() {
  //       var subPageB = require("./subPageB");
  //     },
  //     "subPageB"
  //   );
}

// 异步加载lodash
// require.ensure(
//   ["lodash"],
//   function() {
//     var _ = require("lodash");
//     _.join(["1", "2", "3"]);
//   },
//   "vendor"
// );
// require.ensure:加载lodash
// var _ = require("lodash");使用lodash
/* harmony default export */ __webpack_exports__["default"] = ("pageA");


/***/ })
],[4]);