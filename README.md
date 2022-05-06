## 依赖相关说明

```
"babel-core": "^6.26.3",
"babel-loader": "^7.1.5",
"babel-preset-latest": "^6.24.1",
```

上面这三个主要是将ES6等以上的转变为ES5;

`babel-plugin-transform-runtime`:用于使用 async await

```
    "css-loader": "^2.1.1",
    "node-sass": "^4.11.0",(它是配合style-loader的)
postcss-loader": "^3.0.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",//将css放进内部样式表
```

处理sass文件,将其转换为css; 将css放进内部样式表

`"ejs-loader": "^0.3.3",`用于处理模板文件(tpl需要ejs来处理)

`"file-loader": "^3.0.1",`配合`"url-loader": "^1.1.2"`
处理静态文件,比方说图片,字体文件

```
    "autoprefixer": "^9.5.1",
配合
    "postcss-loader": "^3.0.0",

```

加兼容性前缀;

```
"webpack": "^4.30.0",    //打包工具
 "webpack-cli": "^3.3.0",     //打包脚手架
 "webpack-dev-server": "^3.7.2"  //开发模式下的静态服务
```

## 补充依赖
```shell
sudo npm i ejs -D
```



