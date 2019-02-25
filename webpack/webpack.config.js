var webpack = require("webpack"); //局部webpack作为依赖，全局webpack作为工具
var path = require("path");
module.exports = {
  entry: {
    pageA: "./src/pageA.js",
    pageB: "./src/pageB.js",
    vendor: ["lodash"] //第三方包
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "./dist/",
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      async: "async-common", //异步公共模块
      children: true,
      minChunks: 2
    }),
    // 合并vendor和manifest
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"],
      minChunks: Infinity
    })
  ]
};
