const nav = [
    {text: '首页', link: '/'},
    {
        text: '学习记录', items: [
            {text: '前端每日3+1', link: '/学习记录/前端每日3+1/'},
            {
                text: '测试链接', items: [
                    {text: 'Day1', link: '/学习记录/前端每日3+1/Day1'},
                    {text: 'Day2', link: '/学习记录/前端每日3+1/Day2'},
                    {
                        text: '测试链接2', items: [
                            {text: 'Day3', link: '/学习记录/前端每日3+1/Day3'}
                        ]
                    }
                ]
            }
        ]
    },
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
];

const sidebar = {
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
};
module.exports = {
    nav: nav, sidebar: sidebar
}