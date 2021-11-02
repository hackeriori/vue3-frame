const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin') // 引入压缩插件
const {resolve} = require('path')
const name = 'oneMap';

module.exports = {
  //这里只定义一个入口，html通过index.ts带入，定义两个下面的output会错误
  entry: resolve(__dirname, '../out/index.ts'),
  output: {
    libraryTarget: "umd",
    library: name.slice(0, 1).toUpperCase() + name.slice(1),
    libraryExport: 'default',
    path: resolve(__dirname, '../dist'),
    filename: name + ".js",
    chunkFilename: name + ".[name].js",
  },
  module: {
    rules: [
      //将ts文件编译为js,将ts后缀增加到vue文件以编译vue
      {
        test: /\.tsx?$/i,
        use: [{
          loader: "ts-loader",
          options: {
            appendTsSuffixTo: [/\.vue$/i],
          }
        }],
      },
      //打包时处理html文件
      {
        test: /\.html$/i,
        use: [
          {loader: "file-loader?name=[name].[ext]"},
          {loader: "extract-loader"},
          {
            loader: "html-loader",
            options: {
              //不处理src
              sources: false,
            }
          }
        ],
      },
      //编译css到js,再通过style-loader添加到html的style标签中
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
        // use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      // cleanAfterEveryBuildPatterns: ['outLib', name + '.js.LICENSE.txt']
    }),
    new MiniCssExtractPlugin({
      filename: name + '.css'
    }),
    new CssMinimizerPlugin(),
    new TerserPlugin({
      terserOptions: {
        format: {
          comments: false,
        },
        compress: {
          drop_console: false,
          drop_debugger: true,
          // pure_funcs: ["console.log", 'debugger']
        }
      },
      extractComments: false, // 禁止产生license等评论文件
    }),
  ],
  mode: "production",
};
