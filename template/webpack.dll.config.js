const path = require('path');
const webpack = require('webpack');

{{#if_eq state 'vuex'}}
const vendors = [
    'vuex', 'vuex-router-sync'
];
{{/if_eq}}
{{#if_eq state 'revue'}}
const vendors = [
    'revuejs'
];
{{/if_eq}}
{{#if_eq state 'mobx'}}
const vendors = [
    'vue-mobx', 'mobx'
];
{{/if_eq}}

module.exports = {
    mode: 'development',
    entry: {
        vendor: vendors.concat('vue', 'vue-router', 'async-await-error-handling', 'axios')
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].dll.js',
        // 定义输出：window.${output.library}
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, './dist', '[name]-manifest.json'),
            // 和 output.library 一样即可
            name: '[name]_library'
        })
    ]
};
