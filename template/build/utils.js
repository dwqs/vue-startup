const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('../config');

const env = process.env.NODE_ENV || 'development';

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

function assetsPath (_path) {
    const assetsSubDirectory = env === 'production' 
        ? config[env].assetsSubDirectory
        : config[env].assetsSubDirectory;

    return path.posix.join(assetsSubDirectory, _path);
}

function extractCSS (opts) {
    // only support css/less
    const options = opts || {};

    const cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: env === 'production',
            sourceMap: env === 'production'
        }
    };

    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: env === 'production'
        }
    };

    const loaders = [cssLoader, postcssLoader];
    if (options.lang === 'less') {
        loaders.push({
            loader: 'less-loader',
            options: {
                sourceMap: env === 'production'
            }
        });
    }

    if (env === 'production') {
        return ExtractTextPlugin.extract({
            use: loaders,
            fallback: 'vue-style-loader'
        });
    } else {
        return ['vue-style-loader'].concat(loaders);
    }
}

module.exports = {
    resolve: resolve,
    assetsPath: assetsPath,
    extractCSS: extractCSS
};
