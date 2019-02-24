module.exports = {
  entry: {
    app: "./app.js"
  },
  output: {
    filename: "[name].[hash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            //options 可以移入.babelrc文件中
            // presets: [
            //   [
            //     "@babel/preset-env",
            //     {
            //       targets: [" > 1%", "last 2 versions"] //支持全球大于1%的浏览器,最新2个版本的浏览器
            //      // targets: "chrome 52"
            //     }
            //   ]
            // ]
          }
        },
        exclude: /(node_modules|bower_components)/ //不包含
      }
    ]
  }
};
