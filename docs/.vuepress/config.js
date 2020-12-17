module.exports = {
    title: '无涯之舟',
    theme: 'reco',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        sidebarDepth: 0,
        author: 'FreeSuperSun',
        subSidebar: 'auto'
    },
    plugins: [
        require('./vuepress-plugin-nav-and-sidebar')
    ]
}