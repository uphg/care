<template>
    <div class="c-item">
        <p>随风奔跑自由是方向<c-divider vertical></c-divider>追逐雷和闪电的力量<c-divider vertical></c-divider>把浩瀚的海洋装进我胸膛<c-divider vertical></c-divider>即使再小的帆也能远航</p>
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