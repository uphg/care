<template>
    <div class="c-icon-list">
        <c-icon name="Daytimemode"></c-icon>
        <c-icon name="nightmode"></c-icon>
        <c-icon name="pic"></c-icon>
        <c-button icon="search">搜索</c-button>
    </div>
</template>
<script>
import Icon from '../../../../src/icon'
import Button from '../../../../src/button/button'
export default {
    components: {
        'c-icon': Icon,
        'c-button': Button
    }
}
</script>
<style lang="scss" scoped>
.c-icon-list {
    display: flex;
    align-items: center;
    border: 1px solid #d1d5da;
    padding: 24px;
    margin: 1em 0;
    .c-icon {
        width: 1.4em;
        height: 1.4em;
        margin: 0 1em;
    }
    .c-icon:first-child {
        margin-left: 0;
    }
    .c-button {
        margin: 0 1em;
    }
}

</style>