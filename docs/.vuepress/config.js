module.exports = {
    title: '无涯之舟',
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {text: '前端知识每日3+1', link: '/前端知识每日3+1/'},
            {
                text: '联系我', items: [{
                    text: '邮箱', link: 'mailto://freesupersun@freesupersun.com'
                },
                    {text: 'github', link: 'https://github.com/FreeSuperSun'},
                    {text: 'gitee', link: 'https://gitee.com/freesupersun'}]
            },
        ],
        sidebar: 'auto'
    },
    plugins: {
        "vuepress-plugin-auto-sidebar": {}
    }
}