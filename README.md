# vue-startup

A template with webpack 4 + vuejs 2 setup for projects startup.

## Install/安装

Install it by [chare](https://github.com/dwqs/chare) or [vue-cli](https://github.com/vuejs/vue-cli)/可以通过 [chare](https://github.com/dwqs/chare) 或者 [vue-cli](https://github.com/vuejs/vue-cli) 来安装：

```
chare init dwqs/vue-startup your-project-name -o remote-url-of-your-project
```

Above command will init your project with this template, and associate it with the remote url./上述命令会初始你的项目, 并将你的项目关联到远程的 `remote-url`.

## 字段说明

如果通过 [chare](https://github.com/dwqs/chare) 或者 `vue-cli` 来安装, 在安装的过程中，会需要输入一些基本信息，可以查看 [meta.js](https://github.com/dwqs/vue-startup/blob/master/meta.js) 来了解. 咨询的信息都有默认值, 一般选择默认就行, 模板生成之后也可以再更改.

一些字段说明如下:

 * **port**: 客户端的端口号, 默认是 3000
 * **state**: 状态管理工具选择，目前支持 [revuejs](https://github.com/dwqs/revuejs) / vuex / mobx
 * **prefix**: Ajax 请求的前缀, 如 `http://test.com`, 默认是 `''`.
