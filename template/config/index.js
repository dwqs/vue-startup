const path = require('path');

module.exports = {
    development: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/',
        assetsSubDirectory: 'static',
        contentBase: path.resolve(__dirname, '../dist'),
        port: {{port}},
        prefix: '{{prefix}}'
    },
    production: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/',
        assetsSubDirectory: 'static',
        prefix: '{{prefix}}',
        productionSourceMap: false
    }
};
