const path = require('path');
const webpack = require('webpack');

const pkg = require('./package.json');
let dependencies = Object.keys(pkg['dependencies']);

dependencies = dependencies.map(item => {
    if (item === 'vue') {
        return 'vue/dist/vue.esm.js';
    }
    return item;
}).filter(item => item !== 'normalize.css');

const env = process.env.NODE_ENV || 'development';

const dllConfig = {
    context: process.cwd(),
    mode: env,
    entry: {
        vendor: dependencies
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
        })
    ]
};

module.exports = dllConfig;
