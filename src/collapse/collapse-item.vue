<template>
    <div class="c-collapse-item">
        <div class="c-collapse-item-title" @click="toggle" :data-name="name">{{title}}</div>
        <div class="c-collapse-item-content" v-if="open">
            <div class="c-collapse-item-content-box">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CareCollapseItem',
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        data(){
            return {
                open: false
            }
        },
        inject: ['eventBus'],
        mounted(){
            this.eventBus && this.eventBus.$on('update:selected', (names) => {
                if (names.indexOf(this.name) >= 0) {
                    this.open = true
                } else {
                    this.open = false
                }
            })
        },
        methods: {
            toggle () {
                if (this.open) {
                    this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
                } else {
                    this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
$title-padding: 12px 16px;
$title-bgColor: #fafafa;
$title-border-color: #dbdbdb;
$title-radius: 4px;
$content-padding: 16px;

.c-collapse-item {
    .c-collapse-item-title {
        cursor: pointer;
        padding: $title-padding;
        background-color: $title-bgColor;
        border: 1px solid $title-border-color;
        margin-top: -1px;
        margin-left: -1px;
        margin-right: -1px;
    }
    &:first-child {
        .c-collapse-item-title {
            border-top-left-radius: $title-radius;
            border-top-right-radius: $title-radius;
        }
    }
    .c-collapse-item-content {
        .c-collapse-item-content-box {
            padding: $content-padding;
        }
    }
    &:last-child {
        .c-collapse-item-title:last-child {
            border-bottom-left-radius: $title-radius;
            border-bottom-right-radius: $title-radius;
            margin-bottom: -1px;
        }
    }
}
</style>