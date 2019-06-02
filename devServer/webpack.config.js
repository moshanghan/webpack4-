const path =require('path')

module.exports = {
  devtool:'source-map',
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, 'dist/static'),
    filename: "js/bundle.js",
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          name:'static/font/[name].[hash:7].[ext]',
          limit: 10*1024
        }
      }
    ]
  },
};
