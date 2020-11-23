module.exports = {
    title: '无涯之舟',
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {text: '前端每日3+1', link: '/three-plus-one/'},
            {text: '编程基本知识', link: '/编程基本知识/'},
            {
                text: '联系我', items: [{
                    text: '邮箱', link: 'mailto://freesupersun@freesupersun.com'
                },
                    {text: 'github', link: 'https://github.com/FreeSuperSun'},
                    {text: 'gitee', link: 'https://gitee.com/freesupersun'}]
            },
        ],
        sidebar: [
            '/',
            '/markdown'
        ]
    },
    plugins: {}
}