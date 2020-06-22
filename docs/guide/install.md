---
title: '快速上手'
---
# 快速上手

## 安装

使用 npm 或 yarn 安装

```sh
npm i --save care-ui
# 或
yarn add care-ui
```

## 添加CSS文件

使用本框架前，请在CSS中开启 border-box

```css
*, *::before, *::after { box-sizing: border-box; }
```

## 引入

可按需求引入需要使用的组件

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