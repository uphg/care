# care ui - 一个简单的 Vue UI组件

[![Build Status](https://travis-ci.org/ChenNing02/care.svg?branch=master)](https://travis-ci.org/ChenNing02/care)

## 介绍

这是我使用 Vue 造的第一个轮子，目前正在完善中，可能有很多不足地方~

## 开始使用

1. 添加CSS文件

    使用本框架前，请在CSS中开启 border-box

    ```html
    *, *::before, *::after { box-sizing: border-box; }
    ```

    > IE 8 及以上浏览器支持此样式

    你还需要设置默认颜色的变量(后续会改为 SCSS 变量)

    ```css
    html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: blue;
        --border-color: #999;
        --border-color-hover: #035aa6;
    }
    ```

    > IE 15 及以上浏览器支持此样式

2. 安装 care-ui

    ```sh
    npm i --save care-ui
    ```
3. 引入 care-ui

    ```js
    import {Button, ButtonGroup, Icon} from 'care-ui'
    import 'care-ui/dist/index.css'
    export default {
    name: 'App',
    components: {
        HelloWorld,
        'c-button': Button,
        'c-icon': Icon,
        'c-button-group': ButtonGroup
    }
    }
    ```

4. 使用案例

    ```vue
    <c-button icon="settings">按钮</c-button>
    <c-icon name="settings"></c-icon>
    <br>
    <br>
    <c-button-group>
        <c-button icon="left">上一页</c-button>
        <c-button icon="settings">操作</c-button>
        <c-button icon="right" iconPosition="right">下一页</c-button>
    </c-button-group>
    ```

<!-- ## 文档

...

## 提问

...

## 变更记录

...

## 联系方式

...

## 贡献代码 -->

<!-- ## 运行

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
``` -->

