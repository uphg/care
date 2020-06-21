---
title: 'divider 分割线'
---

# 

## 基础用法

可以在分割线上自定义文案内容，包括 icon 图标。添加 `content-position` 属性来改变自定义内容的位置，默认值 content，可选值 left / right。

<ClientOnly>
<divider-a></divider-a>
</ClientOnly>

```vue
<p>人间之世飘忽几何如凿石见火，窥隙观电；萤睹朝而灭，露见日而消。</p>
<c-divider content-position="left">分割线</c-divider>
<p>饱谙世味，一任覆雨翻云，总慵开眼，会尽人情，随教呼牛唤马，只是点头。</p>
<c-divider><c-icon name="Daytimemode"></c-icon></c-divider>
<p>一在天之涯，一在地之角，生而影不与吾形相依，死而魂不与吾梦相接。</p>
<c-divider content-position="right">分割线</c-divider>
<p>千里茫茫若梦，双眸粲粲如星。塞上牛羊空许约，烛畔鬓云有旧盟。莽苍踏雪行。</p>
```

## 竖向

设置 `vertical` 属性为 true 可以使组件变为竖向分隔

<ClientOnly>
<divider-b></divider-b>
</ClientOnly>

```vue
<p>随风奔跑自由是方向<c-divider vertical></c-divider>追逐雷和闪电的力量<c-divider vertical></c-divider>把浩瀚的海洋装进我胸膛<c-divider vertical></c-divider>即使再小的帆也能远航</p>
```