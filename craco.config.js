const path = require("path")
const WebpackBar = require("webpackbar")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const CracoAntDesignPlugin = require("craco-antd")

const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent")

module.exports = {
  webpack: {
    plugins: [
      new WebpackBar({ profile: true }),
      ...(process.env.NODE_ENV === "development"
        ? [new BundleAnalyzerPlugin({ openAnalyzer: false })]
        : [])
    ]
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        cssLoaderOptions: {
          modules: true,
          getLocalIdent: (context, localIdentName, localName, options) => {
            if (context.resourcePath.includes("node_modules")) {
              return localName
            }
            return getCSSModuleLocalIdent(
              context,
              localIdentName,
              localName,
              options
            )
          }
        },
        customizeThemeLessPath: path.join(__dirname, "src/styles/theme.less")
      }
    }
  ]
}
