const path = require('path');
const fs = require('fs/promises');
const basePath = path.resolve(path.join(__dirname, '..'));
const nav = [
    {text: '首页', link: '/'},
    {
        text: '学习记录', items: [
            {text: '前端每日3+1', link: '/学习记录/前端每日3+1/'}
        ]
    },
    {text: '杂项', link: '/编程基本知识/'},
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

const sidebarFolders = ['代码库', '杂项'];
let sidebar = [];

//生成侧边栏的入口
async function generateSidebar() {
    //对每个需要生成侧边栏的文件夹进行生成
    for (let folder of sidebarFolders) {
        let sidebarForFolder = {['/' + folder + '/']: await generateSidebarForFolder(folder)};
        sidebar.push(sidebarForFolder);
    }
    console.log(sidebar);
}

async function generateSidebarForFolder(folder) {
    let sidebarSelf = [];
    //列出本级有哪些文件和文件夹
    const folderPath = path.join(basePath, folder);
    const filesAndFolders = await fs.readdir(folderPath);
    //首先生成Readme.md
    if (filesAndFolders.includes('README.md')) {
        sidebarSelf.push({
            title: path.basename(folder),
            path: appendSlash(folder)
        });
    }
    //所有md文件生成本级链接

    //向下递归所有文件夹
    return sidebarSelf;
}

generateSidebar().catch();

function appendSlash(path) {
    return '/' + path + '/';
}

let sidebar_test = {
    '/代码库/': [
        '',
        'JS返回随机整数',
    ],
    '/编程基本知识/': [
        '',
        'markdown',
        '正则表达式'
    ],
    '/学习记录/前端每日3+1/': [
        {title: '首页', path: '/学习记录/前端每日3+1/'},
        {
            title: 'Day1',
            children: [{path: '/学习记录/前端每日3+1/Day1/Day1-1'},
                {
                    title: 'Day2',
                    children: [{path: '/学习记录/前端每日3+1/Day2/Day2-1'}]
                }]
        }
    ],
};
module.exports = {
    nav: nav, sidebar: sidebar
}