import * as _ from "lodash"; //同步加载lodash
require.include("./moduleA");
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
  import(/* webpackChunkName:'subPageA' */ "./subPageA").then(function(
    /* webpackChunkName:'subPageA' */ //定义模块名称，如果将subPageA于subPageB定义为相同的名字，2个模块会合并为一个
    subPageA
  ) {
    console.log(subPageA);
  });
} else if (page === "subPageB") {
  import(/* webpackChunkName:'subPageB' */ "./subPageB").then(function(
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
export default "pageA";
