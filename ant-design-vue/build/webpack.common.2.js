const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const config = require("../config");
const HappyPack = require("happypack");
const happyThreadPool = HappyPack.ThreadPool({ size: 4 }); // 开4个线程
module.exports = {
  entry: {
    app: "./src/main.js"
  },
  output: {
    publicPath: "./", //这里要放的是静态资源CDN的地址
    filename: config.assetsPath("js/[name].[chunkhash].js"),
    chunkFilename: config.assetsPath("js/[id].[chunkhash].js"),
    path: config.resolve("dist")
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack4-demo",
      // filename: 'public/index.html',
      template: "public/index.html"
    }),
    new HappyPack({
      id: "babel",
      loaders: [
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      ],
      threadPool: happyThreadPool,
      verbose: true
    }),
    new HappyPack({
      id: "css",
      loaders: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === "development",
            reloadAll: true
          }
        },
        {
          loader: "css-loader",
          options: {
            minimize: true,
            sourceMap: false
          }
        }
      ],
      threadPool: happyThreadPool
    }),

    new HappyPack({
      id: "less",
      loaders: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === "development",
            reloadAll: true
          }
        },
        {
          loader: "css-loader",
          options: {
            minimize: true,
            sourceMap: false
          }
        },
        {
          loader: "less-loader",
          options: {
            minimize: true,
            sourceMap: false
          }
        }
      ],
      threadPool: happyThreadPool
    })
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
        include: [config.resolve("src")],
        use: "happypack/loader?id=babel"
      },
      {
        test: /\.less$/,
        loaders: [MiniCssExtractPlugin.loader, "happypack/loader?id=less"]
      },
      {
        test: /\.css$/,
        loaders: [MiniCssExtractPlugin.loader, "happypack/loader?id=css"]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        exclude: /(node_modules|bower_components)/,
        include: [config.resolve("src")],
        use: [
          {
            loader: "url-loader",
            options: {
              name: config.assetsPath("images/[name].[hash:7].[ext]"),
              limit: 10 * 1024
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          name: config.assetsPath("font/[name].[hash:7].[ext]"),
          limit: 10 * 1024
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": config.resolve("src")
    }
  }
};
