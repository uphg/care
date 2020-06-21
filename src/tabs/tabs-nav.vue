<template>
    <div class="tabs-nav">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CareTabsNav',
    inject: ['eventBus'],
    mounted() {
        let parent = this.$el.getBoundingClientRect()
        this.eventBus.$on('update:selected', (item, vm) => {
            let { width, height, top, left } = vm.$el.getBoundingClientRect()
            let raletiveleft = left - parent.left
            this.$refs.line.style.width = `${width}px`
            this.$refs.line.style.transform = `translateX(${raletiveleft}px)`
        })
    }
}
</script>
<style scoped lang="scss">
$tab-height: 40px;
$blue: #1a73e8;
$border-color: #ddd;
.tabs-nav {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    position: relative;
    border-bottom: 2px solid $border-color;
    > .line {
        position: absolute;
        bottom: 0;
        border-bottom: 2px solid $blue;
        margin-bottom: -2px;
        transition: all 350ms;
    }
    > .actions-wrapper {
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>