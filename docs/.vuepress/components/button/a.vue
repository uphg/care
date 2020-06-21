<template>
    <div class="c-item">
        <div class="c-item-row">
            <c-button>默认按钮</c-button>
            <c-button icon="download">下载</c-button>
            <c-button icon="download" icon-position="right">下载</c-button>
            <c-button icon="agree"></c-button>
        </div>
        <div class="c-item-row">
            <c-button type="primary">主要按钮</c-button>
            <c-button icon="download" type="primary">下载</c-button>
            <c-button icon="download" icon-position="right" type="primary">下载</c-button>
            <c-button icon="agree" type="primary"></c-button>
        </div>
        <div class="c-item-row">
            <c-button type="warning">危险按钮</c-button>
            <c-button icon="download" type="warning">下载</c-button>
            <c-button icon="download" icon-position="right" type="warning">下载</c-button>
            <c-button icon="agree" type="warning"></c-button>
        </div>
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
