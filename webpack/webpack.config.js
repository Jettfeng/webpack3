var webpack = require("webpack"); //局部webpack作为依赖，全局webpack作为工具
var path = require("path");
module.exports = {
  entry: {
    pageA: "./src/pageA.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      minChunks: 2
    })
  ]
};
