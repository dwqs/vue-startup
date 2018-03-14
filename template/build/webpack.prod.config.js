const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const utils = require('./utils');
const baseWebpackConfig = require('./webpack.base.config');
const config = require('../config');

const env = process.env.NODE_ENV || 'development';

module.exports = merge(baseWebpackConfig, {
    entry: {
        app: utils.resolve('src/page/index.js')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                type: 'javascript/auto',
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: utils.extractCSS(),
                        less: utils.extractCSS({
                            lang: 'less'
                        })
                    }
                }
            }
        ]
    },
    output: {
        filename: utils.assetsPath('js/[name].[chunkhash:8].js'),
        path: config[env].assetsRoot,
        publicPath: config[env].assetsPublicPath,
        sourceMapFilename: '[file].map',
        chunkFilename: utils.assetsPath('js/[name].[chunkhash:8].js')
    },
    optimization: {
        // chunk for the webpack runtime code and chunk manifest
        runtimeChunk: {
            name: 'manifest'
        },
        // https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: -20,
                    chunks: 'all'
                }
            }
        }
    },
    devtool: config[env].productionSourceMap ? '#source-map' : false,
    plugins: [
        new webpack.HashedModuleIdsPlugin(),

        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].[contenthash:8].css')
        }),

        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),

        // gzip
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: "gzip",
            test: /\.(js|html|less|css)$/,
            threshold: 10240,
            minRatio: 0.8
        }),

        new UglifyJsPlugin({
            parallel: true,
            cache: '.cache/',
            sourceMap: true,
            uglifyOptions: {
                compress: {
                    warnings: false,
                    /* eslint-disable */
                    drop_debugger: true,
                    drop_console: true
                },
                mangle: true
            }
        }),

        new WebpackMd5Hash()
    ]
});
