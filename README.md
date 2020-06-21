# Care UI - 一个简单的 Vue UI组件

[![Build Status](https://travis-ci.org/ChenNing02/care.svg?branch=master)](https://travis-ci.org/ChenNing02/care)

## 介绍

这是我使用 Vue 造的第一个轮子，目前正在完善中，可能有很多不足地方~

## 开始使用

### 添加CSS文件

使用本框架前，请在CSS中开启 border-box

```html
*, *::before, *::after { box-sizing: border-box; }
```

> IE 8 及以上浏览器支持此样式

### 安装 care-ui

```sh
npm i --save care-ui
# 或
yarn add care-ui
```

### 引入 care-ui

```js
import {CButton, CButtonGroup, CIcon } from 'care-ui'
import 'care-ui/dist/index.css'
export default {
    name: 'App',
    components: {
        CButton,
        CButtonGroup,
        CIcon
        ...
    }
}
```


<!-- ## 文档

...

## 提问

...

## 变更记录

...

## 联系方式

...

## 贡献代码

## 运行

```sh
npx parcel index.html
# 或
./node_modules/.bin/parcel index.html
```

如果报错运行：

```sh
npx parcel index.html --no-cache
```

## 打包

```sh
npx parcel build index.js --no-cache --no-minify
​``` -->
