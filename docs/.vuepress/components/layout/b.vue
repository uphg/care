<template>
    <div class="c-item">
        <c-layout>
            <c-sider width="200px">Sider</c-sider>
            <c-layout>
                <c-header>Header</c-header>
                <c-content>Content</c-content>
                <c-footer>Footer</c-footer>
            </c-layout>
        </c-layout>
    </div>
</template>

<script>
import Header from '../../../../src/layout/header.vue'
import Content from '../../../../src/layout/content.vue'
import Footer from '../../../../src/layout/footer.vue'
import Layout from '../../../../src/layout/layout.vue'
import Sider from '../../../../src/layout/sider.vue'
export default {
    components: {
        'c-header': Header,
        'c-content': Content,
        'c-footer': Footer,
        'c-layout': Layout,
        'c-sider': Sider
    }
}
</script>

<style lang="scss" scoped>
.header, .footer, .sider, .layout {
    text-align: center;
}
.header, .footer {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #b3c0d1;
}
.content {
    padding: 1em 0;
}
.sider {
    padding: 1em 0;
    background-color: #d3dce6;
}
.layout {
    height: 400px;
    background-color: #e9eef3;
}
.c-item {
    border: 1px solid #d1d5da;
    padding: 24px 24px;
    margin: 1em 0;
}
</style>