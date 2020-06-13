<template>
    <button class="c-button" :class="{[`icon-${iconPosition}`]: true}"
        @click="$emit('click')"> <!-- 按钮被点击就触发一个事件，事件名称叫click -->
        <c-icon v-if="icon && !loading" class="icon" :name="icon"></c-icon>
        <c-icon v-if="loading" class="loading icon" name="loading"></c-icon>
        <span class="content">
            <slot></slot>
        </span>
    </button>
</template>
<script>
    import Icon from './icon'
    export default {
        components: {
            'c-icon': Icon
        },
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String, // 类型
                default: 'left', // 默认值
                // 属性的检查器
                validator(value){
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>
<style lang="scss">
    @keyframes spin {
        0% { transform: rotate(0deg) }
        100% { transform: rotate(360deg) }
    }
    .c-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .icon { order: 1; margin-right: .3em; }
        > .content { order: 2; }
        &.icon-right {
            > .icon { order: 2; margin-right: 0; margin-left: .3em; }
            > .content { order: 1; }
        }
        .loading {
            margin-right: .3em;
            // infinite: 一直转，linear: 线性动画
            animation: spin 1.2s infinite linear;
        }
    }
</style>