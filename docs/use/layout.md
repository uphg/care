---
title: 'layout 布局'
---

# layout 布局

## 基础用法

标准布局

<layout-a></layout-a>

```vue
<template>
    <c-layout>
        <c-layout>
            <c-header>Header</c-header>
            <c-content>Content</c-content>
            <c-footer>Footer</c-footer>
        </c-layout>
    </c-layout>
</template>
<style>
.header, .footer, .layout {
    text-align: center;
}
.header, .footer {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #b3c0d1;
}
.content {
    padding: 1em 0;
}
.layout {
    height: 400px;
    background-color: #e9eef3;
}
.c-item {
    border: 1px solid #d1d5da;
    padding: 24px 24px;
    margin: 1em 0;
}
</style>
````

## 显示侧栏

可通过添加 `<c-sider>` 组件，并指定 `width` 宽度属性，来添加侧栏内容。

<layout-b></layout-b>

```vue
<template>
    <c-layout>
        <c-sider width="200px">Sider</c-sider>
        <c-layout>
            <c-header>Header</c-header>
            <c-content>Content</c-content>
            <c-footer>Footer</c-footer>
        </c-layout>
    </c-layout>
</template>
<style>
.header, .footer, .sider, .layout {
    text-align: center;
}
.header, .footer {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #b3c0d1;
}
.content {
    padding: 1em 0;
}
.sider {
    padding: 1em 0;
    background-color: #d3dce6;
}
.layout {
    height: 400px;
    background-color: #e9eef3;
}
</style>
````