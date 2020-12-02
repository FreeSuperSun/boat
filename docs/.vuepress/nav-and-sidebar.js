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
    {text: '杂项', link: '/杂项/'},
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

const sidebarFolders = ['代码库', '杂项', '学习记录/前端每日3+1','数据库'];
let sidebar = {};

//生成侧边栏的入口
async function generateSidebar() {
    //对每个需要生成侧边栏的文件夹进行生成
    for (let folder of sidebarFolders) {
        let sidebarForFolder = {[appendSlash(folder)]: await generateSidebarForFolder(folder)};
        Object.assign(sidebar, sidebarForFolder);
    }
    console.log(sidebar);
}

async function generateSidebarForFolder(folder) {
    let sidebarSelf = [];
    //列出本级有哪些文件和文件夹
    const folderPath = path.join(basePath, folder);
    const filesAndFolders = await fs.readdir(folderPath);
    //首先根据README.md生成链接
    if (filesAndFolders.includes('README.md')) {
        sidebarSelf.push({
            //TODO 这里要改成README里面的内容
            title: path.basename(folder),
            path: appendSlash(folder)
        });
        //删掉,防止后面重复处理
        filesAndFolders.splice(filesAndFolders.indexOf('README.md'), 1);
    }
    //所有md文件生成本级链接
    for (let markdownFile of filesAndFolders.filter((item, index) => {
        return path.extname(item) === '.md'
    })) {
        //每个生成链接
        sidebarSelf.push({
            title: markdownFile,
            path: appendSlash(folder) + path.parse(markdownFile).name
        })
        //删除之
        filesAndFolders.splice(filesAndFolders.indexOf(markdownFile), 1);
    }
    //剩下的都是文件夹了向下递归所有文件夹
    for (let childFolder of filesAndFolders) {
        sidebarSelf.push({
            title: childFolder,
            children: await generateSidebarForFolder(folder + '/' + childFolder)
        });
    }
    return sidebarSelf;
}

generateSidebar().catch();

//前后加上斜杠
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
            children: [
                {path: '/学习记录/前端每日3+1/Day1/Day1-1'},
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