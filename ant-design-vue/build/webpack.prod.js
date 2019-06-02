const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const config = require("../config");
module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // filename:"[name].[hash].css",
      filename: config.assetsPath("css/[name].[hash].css"),
      chunkFilename: config.assetsPath("css/[id].[hash].css")
      // chunkFilename: "css/[id].[hash].css"
    })
  ],
  module: {}
});
