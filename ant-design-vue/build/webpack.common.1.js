const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const  config =require('../config')
module.exports = {
  entry: {
    app: "./src/main.js"
  },
  output: {
    publicPath: './',  //这里要放的是静态资源CDN的地址
    filename: config.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: config.assetsPath('js/[id].[chunkhash].js'),
    path: config.resolve("dist")
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack4-demo",
      // filename: 'public/index.html',
      template: "public/index.html"
    }),
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        include: [config.resolve('src')],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development",
              reloadAll: true
            }
          },
          "css-loader",
          // 主题定制
          {
            loader: "less-loader", // compiles Less to CSS
            // options: {
            //   modifyVars: {
            //     "primary-color": "#1DA57A",
            //     "link-color": "#1DA57A",
            //     "border-radius-base": "2px"
            //   },
            //   javascriptEnabled: true
            // }
          }
        ]
      },

      {
        test: /\.(png|jpg|gif)$/i,
        exclude: /(node_modules|bower_components)/,
        include: [config.resolve('src')],
        use: [
          {
            loader: "url-loader",
            options: {
              name:config.assetsPath('images/[name].[hash:7].[ext]'),
              limit: 10*1024
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          name:config.assetsPath('font/[name].[hash:7].[ext]'),
          limit: 10*1024
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": config.resolve("src")
    }
  },

};
