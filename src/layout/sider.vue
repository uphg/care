<template>
    <div class="sider" :style="widthStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'CareSider',
    props: {
        width: {
            type: [String, Number]
        }
    },
    computed: {
        widthStyle(){
            let {width} = this
            return 'width:'+width+';'
        }
    }
}
</script>

<style lang="scss" scoped>
.sider {
}
</style>