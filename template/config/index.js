'use strict';

let path = require('path');

module.exports =  {
    dev:{
        env: 'development',
        assetsRoot: path.resolve(__dirname, '../{{path}}'),
        assetsPublicPath: '{{publicPath}}',
        contentBase: path.resolve(__dirname, '../{{path}}'),
        port: {{port}},
        prefix: '{{prefix}}'
    },
    build:{
        env: 'production',
        assetsRoot: path.resolve(__dirname, '../{{path}}'),
        assetsPublicPath: '{{publicPath}}',
        prefix: '{{prefix}}'
    }
}
