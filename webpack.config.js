const path = require("path");
const outputPath = path.resolve(__dirname, "dist");

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
};
