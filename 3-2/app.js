import sum from "./sum"; //es6模式
var minus = require("./minus"); //common.js模式
console.log("sum(23,24)=", sum(23, 24));
console.log("minus(24,17)=", minus(24, 17));

// AMD模式
require(["./muti"], function(muti) {
  console.log("muti(2,3)=", muti(2, 3));
});
