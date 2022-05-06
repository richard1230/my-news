const { resolve } = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 模式：开发  生产
  mode: 'development', // production
  // source-map
  devtool: 'source-map',
  // 优化，禁止压缩 最小化
  optimization: {
    minimize: false
  },
  // 入口文件  多文件入口
  entry: {
    index: resolve(__dirname, './src/js/index.js'),
    detail: resolve(__dirname, './src/js/detail.js'),
    collections: resolve(__dirname, './src/js/collections.js'),
  },
  // 输出/打包设置
  output: {
    // 路径
    path: resolve(__dirname, './dist'),
    // 打包后的文件名
    filename: 'js/[name].js'
  },
  // 模块设置
  module: {
    // 模块匹配规则
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: resolve(__dirname, 'node_modules'),
        query: {
          'presets': ['latest']
        }
      },
      {
        test: /\.tpl$/,
        loader: 'ejs-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',//多个loader的写法,注意:顺序是从下往上,先postcss-loader--->css-loader---->style-loader
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [autoprefixer('last 5 versions')];
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [autoprefixer('last 5 versions')];
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|woff|eot|svg|ttf)$/i,
        loaders: 'url-loader?limit=1024&name=img/[name]-[hash:16].[ext]'
        //如果文件大小小于1024字节,就将其编译为base64的编码
        //中括号中为变量,存放位置为dist/img/图片名
      }
    ]
  },
  // 插件配置
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, 'src/index.html'),
      title: '新闻头条',
      chunks: ['index'],
      chunksSortMode: 'manual',
      excludeChunks: ['node_modules'],
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'detail.html',
      template: resolve(__dirname, 'src/detail.html'),
      title: '新闻详情',
      chunks: ['detail'],
      chunksSortMode: 'manual',
      excludeChunks: ['node_modules'],
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'collections.html',
      template: resolve(__dirname, 'src/collections.html'),
      title: '我的新闻',
      chunks: ['collections'],//引用collections
      chunksSortMode: 'manual',//可能有多个chunk,
      excludeChunks: ['node_modules'],
      hash: true,//配置hash,js打包好之后,引入的时候后面需要一串随机字符串
      minify: {
        removeComments: true,//表示删掉注释
        collapseWhitespace: true//去掉换行
      }
    }),


  ],
  // 开发服务器的配置
  devServer: {
    watchOptions: {
      ignored: /node_modules/
    },
    open: true,//表示启动的时候打开浏览器
    host: 'localhost',
    port: 3002
  }
}