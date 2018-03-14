const webpack = require('webpack');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const utils = require('./utils');
const baseWebpackConfig = require('./webpack.base.config');
const config = require('../config');

const url = `http://localhost:${config.dev.port}`;
const env = process.env.NODE_ENV || 'development';

module.exports = merge(baseWebpackConfig, {
    entry: {
        app:[
            'webpack/hot/dev-server',
            `webpack-dev-server/client?http://localhost:${config[env].port}/`,
            utils.resolve('src/page/index.js')
        ]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                type: 'javascript/auto',
                use: ['vue-loader']
            }
        ]
    },
    devtool: '#source-map',
    output: {
        filename: '[name].js',
        path: config[env].assetsRoot,
        publicPath: config[env].assetsPublicPath,
        sourceMapFilename: '[file].map',
        chunkFilename: '[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),

        new webpack.DllReferencePlugin({
            context: __dirname,
            // 引入 dll 生成的 manifest 文件
            manifest: utils.resolve('dist/vendor-manifest.json')
        }),

        new OpenBrowserPlugin({ url: url })
    ],
    // see https://webpack.github.io/docs/webpack-dev-server.html
    devServer: {
        hot: true,
        noInfo: false,
        quiet: false,
        port: config[env].port,
        // #https://github.com/webpack/webpack-dev-server/issues/882
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        inline: true,
        // 解决开发模式下 在子路由刷新返回 404 的情景
        historyApiFallback: {
            index: config[env].assetsPublicPath
        },
        stats: {
            colors: true,
            modules: false
        },
        contentBase: config[env].contentBase,
        publicPath: config[env].assetsPublicPath
    }
});
