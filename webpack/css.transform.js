module.exports = function(css) {
  // css参数代表每个css文件
  // 在style-loader把css插入html的时候执行
  console.log(css);
  console.log(window.innerWidth);
  if (window.innerWidth >= 768) {
    return css.replace("red", "green");
  } else {
    return css.replace("red", "orange");
  }
};
