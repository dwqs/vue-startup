'use strict';

let path = require('path');
let webpack = require('webpack');
let HappyPack = require('happypack');   //loader 多进程处理

let getHappyPackConfig = require('./happypack');

let devConfig = require('./webpack.base.config');
let config = require('../config');

devConfig.module.rules.unshift({
    test: /\.less$/,
    use: ['happypack/loader?id=less-dev']
}, {
    test: /\.css$/,
    use: ['happypack/loader?id=css-dev']
});

devConfig.plugins = (devConfig.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
        'process.env': config.dev.env
    }),

    new HappyPack(getHappyPackConfig({
        id: 'less-dev',
        loaders: ['vue-style-loader','css-loader', 'postcss-loader', 'less-loader']
    })),

    new HappyPack(getHappyPackConfig({
        id: 'css-dev',
        loaders: ['vue-style-loader','css-loader', 'postcss-loader']
    })),

    new webpack.DllReferencePlugin({
      context: __dirname,
      //引入 dll 生成的 manifest 文件
      manifest: require('../{{path}}/vendor-manifest.json')
    }),

    new webpack.NoEmitOnErrorsPlugin(),
]);

// see https://webpack.github.io/docs/webpack-dev-server.html
devConfig.devServer = {
    hot: true,
    noInfo: false,
    quiet: false,
    port: config.dev.port,
    inline: true,
    historyApiFallback: true,
    stats: 'normal',
    contentBase: config.dev.contentBase,
    publicPath: config.dev.assetsPublicPath
};

module.exports = Object.assign({},devConfig,{
    entry: {
        app:[
            'webpack/hot/dev-server',
            `webpack-dev-server/client?http://localhost:${config.dev.port}/`,
            path.resolve(__dirname, '../src/page/index.js')
        ]
    },
    output: {
        filename: "[name].js",
        path: config.dev.assetsRoot,
        publicPath: config.dev.assetsPublicPath,
        sourceMapFilename: '[file].map',
        chunkFilename: "[name].js"
    },
    devtool:'cheap-module-eval-source-map'
});
