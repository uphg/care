<template>
    <div class="c-item">
        <c-input v-model="message"></c-input>
        <p>message: {{message}}</p>
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
            message: 'Hellow'
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
p {
    margin-bottom: 0;
}
</style>
