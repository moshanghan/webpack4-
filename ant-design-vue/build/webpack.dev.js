const merge = require("webpack-merge");
const path = require('path');
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:  "[name].css" ,
      chunkFilename:"[name].[hash].css"
    })
  ],
  module: {
    rules: [

    ]
  }
});
