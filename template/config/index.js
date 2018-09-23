const path = require('path')
const myIP = require('my-ip')

module.exports = {
  development: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    contentBase: path.resolve(__dirname, '../dist'),
    port: {{port}},
    prefix: '',
    ip: myIP()
  },
  production: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    prefix: '',
    productionSourceMap: false
  }
}
