---
title: 'Input 输入框'
---

# Input 输入框

## 基础用法

通过添加 `v-model` 可实现双向绑定

<ClientOnly>
<input-a></input-a>
</ClientOnly>

```vue
<c-input v-model="message"></c-input>
<p>message: {{message}}</p>
<script>
export default {
    data() {
        return {
            message: 'Hellow'
        }
    }
}
</script>
```

## 输入提示

通过给组件添加 `error` 或 `success` 提示输入正确 / 错误信息

<ClientOnly>
<input-c></input-c>
</ClientOnly>

```vue
<template>
    <div>
        <c-input v-model="message1" error="输入错误"></c-input>
        <c-input v-model="message2" success="输入正确"></c-input>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message1: '张三',
            message2: '李四'
        }
    }
}
</script>
```

## 禁用状态

给组件添加 `readonly` 属性，使输入框变为禁用状态

<ClientOnly>
<input-b></input-b>
</ClientOnly>

```vue
<c-input v-model="message" readonly></c-input>
<script>
export default {
    data() {
        return {
            message: '禁止选中'
        }
    }
}
</script>
```
