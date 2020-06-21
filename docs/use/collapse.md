---
title: 'Collapse 折叠面板'
---

# Collapse 折叠面板

## 基础用法

可同时展开多个面板，面板之间不影响

<collapse-a></collapse-a>

```vue
<template>
    <c-collapse :selected.sync="names">
        <c-collapse-item title="标题一" name="1">
            这碗大<br>
            千万别虚荣心作祟<br>
            真心话<br>
            这大碗宽面也很贵
        </c-collapse-item>
        <c-collapse-item title="标题二" name="2">
            先别说话<br>
            不想给你机会先别怼<br>
            就散了吧<br>
            听完这首歌就洗洗睡
        </c-collapse-item>
        <c-collapse-item title="标题三" name="3">
            我这一生漂泊四海，看淡了今朝<br>
            月高高的挂无暇<br>
            人生能有几次机会，相聚甚是少<br>
            情谊别轻易放掉
        </c-collapse-item>
    </c-collapse>
</template>
<script>
export default {
    data(){
        return {
            names: ['1']
        }
    }
}
</script>
```


## 手风琴效果

每次只能展开一个面板，通过 `accordion` 属性来设置是否以手风琴模式显示。

<collapse-b></collapse-b>

```vue
<template>
    <c-collapse :selected.sync="names" accordion>
        <c-collapse-item title="标题一" name="1">
            这碗大<br>
            千万别虚荣心作祟<br>
            真心话<br>
            这大碗宽面也很贵
        </c-collapse-item>
        <c-collapse-item title="标题二" name="2">
            先别说话<br>
            不想给你机会先别怼<br>
            就散了吧<br>
            听完这首歌就洗洗睡
        </c-collapse-item>
        <c-collapse-item title="标题三" name="3">
            我这一生漂泊四海，看淡了今朝<br>
            月高高的挂无暇<br>
            人生能有几次机会，相聚甚是少<br>
            情谊别轻易放掉
        </c-collapse-item>
    </c-collapse>
</template>
<script>
export default {
    data(){
        return {
            names: ['1']
        }
    }
}
</script>
```