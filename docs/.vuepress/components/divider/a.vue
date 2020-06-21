<template>
    <div class="c-item">
        <p>人间之世飘忽几何如凿石见火，窥隙观电；萤睹朝而灭，露见日而消。</p>
        <c-divider content-position="left">分割线</c-divider>
        <p>饱谙世味，一任覆雨翻云，总慵开眼，会尽人情，随教呼牛唤马，只是点头。</p>
        <c-divider><c-icon name="Daytimemode"></c-icon></c-divider>
        <p>一在天之涯，一在地之角，生而影不与吾形相依，死而魂不与吾梦相接。</p>
        <c-divider content-position="right">分割线</c-divider>
        <p>千里茫茫若梦，双眸粲粲如星。塞上牛羊空许约，烛畔鬓云有旧盟。莽苍踏雪行。</p>
    </div>
</template>
<script>
import Icon from '../../../../src/icon'
import Divider from '../../../../src/divider'
export default {
    components: {
        'c-icon': Icon,
        'c-divider': Divider
    }
}
</script>
<style lang="scss" scoped>
.c-item {
    border: 1px solid #d1d5da;
    padding: 24px 24px;
    margin: 1em 0;
}
</style>