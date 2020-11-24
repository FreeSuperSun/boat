module.exports = {
    title: '无涯之舟',
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {text: '前端每日3+1', link: '/前端每日3+1/'},
            {text: '编程基本知识', link: '/编程基本知识/'},
            {text: '数据库', link: '/数据库/'},
            {text: '代码库', link: '/代码库/'},
            {
                text: '联系我', items: [{
                    text: '邮箱', link: 'mailto://freesupersun@freesupersun.com'
                },
                    {text: 'github', link: 'https://github.com/FreeSuperSun'},
                    {text: 'gitee', link: 'https://gitee.com/freesupersun'}]
            },
        ],
        sidebarDepth: 0,
        sidebar: {
            '/代码库/': [
                '',
                'JS返回随机整数',
            ],
            '/编程基本知识/': [
                '',
                'markdown',
                '正则表达式'
            ],
            '/前端每日3+1/': [
                '',
                'Day1-1'
            ],
            '/前端每日3+1/Day1/': [
                'Day1-1',
                'Day1-2',
                'Day1-3'
            ]
        }
    },
    plugins: {}
}