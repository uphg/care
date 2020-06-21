---
title: 'lattice 栅格'
---

# lattice 栅格

## 基础布局

通过使用 row 和 col 组件，并添加 col 组件的 `span` 属性就可以自由的布局。

<lattice-a></lattice-a>

```vue
<template>
    <div>
        <c-row>
            <c-col span="24"><div class="c-block"></div></c-col>
        </c-row>
        <c-row>
            <c-col span="6"><div class="c-block"></div></c-col>
            <c-col span="6"><div class="c-block"></div></c-col>
            <c-col span="6"><div class="c-block"></div></c-col>
            <c-col span="6"><div class="c-block"></div></c-col>
        </c-row>
        <c-row>
            <c-col span="4"><div class="c-block"></div></c-col>
            <c-col span="4"><div class="c-block"></div></c-col>
            <c-col span="4"><div class="c-block"></div></c-col>
            <c-col span="4"><div class="c-block"></div></c-col>
            <c-col span="4"><div class="c-block"></div></c-col>
            <c-col span="4"><div class="c-block"></div></c-col>
        </c-row>
    </div>
</template>
<style>
.c-block {
    min-height: 30px;
    background-color: #e5e9f2;
    border-radius: 3px; 
}
.col:nth-child(2n) .c-block{
    background-color: #d3dce6;
}
</style>
```

## 分栏间隔

给 row 组件添加 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0。

<lattice-b></lattice-b>

```vue
<template>
    <c-row gutter="10">
        <c-col span="6"><div class="c-block"></div></c-col>
        <c-col span="6"><div class="c-block"></div></c-col>
        <c-col span="6"><div class="c-block"></div></c-col>
        <c-col span="6"><div class="c-block"></div></c-col>
    </c-row>
</template>
<style>
.c-block {
    min-height: 30px;
    background-color: #e5e9f2;
    border-radius: 3px; 
}
.col:nth-child(2n) .c-block{
    background-color: #d3dce6;
}
</style>
```

## 分栏偏移

通过设置 col 组件的 `offset` 属性可以指定分栏偏移的栏数。

<lattice-c></lattice-c>

```vue
<template>
    <div class="c-item">
        <c-row gutter="10">
            <c-col span="8"><div class="c-block"></div></c-col>
            <c-col span="8" offset="8"><div class="c-block"></div></c-col>
        </c-row>
        <c-row gutter="10">
            <c-col span="4" offset="4"><div class="c-block"></div></c-col>
            <c-col span="8"><div class="c-block"></div></c-col>
            <c-col span="8"><div class="c-block"></div></c-col>
        </c-row>
        <c-row gutter="10">
            <c-col span="12"><div class="c-block"></div></c-col>
            <c-col span="6" offset="6"><div class="c-block"></div></c-col>
        </c-row>
    </div>
</template>
<style>
.c-block {
    min-height: 30px;
    background-color: #e5e9f2;
    border-radius: 3px; 
}
.col:nth-child(2n) .c-block{
    background-color: #d3dce6;
}
</style>
```

## 对齐方式

通过设置 row 组件的 `justify` 属性为 start / end / center / space-between / space-around 来定义子元素的排版方式。

<lattice-d></lattice-d>

```vue
<template>
    <div class="c-item">
        <c-row gutter="10" justify="start">
            <c-col span="6"><div class="c-block"></div></c-col>
            <c-col span="6"><div class="c-block"></div></c-col>
            <c-col span="6"><div class="c-block"></div></c-col>
        </c-row>
        <c-row gutter="10" justify="end">
            <c-col span="6"><div class="c-block"></div></c-col>
            <c-col span="6"><div class="c-block"></div></c-col>
            <c-col span="6"><div class="c-block"></div></c-col>
        </c-row>
        <c-row gutter="10" justify="center">
            <c-col span="6"><div class="c-block"></div></c-col>
            <c-col span="6"><div class="c-block"></div></c-col>
            <c-col span="6"><div class="c-block"></div></c-col>
        </c-row>
        <c-row gutter="10" justify="space-between">
            <c-col span="6"><div class="c-block"></div></c-col>
            <c-col span="6"><div class="c-block"></div></c-col>
            <c-col span="6"><div class="c-block"></div></c-col>
        </c-row>
        <c-row gutter="10" justify="space-around">
            <c-col span="6"><div class="c-block"></div></c-col>
            <c-col span="6"><div class="c-block"></div></c-col>
            <c-col span="6"><div class="c-block"></div></c-col>
        </c-row>
    </div>
</template>
<style>
.c-block {
    min-height: 30px;
    background-color: #e5e9f2;
    border-radius: 3px;
}
.col:nth-child(2n) .c-block{
    background-color: #d3dce6;
}
</style>
```