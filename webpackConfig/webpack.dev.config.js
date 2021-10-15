const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

module.exports = {
  resolve: {
    symlinks: false,
  },
  devtool: 'eval-cheap-module-source-map',
  entry: resolve(__dirname, '../src/index.ts'),
  output: {
    pathinfo: false,
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
            transpileOnly: true
          }
        }],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(ttf|eot|woff2?)$/i,
        use: ['url-loader']
      }
    ]
  },
  //测试时使用的模版
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/index.html'),
    })
  ],
  devServer: {
    //自动打开浏览器
    open: true,
    hot: true,
  },
  externals: [
    {
      vue: 'Vue',
      axios: 'axios',
      'element-plus': 'ElementPlus'
    },
  ],
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    runtimeChunk: true
  },
  mode: "development"
};
