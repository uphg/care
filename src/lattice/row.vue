<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'CareRow',
    props: {
        gutter: {
            type: [Number, String]
        },
        justify: {
            type: String,
            validator(value) {
                return ['start', 'end', 'center', 'space-between', 'space-around'].includes(value)
            }
        }
    },
    computed: {
        rowStyle() {
            let { gutter } = this
            return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }
        },
        rowClass() {
            let { justify } = this
            return [justify && `justify-${justify}`]
        }
    },
    mounted() {
        this.$children.forEach((vm) => {
            vm.gutter = this.gutter
        })
    }
}
</script>
<style scoped lang="scss">
.row {
    display: flex;
    flex-wrap: wrap;
    &.justify-start {
        justify-content: flex-start;
    }
    &.justify-end {
        justify-content: flex-end;
    }
    &.justify-center {
        justify-content: center;
    }
    &.justify-space-between {
        justify-content: space-between;
    }
    &.justify-space-around {
        justify-content: space-around;
    }
}
</style>