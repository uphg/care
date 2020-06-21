<template>
    <div class="c-item">
        <c-input v-model="message1" error="输入错误"></c-input>
        <c-input v-model="message2" success="输入正确"></c-input>
    </div>
</template>
<script>
import Input from '../../../../src/input'
export default {
    components: {
        'c-input': Input,
    },
    data(){
        return {
            message1: '张三',
            message2: '李四'
        }
    }
}
</script>
<style lang="scss" scoped>
.c-item {
    border: 1px solid #d1d5da;
    padding: 24px 24px;
    margin: 1em 0;
}
.c-wrapper {
    margin-right: 1em;
}
</style>
