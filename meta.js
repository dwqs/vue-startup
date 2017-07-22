module.exports = {
  "prompts": {
      "name": {
          "type"    : "string",
          "required": false,
          "message" : "Project name",
          "default" : "vue-startup"
      },
      "version": {
          "type"    : "string",
          "message" : "Project version",
          "default" : "0.0.1"
      },
      "description": {
          "type"    : "string",
          "required": false,
          "message" : "Project description",
          "default" : "A new Vue.js project"
      },
      "author": {
          "type"   : "string",
          "message": "Author"
      },
      "port": {
          "type"    : "string",
          "required": false,
          "message" : "client port",
          "default" : 3000
      },
      "path": {
          "type"    : "string",
          "required": false,
          "message" : "Webpack's outputPath, starts with dirName, eg:'dist' or 'dist/build'",
          "default" : "dist"
      },
      "publicPath": {
          "type"    : "string",
          "required": false,
          "message" : "Webpack dev server's publicPath, starts with '/' and ends with '/'",
          "default" : "/"
      },
      "prefix": {
          "type"    : "string",
          "required": false,
          "message" : "the host name for Ajax request",
          "default" : ''
      },
      "imageminifying": {
          "type": "confirm",
          "message": "Need image minifying in production?"
      },
      "jquery": {
          "type": "confirm",
          "message": "Need jQuery(2.1.0, auto import by cdn)?"
      }
  },
  "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dll\n  npm run dev\n\nDocumentation can be found at https://github.com/dwqs/vue-startup"
}
