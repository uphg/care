<template>
    <div class="c-divider" :class="{'in-vertical':vertical}">
        <div class="c-divider-text" :class="[`in-${contentPosition}`]">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CareDivider',
        props: {
            vertical: {
                type: Boolean,
                default: false
            },
            contentPosition: {
                type: String,
                default: 'content',
                validator(value){
                    return value === 'left' || value === 'content' || value === 'right'
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    .c-divider {
        display: block;
        height: 1px;
        width: 100%;
        margin: 1em 0;
        background-color: #dcdfe6;
        position: relative;
        .c-divider-text {
            position: absolute;
            background-color: #fff;
            padding: 0 1em;
            font-weight: 500;
            color: #303133;
            font-size: 14px;
            &.in-content {
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
            }
            &.in-left {
                transform: translateY(-50%);
                left: 20px;
            }
            &.in-right {
                right: 20px;
                transform: translateY(-50%);
            }
        }
        &.in-vertical {
            display: inline-block;
            width: 1px;
            height: 1em;
            margin: 0 8px;
            vertical-align: middle;
            position: relative;
            &.in-content {
                display: none;
            } 
        }
    }
</style>