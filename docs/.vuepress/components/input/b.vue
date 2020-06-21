<template>
    <div class="c-item">
        <c-input v-model="message" readonly></c-input>
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
            message: '禁止选中'
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
</style>
