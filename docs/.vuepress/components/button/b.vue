<template>
    <div class="c-item">
        <c-button type="primary" round>圆角按钮</c-button>
        <c-button type="primary" icon="download" round>下载</c-button>
        <c-button type="primary" icon="download" icon-position="right" round>下载</c-button>
        <c-button type="primary" icon="agree" circle></c-button>
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