<template>
    <button class="c-button" :class="{[`icon-${iconPosition}`]: true}">
        <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <span class="content">
            <slot></slot>
        </span>
    </button>
</template>
<script>
    export default {
        props: {
            icon: {},
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
    }
</style>