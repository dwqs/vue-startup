const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');   

const getHappyPackConfig = require('./build/happypack');
const pkg = require('./package.json');
let dependencies = Object.keys(pkg['dependencies']);

dependencies = dependencies.map(item => {
    if (item === 'vue') {
        return 'vue/dist/vue.esm.js';
    }
    if (item === 'normalize.css') {
        return 0;
    }
    return item;
}).filter(item => !!item);

const env = process.env.NODE_ENV || 'development';

const dllConfig = {
    context: process.cwd(),
    mode: env,
    entry: {
        vendor: dependencies
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'happypack/loader?id=js'
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].dll.js',
        // 定义输出：window.${output.library}
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dist', '[name]-manifest.json'),
            // 和 output.library 一样即可
            name: '[name]_library'
        }),

        new HappyPack(getHappyPackConfig({
            id: 'js',
            loaders: [{
                path: 'babel-loader',
                query: {
                    cacheDirectory: true
                }
            }] 
        }))
    ]
};

module.exports = dllConfig;
