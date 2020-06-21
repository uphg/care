---
title: 'Button 按钮'
---

# Button 按钮

## 默认按钮

可以添加 icon 图标，并使用 `icon-position` 属性控制图标位置

<ClientOnly>
<button-a></button-a>
</ClientOnly>

```vue
<c-button>默认按钮</c-button>
<c-button icon="download">下载</c-button>
<c-button icon="download" icon-position="right">下载</c-button>
<c-button icon="Daytimemode"></c-button>

<c-button type="primary">主要按钮</c-button>
<c-button icon="download" type="primary">下载</c-button>
<c-button icon="download" icon-position="right" type="primary">下载</c-button>
<c-button icon="agree" type="primary"></c-button>

<c-button type="warning">危险按钮</c-button>
<c-button icon="download" type="warning">下载</c-button>
<c-button icon="download" icon-position="right" type="warning">下载</c-button>
<c-button icon="agree" type="warning"></c-button>
```

## 圆角按钮

基本功能与默认按钮相同，注意只显示icon的按钮需要添加 `circle` 属性

<ClientOnly>
<button-b></button-b>
</ClientOnly>

```vue
<c-button type="primary" round>圆角按钮</c-button>
<c-button type="primary" icon="download" round>下载</c-button>
<c-button type="primary" icon="download" icon-position="right" round>下载</c-button>
<c-button type="primary" icon="agree" circle></c-button>
```

## 按钮状态

设置 `loading` 属性为 `true` 即可，变为 loading 状态。

<ClientOnly>
<button-c></button-c>
</ClientOnly>

```vue
<c-button type="primary" loading>加载状态</c-button>
<c-button type="primary" disabled>禁用状态</c-button>
<c-button type="primary" loading disabled>加载状态</c-button>
```

## 按钮组

使用 `<c-button-group>` 标签来嵌套按钮，形成按钮组。

<ClientOnly>
<button-d></button-d>
</ClientOnly>

```vue
<c-button-group>
    <c-button type="primary" icon="left">上一页</c-button>
    <c-button type="primary" icon="right" icon-position="right">下一页</c-button>
</c-button-group>
<c-button-group>
    <c-button type="primary" icon="agree"></c-button>
    <c-button type="primary" icon="favorites"></c-button>
    <c-button type="primary" icon="collection"></c-button>
</c-button-group>
```

