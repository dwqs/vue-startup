'use strict';

let path = require('path');

module.exports =  {
    dev:{
        env: require('./dev.env.js'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/social',
        contentBase: path.resolve(__dirname, '../dist'),
        port: 3000,
        prefix: 'http://followme2.win'
    },
    build:{
        env: require('./prod.env.js'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/social',
        prefix: 'http://followme2.win'
    }
}
