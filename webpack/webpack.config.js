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
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      //提取公共代码
      name: "common",
      minChunks: 2,
      chunks: ["pageA", "pageB"]
    }),
    // 合并vendor和manifest
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"],
      minChunks: Infinity
    })
    // new webpack.optimize.CommonsChunkPlugin({
    //   //提取公共模块是针对多个entry,单个entry不起作用
    //   name: "vendor", //将lodash和公共代码打包到一起
    //   minChunks: Infinity
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "manifest", //把webpack生成的代码和vendor分开
    //   minChunks: Infinity
    // })
  ]
};
