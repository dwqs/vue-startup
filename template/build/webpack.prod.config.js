const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HappyPack = require('happypack')  
const WebpackInlineManifestPlugin = require('webpack-inline-manifest-plugin')

const getHappyPackConfig = require('./happypack')
const utils = require('./utils')
const baseWebpackConfig = require('./webpack.base.config')
const config = require('../config')

const env = process.env.NODE_ENV || 'development';
const matchVendorsChunk = /vue|vue-router|axios|async-await-error-handling|mobx|vue-mobx|vuex/

module.exports = merge(baseWebpackConfig, {
  entry: {
    app: [
      // '@babel/polyfill',
      utils.resolve('src/page/index.js')
    ]
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        type: 'javascript/auto',
        loaders: [
          MiniCssExtractPlugin.loader,
          'happypack/loader?id=css'
        ]
      }
    ]
  },
  output: {
    filename: utils.assetsPath('js/[name].[chunkhash:8].js'),
    path: config[env].assetsRoot,
    publicPath: config[env].assetsPublicPath,
    chunkFilename: utils.assetsPath('js/[name].[chunkhash:8].js')
  },
  optimization: {
    minimize: true, // false 则不压缩
    // chunk for the webpack runtime code and chunk manifest
    minimizer: [
      new OptimizeCSSPlugin({
        parser: require('postcss-safe-parser'),
        discardComments: {
          removeAll: true
        }
      }),

      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          }
        },
        parallel: true,
        cache: true,
        sourceMap: false
      })
    ],
    runtimeChunk: {
      name: 'manifest'
    },
    // https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
    splitChunks: {
      cacheGroups: {
        // default: false, // 禁止默认的优化
        vendors: {
          test (chunk) {
            return chunk.context.includes('node_modules') && matchVendorsChunk.test(chunk.context)
          },
          name: 'vendors',
          chunks: 'all'
        },
        commons: {
          // 抽取 demand-chunk 下的公共依赖模块
          name: 'commons',
          minChunks: 3, // 在chunk中最小的被引用次数
          chunks: 'async',
          minSize: 0 // 被提取模块的最小大小
        }
      }
    }
  },
  devtool: config[env].productionSourceMap ? '#source-map' : false,
  plugins: [
    new webpack.HashedModuleIdsPlugin(),

    new HappyPack(getHappyPackConfig({
      id: 'css',
      loaders: utils.extractCSS()
    })),

    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash:8].css')
    }),

    // gzip
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$/,
      threshold: 0,
      minRatio: 0.8
    }),


    new WebpackInlineManifestPlugin({
        name: 'webpackManifest'
    })
  ]
})
