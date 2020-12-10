const path = require('path');
const fs = require('fs/promises');
const matter = require('gray-matter')

let sidebar = {};


const nav = [
    {text: '首页', link: '/'},
    {text: '编程语言', link: '/编程语言/'},
    {
        text: '学习记录', items: [
            {text: '前端每日3+1', link: '/学习记录/前端每日3+1/'},
            {text: 'Python100天', link: '/学习记录/Python100天/'}
        ]
    },
    {text: '数据库', link: '/数据库/'},
    {
        text: '企业平台', link: '/企业平台/'
    },
    {text: '代码库', link: '/代码库/'},
    {text: '杂项', link: '/杂项/'},
    {text: '杂项推荐', link: '/杂项推荐/'},
    {
        text: '联系我', items: [{
            text: '邮箱', link: 'mailto://freesupersun@freesupersun.com'
        },
            {text: 'github', link: 'https://github.com/FreeSuperSun'},
            {text: 'gitee', link: 'https://gitee.com/freesupersun'}]
    },
];
//基础路径
const basePath = path.resolve(path.join(__dirname, '..'));

//要生成侧边栏的文件夹清单
const sidebarFolders = ['编程语言', '代码库', '杂项', path.join('学习记录', 'Python100天'), path.join('学习记录', '前端每日3+1'), '数据库', '企业平台', '杂项推荐'];

//生成侧边栏的入口
async function generateSidebar() {
    let sidebar = {};
    //对每个需要生成侧边栏的文件夹进行生成
    for (let folder of sidebarFolders) {
        //需要特别处理,否则windows下出错
        let sidebarForFolder = {[appendSlash(folder).replace(/\\/g, '/')]: await generateSidebarForFolder(folder)};
        Object.assign(sidebar, sidebarForFolder);
    }
    return sidebar;
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
        // console.log(markdownFile);
        //每个生成链接
        sidebarSelf.push({
            title: await getTitleFromFolderOrFile(path.join(folder, markdownFile)),
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


module.exports = () => {
    return {
        name: 'vuepress-plugin-nav-and-sidebar',
        async ready() {
            // console.log('plugin is ready');
            sidebar = await generateSidebar();
        },
        async enhanceAppFiles() {
            return {
                name: "nav-and-sidebar",
                content: `export default ({ siteData, options }) => { siteData.themeConfig.sidebar = ${JSON.stringify(sidebar)}; siteData.themeConfig.nav = ${JSON.stringify(nav)}}`
            }
        }
    }
}
