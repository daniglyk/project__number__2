const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const fileLoader = require("file-loader");
const urlLoader = require("url-loader");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "production",
  entry: "./index.js",
  output: { path: path.resolve(__dirname, "dist"), filename: "main.js" },
  devServer: {
    port: 3800,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `./src/${filename("css")}`,
    }),
    
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: '/\.(js|jsx)$/',
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
        type: "asset/resource",
        generator: {
          filename: "src/images/[name][ext]",
        },
      },
      {
        test : /\.(png|jp(e*)g|svg)$/,
        use : {
          loader: "file-loader",
          options: {
            name: "images/[name].[hash].[ext]"
          }
        }
      },
      {
        test : /\.(png|jp(e*)g|svg)$/,
        use : [{
          loader : 'url-loader',
          options : {
            limit : 8000,
            name : 'images/[hash]-[name].[ext]'
          }
        }]}
    ],
  },
};
