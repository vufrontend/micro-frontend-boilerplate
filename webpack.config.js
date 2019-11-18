const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserJSPlugin = require("terser-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const AntDesignThemePlugin = require("antd-theme-webpack-plugin")
const ManifestPlugin = require("webpack-manifest-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const options = {
  antDir: path.join(__dirname, "./node_modules/antd"),
  stylesDir: path.join(__dirname, "./src/styles"),
  varFile: path.join(__dirname, "./src/styles/variables.less"),
  mainLessFile: path.join(__dirname, "./src/styles/theme.less"),
  themeVariables: [
    "@primary-color",
    "@secondary-color",
    "@text-color",
    "@text-color-secondary",
    "@heading-color",
    "@layout-body-background",
    "@btn-primary-bg",
    "@layout-header-background"
  ],
  indexFileName: "index.html",
  generateOnce: false,
  lessUrl: "https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js",
  publicPath: ""
}

module.exports = {
  output: {
    path: path.join(__dirname, "./build"),
    publicPath: "/"
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    antd: "antd"
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        default: false
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development",
              // if hmr does not work, this is a forceful method.
              reloadAll: true
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              strictMath: true,
              noIeCompat: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      favicon: "./public/favicon.ico"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    new AntDesignThemePlugin(options),
    new ManifestPlugin()
  ]
}
