require.include("./moduleA");
//subPageA和subPageB引入了moduleA,pageA同时引入了subPageA和subPageB，所以在pageA中直接引入moduleA
if (page === "subPageA") {
  require.ensure(
    ["./subPageA"],
    function() {
      var subPageA = require("./subPageA");
    },
    "subPageA"
  );
} else if (page === "subPageB") {
  require.ensure(
    ["./subPageB"],
    function() {
      var subPageB = require("./subPageB");
    },
    "subPageB"
  );
}

require.ensure(
  ["lodash"],
  function() {
    var _ = require("lodash");
    _.join(["1", "2", "3"]);
  },
  "vendor"
);
// require.ensure:加载lodash
// var _ = require("lodash");使用lodash
export default "pageA";
