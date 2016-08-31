'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const postcss = [
  require('autoprefixer')({
    browsers: ['last 3 versions']
  })
]

module.exports = {
  entry: {
    app: './client/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist/assets'),
    filename: '[name].js',
    publicPath: './assets'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css', '.json'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'assets': path.resolve(__dirname, '../client/assets'),
      'vue': 'vue/dist/vue.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loaders: ['vue']
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: [/node_modules/]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
          name: 'img/[name].[ext]?[hash:7]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'fonts/[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  postcss,
  vue: {
    loaders: {},
    postcss
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Zenbot Dashboard',
      template: __dirname + '/index.html',
      filename: '../index.html',
      inject: true,
      favicon: 'client/assets/zen-logo.png'
    })
  ]
}
