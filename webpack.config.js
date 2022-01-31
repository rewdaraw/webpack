const path = require("path");
const outputPath = path.resolve(__dirname, "dist");
const HtmlWebPackPlugin = require("html-webpack-plugin");

console.log({ outputPath });

module.exports = {
  mode: "development",
  // bundle対象の設定
  entry: "./src/index.js",
  // bundleしたファイルをどこに出力するのか
  output: {
    path: outputPath,
    filename: "main.js",
  },
  module: {
    rules: [
      // test: loaderを適用するファイル名, use: loader名
      // ※ useの中は逆順に適用されていく

      // html
      { test: /\.html$/, use: ["html-loader"] },

      // css
      { test: /\.css$/, use: ["style-loader", "css-loader"] },

      // scss
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },

      // image
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 2048,
              name: "./images/[name].[ext]",
            },
          },
        ],
      },

      // babel
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: outputPath,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
