###vue3项目框架

项目初始化
```
npm init -y
```
安装typescript
```
npm i -D typescript
```
创建配置文件 建议直接复制tsconfig.json
```
tsc --init
```
安装webpack
```
npm i -D webpack webpack-cli webpack-dev-server
```
其他 注意vue-loader需要安装16以上版本
```
npm i -D clean-webpack-plugin css-loader extract-loader file-loader html-loader html-webpack-plugin less less-loader mini-css-extract-plugin css-minimizer-webpack-plugin terser-webpack-plugin style-loader ts-loader url-loader vue-loader @vue/compiler-sfc webpack-merge
```
开发相关
```
npm i axios vue@next element-plus
```

运行脚本
```
    "运行": "webpack serve --mode=development --node-env=development -c ./webpackConfig/webpack.base.config.js -c ./webpackConfig/webpack.dev.config.js -m",
    "编译": "webpack --mode=production --node-env=production -c ./webpackConfig/webpack.base.config.js -c ./webpackConfig/webpack.pro.config.js -c ./webpackConfig/webpack.pro.lite.config.js -m"
```
