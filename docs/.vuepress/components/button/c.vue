<template>
    <div class="c-item">
        <c-button loading>加载状态</c-button>
        <c-button disabled>禁用状态</c-button>
        <c-button loading disabled>加载状态</c-button>
    </div>
</template>
<script>
import Button from '../../../../src/button/button'
export default {
    components: {
        'c-button': Button,
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