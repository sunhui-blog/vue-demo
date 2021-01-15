const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development';

const defaultPlugins = [
  new webpack.DefinePlugin({
    // 主要作用是在此处可以根据isdev配置process.env,一是可以在js代码中可以获取到process.env,
    'process.env': {
      // 二是webpack或则vue等根据process.env如果是development,会给一些特殊的错误提醒等,而这些特殊项在正式环境是不需要的
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HTMLPlugin() // 引入HTMLPlugin
]

// dirname表示文件相对于工程的路径
module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  mode: 'none',
  plugins: defaultPlugins.concat([
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]),
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader'
      },
      { // 通过vue-loader来识别以vue结尾的文件
        test: /\.css$/,
        // css的处理方式不同，有嵌入在页面style标签里的，有从外部文件引入的，我们这里用use来声明
        use: [
          'style-loader', // 接受潜在页面内部的style标签的文件。
          'css-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      { // 处理图片文件
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]-aaa.[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      // 确定vue的构建版本
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
}
