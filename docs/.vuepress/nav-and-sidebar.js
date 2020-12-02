
const path = require('path');
const fs = require('fs/promises');
const matter = require('gray-matter')

//基础路径
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

//要生成侧边栏的文件夹清单
// const sidebarFolders = [path.join('学习记录', '前端每日3+1')];
const sidebarFolders = ['代码库', '杂项', path.join('学习记录', '前端每日3+1'), '数据库'];
let sidebar = {};

console.log(path.join('学习记录', '前端每日3+1'));

//生成侧边栏的入口
async function generateSidebar() {
    //对每个需要生成侧边栏的文件夹进行生成
    for (let folder of sidebarFolders) {
        //需要特别处理,否则windows下出错
        let sidebarForFolder = {[appendSlash(folder).replace(/\\/g, '/')]: await generateSidebarForFolder(folder)};
        Object.assign(sidebar, sidebarForFolder);
    }
    console.log(sidebar);
}

//为指定文件夹生成侧边栏
async function generateSidebarForFolder(folder) {
    let sidebarSelf = [];
    //列出本级有哪些文件和文件夹
    const folderPath = path.join(basePath, folder);
    const filesAndFolders = await fs.readdir(folderPath);
    //首先根据README.md生成链接
    if (filesAndFolders.includes('README.md')) {
        sidebarSelf.push({
            title: await getTitleFromFolderOrFile(folder),
            path: appendSlash(folder).replace(/\\/g, '/')
        });
        //删掉,防止后面重复处理
        filesAndFolders.splice(filesAndFolders.indexOf('README.md'), 1);
    }
    //所有md文件生成本级链接
    for (let markdownFile of filesAndFolders.filter((item) => {
        return path.extname(item) === '.md'
    })) {
        console.log(markdownFile);
        //每个生成链接
        sidebarSelf.push({
            title: await getTitleFromFolderOrFile(path.join(folder, markdownFile)),
            // title: markdownFile,
            //这里需要手动替换一下,windows环境下会不对
            path: appendSlash(folder).replace(/\\/g, '/') +
                path.parse(markdownFile).name
        })
        //从数组删除之
        filesAndFolders.splice(filesAndFolders.indexOf(markdownFile), 1);
    }
    //剩下的都是文件夹了向下递归所有文件夹
    for (let childFolder of filesAndFolders) {
        sidebarSelf.push({
            title: await getTitleFromFolderOrFile(path.join(folder, childFolder)),
            children: await generateSidebarForFolder(path.join(folder, childFolder))
        });
    }
    // console.log(sidebarSelf);
    return sidebarSelf;
}


//前后加上斜杠
function appendSlash(path) {
    return '/' + path + '/';
}

//得到文件夹内的README.md里面的title或者指定md文件的title
async function getTitleFromFolderOrFile(fileOrFolderPath) {
    //文件的话
    if (path.extname(fileOrFolderPath) === '.md') {
        try {
            //如果能读到README.md文件,就返回读到的title
            const fileContent = await fs.readFile(path.join(basePath, fileOrFolderPath), 'utf-8');
            const title = matter(fileContent).data.title;
            // console.log(title);
            if (title) {
                return title
            } else {
                // console.log(path.basename(fileOrFolderPath));
                return path.basename(fileOrFolderPath);
            }
        } catch {
            //如果读不到,就返回最后文件夹的名字
            return path.basename(path.dirname(fileOrFolderPath));
        }
    } else {
        //文件夹的话,就尝试读其内部的README.md文件
        return getTitleFromFolderOrFile(path.join(fileOrFolderPath, 'README.md'));
    }
}

// let sidebar_test = {
//     '/代码库/': [
//         '',
//         'JS返回随机整数',
//     ],
//     '/编程基本知识/': [
//         '',
//         'markdown',
//         '正则表达式'
//     ],
//     '/学习记录/前端每日3+1/': [
//         {title: '首页', path: '/学习记录/前端每日3+1/'},
//         {
//             title: 'Day1',
//             children: [
//                 {path: '/学习记录/前端每日3+1/Day1/Day1-1'},
//                 {
//                     title: 'Day2',
//                     children: [{path: '/学习记录/前端每日3+1/Day2/Day2-1'}]
//                 }]
//         }
//     ],
// };
module.exports = {
    nav: nav, sidebar: sidebar
}