<template>
    <div class="c-wrapper" :class="{error, success}">
        <input
            :value="value"
            type="text"
            :disabled="disabled"
            :readonly="readonly"
            @change="$emit('change', $event.target.value)"
            @input="$emit('input', $event.target.value)"
            @focus="$emit('focus', $event.target.value)"
            @blur="$emit('blur', $event.target.value)"
        />
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
        <template v-if="success">
            <icon name="success" class="icon-success"></icon>
            <span class="successMessage">{{success}}</span>
        </template>
    </div>
</template>
<script>
import Icon from './icon'
export default {
    components: { Icon },
    name: 'CareInput',
    props: {
        value: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String
        },
        success: {
            type: String
        }
    },
    mounted(){
        if(this.error&&this.success){
            console.warn('注意：理论上不应该同时存在两种信息状态 [error] [success] 否则会相互覆盖')
        }
    }
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 2px;
$font-size: 12px;
// $box-shadow-color: hsla(214, 82%, 51%, 0.2);
$box-shadow-color: #1a73e8;
$error: #f1453d;
$error-forbid: #e9c4c2;
$error-focus: rgba(233, 69, 60, 0.6);
$success: #62b637;
$success-forbid: #b9f79b;
$success-focus: hsla(100, 54%, 46%, 0.6);
.c-wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    > :not(:last-child) {
        margin-right: 0.5em;
    }
    > input {
        transition: all 0.3s;
        height: 32px;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: 0 8px;
        font-size: inherit;
        &:hover {
            border-color: $border-color-hover;
        }
        &:focus {
            box-shadow: inset 0 1px 3px $box-shadow-color;
            border-color: $box-shadow-color;
            outline: none;
        }
        &[disabled],
        &[readonly] {
            box-shadow: none;
            border-color: #bbb;
            color: #bbb;
            cursor: not-allowed;
        }
    }
    &.error {
        > input {
            border-color: $error;
            &:focus {
                box-shadow: inset 0 1px 3px $error-focus;
                outline: none;
            }
            &[disabled],
            &[readonly] {
                border-color: $error-forbid;
                color: $error-forbid;
                cursor: not-allowed;
            }
        }
    }
    &.success {
        > input {
            border-color: $success;
            &:focus {
                box-shadow: inset 0 1px 3px $success-focus;
                outline: none;
            }
            &[disabled],
            &[readonly] {
                border-color: $success-forbid;
                color: $success-forbid;
                cursor: not-allowed;
            }
        }
    }
    .icon-success {
        fill: $success;
    }
    .successMessage {
        color: $success;
    }
    .icon-error {
        fill: $error;
    }
    .errorMessage {
        color: $error;
    }
}
</style>