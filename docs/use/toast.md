---
title: 'Toast 消息提示'
---

# Toast 消息提示

## 基础用法

通过传入 `position` 属性来修改提示位置

<toast-a></toast-a>

```vue
<c-button @click="$toast('这是一条消息提示')">上方弹出</c-button>
<c-button @click="$toast('这是一条消息提示', {position:'middle'})">中间弹出</c-button>
<c-button @click="$toast('这是一条消息提示', {position:'bottom'})">下方弹出</c-button>
```

## 深色提示框

通过传入 `dark: true` 来修改提示框样式

<toast-b></toast-b>

```vue
<c-button @click="$toast('这是一条消息提示', { dark: true })">上方弹出</c-button>
```

## 修改关闭的内容

通过传入 `closeButton` 属性来修改关闭功能的内容，并返回一个回调函数。

<toast-c></toast-c>

```vue
<template>
    <c-button @click="onClick()">上方弹出</c-button>
</template>
<script>
export default {
    methods: {
        onClick() {
            this.$toast('这是一条消息提示', {
                closeButton: {
                    text: '好的~',
                    callback: () => {
                        console.log('消息已收到！')
                    }
                }
            })
        }
    },
}
</script>
```

## 添加HTML样式

通过设置 `enableHtml: true` 可以在消息中添加HTML标签（在网站上动态渲染任意 HTML 是非常危险的，不推荐使用）。

<toast-d></toast-d>

```vue
<template>
    <c-button @click="onClick()">上方弹出</c-button>
</template>
<script>
export default {
    methods: {
        onClick() {
            this.$toast('<strong style="color: #05b;">加粗的消息提示</strong>', {
                enableHtml: true
            })
        }
    },
}
</script>
```