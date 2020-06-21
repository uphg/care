<template>
    <div class="c-item">
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
    </div>
</template>
<script>
import Collapse from '../../../../src/collapse/collapse'
import CollapseItem from '../../../../src/collapse/collapse-item'
export default {
    components: {
        'c-collapse': Collapse,
        'c-collapse-item':CollapseItem
    },
    data(){
        return {
            names: ['1']
        }
    }
}
</script>
<style lang="scss" scoped>
.c-item {
    border: 1px solid #d1d5da;
    padding: 24px 24px;
    margin: 1em 0;
}
</style>
