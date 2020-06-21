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
            &.in-button-primary {
                border-right-color:#6699d6;
                border-left-color:#6699d6;
                &:first-child {
                    border-left: none;
                }
                &:last-child {
                    border-right: none;
                }
            }
            &.in-button-warning {
                border-right-color:#ffaba9;
                border-left-color:#ffaba9;
                &:first-child {
                    border-left: none;
                }
                &:last-child {
                    border-right: none;
                }
            }
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:not(:first-child):not(:last-child) {
                border-radius: 0;
            }
            &:first-child {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
            &:last-child {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>