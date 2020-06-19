module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        // 顶部导航
        nav: [
            { text: 'Home', link: '/' },
            { text: '文档', link: '/install/' },
            // { text: 'External', link: 'https://google.com' },
        ],
        // 侧边导航
        sidebar: [
            {
                title: '入门',
                collapsable: false, // 可选的, 默认值是 true, 标题的展开收起功能开关
                // sidebarDepth: 1,    // 可选的, 默认值是 1
                children: ['/install/']
            },
            {
                title: '我是标题',
                children: ['/get-started/']
            }
        ]
    }
}