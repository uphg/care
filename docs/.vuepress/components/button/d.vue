<template>
    <div class="c-item">
        <div class="c-item-row">
            <c-button-group>
                <c-button type="primary" icon="left">上一页</c-button>
                <c-button type="primary" icon="right" icon-position="right">下一页</c-button>
            </c-button-group>
            <c-button-group>
                <c-button type="primary" icon="agree"></c-button>
                <c-button type="primary" icon="favorites"></c-button>
                <c-button type="primary" icon="collection"></c-button>
            </c-button-group>
        </div>
    </div>
</template>
<script>
import Button from '../../../../src/button/button'
import ButtonGroup from '../../../../src/button/button-group'
export default {
    components: {
        'c-button': Button,
        'c-button-group': ButtonGroup,
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