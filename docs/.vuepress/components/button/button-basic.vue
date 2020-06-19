<template>
    <div>
        <p>按钮样式</p>
        <div>
            <c-button>默认按钮</c-button>
            <c-button icon="download">下载</c-button>
            <c-button icon="download" icon-position="right">下载</c-button>
            <c-button icon="Daytimemode"></c-button>
        </div>
        <div>
            <c-button round>圆角按钮</c-button>
            <c-button icon="download" round>下载</c-button>
            <c-button icon="download" icon-position="right" round>下载</c-button>
            <c-button icon="Daytimemode" circle></c-button>
        </div>
    </div>
</template>
<script>
    import Button from '../../../../src/button/button'
    export default {
        components: {
            'c-button': Button
        }
    }
</script>
