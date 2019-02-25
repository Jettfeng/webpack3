import "./subPageA";
import "./subPageB";

import * as _ from "lodash";
require.include("./moduleA");

var page = "subPageB";
if (page === "subPageA") {
  import(/* webpackChunkName:'subPageA' */ "./subPageA").then(function(
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
}

export default "pageB";
