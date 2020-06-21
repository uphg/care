
# <a style="text-align: center; color: #0055bb; href="https://chenning02.github.io/care/" target="_blank"></a>

Care 是一个简易实用的 UI 框架，基于 Vue，实现了一些常用的组件目前还在更新中，可兼容 PC / 移动端。

[![Build Status](https://travis-ci.org/ChenNing02/care.svg?branch=master)](https://travis-ci.org/ChenNing02/care)

## 介绍

这是我使用 Vue 造的第一个轮子，目前正在完善中，可能有很多不足地方~

## 安装

```sh
npm i --save care-ui
# 或
yarn add care-ui
```

## 快速开始

### 添加CSS文件

使用本框架前，请在 CSS 中开启 border-box

```css
*, *::before, *::after { box-sizing: border-box; }
```

> IE 8 及以上浏览器支持此样式

### 引入 Care UI

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

## 文档

[官方文档](https://chenning02.github.io/care/)

## 联系方式

邮箱：<a href="mailto:bravchen@qq.com">bravchen@qq.com</a>

## 贡献代码

[Pull requests](https://github.com/ChenNing02/care/pulls)

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
