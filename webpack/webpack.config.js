var path = require("path");
module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insertInto: "#app", //将css插入某个元素下
              singleton: true,
              transform: "./css.transform.js"
            }
          },
          {
            loader: "css-loader"
          }
          // {
          //   loader: "style-loader"
          // },
          // {
          //   loader: "css-loader"
          // }
        ]
      }
    ]
  }
};
