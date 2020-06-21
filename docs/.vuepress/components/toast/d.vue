<template>
    <div class="c-item">
        <c-button @click="onClick()">上方弹出</c-button>
    </div>
</template>

<script>
import plugin from '../../../../src/plugin'
import Button from '../../../../src/button/button'
import Toast from '../../../../src/toast'
import Vue from 'vue'
Vue.use(plugin)
export default {
    components: {
        'c-button': Button
    },
    methods: {
        onClick() {
            this.$toast('<strong style="color: #05b;">加粗的消息提示</strong>', {
                enableHtml: true
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.c-item {
    border: 1px solid #d1d5da;
    padding: 24px 24px;
    margin: 1em 0;
}
.c-toast-wrapper {
    position: fixed;
    z-index: 99;
}
</style>