<template>
    <div class="c-item">
        <c-tabs :selected="TabsName">
            <c-tabs-nav>
                <c-tabs-item name="1">导航一</c-tabs-item>
                <c-tabs-item name="2">导航二</c-tabs-item>
                <c-tabs-item name="3">导航三</c-tabs-item>
            </c-tabs-nav>
            <c-tabs-content>
                <c-tabs-pane name="1">内容一</c-tabs-pane>
                <c-tabs-pane name="2">内容二</c-tabs-pane>
                <c-tabs-pane name="3">内容三</c-tabs-pane>
            </c-tabs-content>
        </c-tabs>
    </div>
</template>

<script>
import Tabs from '../../../../src/tabs/tabs'
import TabsNav from '../../../../src/tabs/tabs-nav'
import TabsItem from '../../../../src/tabs/tabs-item'
import TabsContent from '../../../../src/tabs/tabs-content'
import TabsPane from '../../../../src/tabs/tabs-pane'
export default {
    components: {
        'c-tabs': Tabs,
        'c-tabs-nav': TabsNav,
        'c-tabs-item': TabsItem,
        'c-tabs-content': TabsContent,
        'c-tabs-pane': TabsPane
    },
    data(){
        return {
            TabsName: '1'
        }
    }
}
</script>

<style lang="scss" scoped>
.c-item {
    border: 1px solid #d1d5da;
    padding: 24px;
    margin: 1em 0;
}
</style>