<template>
    <div class="c-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'CareButtonGroup',
        mounted(){
            for(let node of this.$el.children){
                let name = node.nodeName.toLowerCase()
                if(name !== 'button'){
                    console.warn(`注意：c-button-group 的子元素中不应该出现 ${name}`)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .c-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .c-button {
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px;
            }
            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>