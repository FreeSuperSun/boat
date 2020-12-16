module.exports = {
    title: '无涯之舟',
    theme: 'reco',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        sidebarDepth: 0,
    },
    plugins: [
        require('./vuepress-plugin-nav-and-sidebar')
    ]
}