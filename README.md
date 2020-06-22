<div align="center">
<img src="https://chenning02.github.io/care/hero.png">
</div>

<h1 align="center"><a href="https://chenning02.github.io/care/" target="_blank">Care</a></h1>

<div align="center">
<img src="https://travis-ci.org/ChenNing02/care.svg?branch=master">
<img src="https://img.shields.io/npm/v/care-ui.svg">
<img src="https://img.shields.io/badge/language-JavaScript-blue.svg">
<img src="https://img.shields.io/badge/License-MIT-yellow.svg">
</div>
Care 是一个简易实用的 UI 框架，基于 Vue，可兼容 PC / 移动端，目前正在持续更新中...

## 现已支持

- [x] Button 按钮
- [x] Input 输入框
- [x] Toast 消息提示
- [x] Tabs 切换
- [x] Collapse 折叠面板
- [x] Lattice 栅格
- [x] Layout 布局
- [x] Divider 分割线


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
import { CButton, CButtonGroup, CIcon } from 'care-ui'
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
