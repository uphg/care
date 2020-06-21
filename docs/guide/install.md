---
title: '安装'
---
# 安装

## 安装

```sh
npm i --save care-ui
# 或
yarn add care-ui
```

## 引入

```js
import {Button, ButtonGroup, Icon, Row, Col} from 'care-ui'
import 'care-ui/dist/index.css'
export default {
    name: 'App',
    components: {
        'c-button': Button,
        'c-icon': Icon,
        'c-button-group': ButtonGroup,
        'c-row', Row,
        'c-col', Col
        ...
    }
}
```