module.exports = {
    base: '/care/',
    title: 'Care',
    description: 'Just do whatever you want',
    themeConfig: {
        // 顶部导航
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/install' },
            { text: 'GitHub', link: 'https://github.com/ChenNing02/care' },
        ],
        // 侧边导航
        sidebar: [
            {
                title: '指南',
                collapsable: false, // 可选的, 默认值是 true, 标题的展开收起功能开关
                // sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/guide/install'
                    // '/guide/use',
                ]
            },
            {
                title: '组件',
                collapsable: false, // 可选的, 默认值是 true, 标题的展开收起功能开关
                children: [
                    '/use/button',
                    '/use/input',
                    '/use/toast',
                    '/use/tabs',
                    '/use/collapse',
                    '/use/lattice',
                    '/use/layout',
                    '/use/divider',
                    '/use/icon',
                ]
            }
        ]
    }
}