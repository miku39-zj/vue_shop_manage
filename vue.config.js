/*
 * @Description: 
 * @Date: 2021-05-07 19:32:33
 */

const path = require('path')
// 去除console
const UglifyJsPlugin = require("terser-webpack-plugin");
function resolve(dir)
{
  return path.join(__dirname, dir)
}

const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const IS_DEV = ["development"].includes(process.env.NODE_ENV);

module.exports = {
  lintOnSave: false,
  devServer: {
    hot: true,
    open:true
  },
  chainWebpack: config => {
    // use svg
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons/svg")) // url-loader不处理
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
  },
  configureWebpack: config => {
    if (IS_PROD) {
      config.plugins.push(
        new UglifyJsPlugin({
          terserOptions: {
            warnings: false,
            compress: {
              drop_debugger: true, // 注释console
              drop_console: true,
              pure_funcs: ["console.log"] // 移除console
            }
          },
          extractComments: false, // 是否将注释提取到一个单独的文件中
          sourceMap: false,
          parallel: true
        })
      );
    }
  },
}