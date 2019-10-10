const CompressionWebpackPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
const isProduction = process.env.NODE_ENV === "production";
module.exports = {
  // 打包到dist文件下
  outputDir: "dist",
  // 静态资源目录
  assetsDir: "static",
  // 关闭生产 SourceMap
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false
  },
  lintOnSave: false,
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader')
  },
  configureWebpack: config => {
    // config.externals = {
    //   vue: 'Vue',
    //   'vue-router': 'VueRouter',
    //   axios: 'axios',
    //   vant: 'vant'
    // }
    if (isProduction) {
      // 打包生产.gz包
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240,
          minRatio: 0.8
        })
      );
      // 添加自定义代码压缩配置
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true
              // drop_console: true
            }
          },
          sourceMap: false,
          parallel: true
        })
      );
    }
  },
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 9551,
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
