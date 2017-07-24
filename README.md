# vue-startup

A template with webpack 3 + vuejs 2 setup for projects startup.

## Install/安装

Install it by [chare](https://github.com/dwqs/chare) or [vue-cli](https://github.com/vuejs/vue-cli)/可以通过 [chare](https://github.com/dwqs/chare) 或者 [vue-cli](https://github.com/vuejs/vue-cli) 来安装：

```
chare init dwqs/vue-startup your-project-name -o remote-url-of-your-project
```

上述命令会初始你的项目, 并将你的项目关联到远程的 `remote-url`. `vue-cli` 目前不能在初始化项目时关联远程仓库.

## 字段说明

如果通过 [chare](https://github.com/dwqs/chare) 或者 `vue-cli` 来安装, 在安装的过程中，会需要输入一些基本信息，可以查看 [meta.js](https://github.com/dwqs/vue-startup/blob/master/meta.js) 来了解. 咨询的信息都有默认值, 一般选择默认就行, 模板生成之后也可以再更改.

一些字段说明如下:

 * **port**: 客户端的端口号, 默认是 3000
 * **path**: 对应 webpack 的 `output.path`, 默认是 `dist`. 如果想指定别的目录, 直接输入 **目录名** 或者 **目录路径**, 不需要以 `/` 开头, 如 `dist/test`, `test` 等, 也不要输入模板已经建立的目录, 如 `build` / `config` 等. 没有特殊要求, 选择默认值就行.
 * **publicPath**: 对应 `output.publicPath`, 默认是 `/`. **如果想指定别的目录, 需要以 `/` 开头, 并以 `/` 结尾,** 如 `/dist/`, `/dist/social/`. 没有特殊要求, 选择默认值就行.
 * **prefix**: Ajax 请求的前缀, 如 `http://test.com`, 默认是 `''`.
 * **jquery**: 是否在项目中引入 jQuery. 如果需要, jQuery 会通过 CDN 的方式引入, 并会被 Webpack 自动 import, 在你需要使用 jQuery 的地方直接通过 `$` 引用就行.
