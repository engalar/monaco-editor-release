// webpack.config.js
const path = require("path");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new MonacoWebpackPlugin()],
  devServer: {
    static: [
      { directory: path.join(__dirname, "public") },
      { directory: path.join(__dirname, "dist") },
    ],
    port: 3000,
  },
};
