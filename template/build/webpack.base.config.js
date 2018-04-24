const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HappyPack = require('happypack');   

const getHappyPackConfig = require('./happypack');
const config = require('../config');
const utils = require('./utils');

const env = process.env.NODE_ENV || 'development';
const apiPrefix = env === 'development' ? config[env].prefix : config[env].prefix;

console.log('---------env------:', env, '------apiPrefix-------:', apiPrefix);

module.exports = {
    mode: env,
    context: utils.resolve('src'),
    module: {
        noParse: [/static|assets/],
        rules: [
            {
                test: /\.js$/,
                type: 'javascript/auto',
                exclude: /node_modules/,
                loader: 'happypack/loader?id=js'
            },
            {
                test: /\.vue$/,
                type: 'javascript/auto',
                use: [{
                    loader: 'happypack/loader?id=vue'
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                type: 'javascript/auto',
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: utils.assetsPath('images/[name].[ext]')
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                type: 'javascript/auto',
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('fonts/[name].[ext]')
                    }
                }]
            }
        ]
    },

    resolve: {
        extensions: ['.vue', '.js', '.json'],
        modules: [utils.resolve('node_modules')],
        alias: {
            '@src': utils.resolve('src'),
            '@components': utils.resolve('src/components'),
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    resolveLoader: {
        modules: [utils.resolve('node_modules')]
    },

    performance: {
        hints: false
    },

    externals: {
        'es6-promise': 'window.ES6Promise'
    },

    stats: {
        children: false
    },

    plugins: [
        new HappyPack(getHappyPackConfig({
            id: 'js',
            loaders: [{
                path: 'babel-loader',
                query: {
                    cacheDirectory: true
                }
            }] 
        })),

        // https://vue-loader.vuejs.org/en/configurations/extract-css.html
        // options: {
        //     loaders: {
        //         css: utils.extractCSS(),
        //         less: utils.extractCSS({
        //             lang: 'less'
        //         })
        //     }
        // }
        new HappyPack(getHappyPackConfig({
            id: 'vue',
            loaders: ['vue-loader']
        })),
        
        // copy assets
        new CopyWebpackPlugin([
            { 
                context: '..', 
                from: 'static/**/*', 
                to: utils.resolve('dist'), 
                force: true,
                ignore: ['.*']
            }, 
            {
                context: '../src',
                from: 'assets/**/*',
                to: utils.resolve('dist'),
                force: true,
                ignore: ['.*']
            }
        ]),

        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            env: env,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false
            }
        }),

        new ProgressBarPlugin()
    ]
};
