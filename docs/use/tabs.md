---
title: 'tabs 切换'
---

# Tabs 切换

## 默认用法

默认选中了第一个标签页，可通过绑定 `selected` 值来指定当前选中的标签页。

<ClientOnly>
<tabs-a></tabs-a>
</ClientOnly>

```vue
<template>
    <c-tabs :selected="TabsName">
        <c-tabs-nav>
            <c-tabs-item name="1">导航一</c-tabs-item>
            <c-tabs-item name="2">导航二</c-tabs-item>
            <c-tabs-item name="3">导航三</c-tabs-item>
        </c-tabs-nav>
        <c-tabs-content>
            <c-tabs-pane name="1">内容一</c-tabs-pane>
            <c-tabs-pane name="2">内容二</c-tabs-pane>
            <c-tabs-pane name="3">内容三</c-tabs-pane>
        </c-tabs-content>
    </c-tabs>
</template>
<script>
export default {
    data() {
        return {
            TabsName: '1'
        }
    }
}
</script>
```

## 添加操作按钮

可使用 `slot` 属性在最右侧添加一个操作按钮。

<ClientOnly>
<tabs-b></tabs-b>
</ClientOnly>

```vue
<template>
    <c-tabs :selected="TabsName">
        <c-tabs-nav>
            <c-tabs-item name="1">导航一</c-tabs-item>
            <c-tabs-item name="2">导航二</c-tabs-item>
            <c-tabs-item name="3">导航三</c-tabs-item>
            <template slot="actions">
                <c-button icon="settings">设置</c-button>
            </template>
        </c-tabs-nav>
        <c-tabs-content>
            <c-tabs-pane name="1">内容一</c-tabs-pane>
            <c-tabs-pane name="2">内容二</c-tabs-pane>
            <c-tabs-pane name="3">内容三</c-tabs-pane>
        </c-tabs-content>
    </c-tabs>
</template>
<script>
export default {
    data() {
        return {
            TabsName: '1'
        }
    }
}
</script>
```