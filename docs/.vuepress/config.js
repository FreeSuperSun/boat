module.exports = {
    title: '无涯之舟',
    theme: 'reco',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        sidebarDepth: 0,
        author: 'FreeSuperSun',
        subSidebar: 'auto',
        subSidebarDepth: 6,
    },
    plugins: [
        require('./vuepress-plugin-nav-and-sidebar')
    ]
}