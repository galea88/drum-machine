const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/App.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(mp3|wav)$/i,
        loader: "file-loader",
        options: {
          outputPath: "assets/audio",
        },
      },
      {
        test: /\.(png|jpg)$/i,
        loader: "file-loader",
        options: {
          outputPath: "assets/images",
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "index.html",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
};
