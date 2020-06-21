---
title: 'Button 按钮'
---

# Button 按钮

## 默认按钮

可以添加 icon 图标，并使用 `icon-position` 属性控制图标位置

<button-a></button-a>

```vue
<c-button>默认按钮</c-button>
<c-button icon="download">下载</c-button>
<c-button icon="download" icon-position="right">下载</c-button>
<c-button icon="Daytimemode"></c-button>
```

## 圆角按钮

基本功能与默认按钮相同，注意只显示icon的按钮需要添加 `circle` 属性

<button-b></button-b>

```vue
<c-button round>圆角按钮</c-button>
<c-button icon="download" round>下载</c-button>
<c-button icon="download" icon-position="right" round>下载</c-button>
<c-button icon="Daytimemode" circle></c-button>
```

## 按钮状态

设置 `loading` 属性为 `true` 即可，变为 loading 状态。

<button-c></button-c>

```vue
<c-button loading>加载状态</c-button>
<c-button disabled>禁用状态</c-button>
<c-button loading disabled>加载状态</c-button>
```

## 按钮组

使用 `<c-button-group>` 标签来嵌套按钮，形成按钮组。

<button-d></button-d>

```vue
<c-button-group>
    <c-button icon="left">上一页</c-button>
    <c-button icon="right" icon-position="right">下一页</c-button>
</c-button-group>
<c-button-group>
    <c-button icon="agree"></c-button>
    <c-button icon="favorites"></c-button>
    <c-button icon="collection"></c-button>
</c-button-group>
```

