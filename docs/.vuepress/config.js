let navAndSidebar = require('./nav-and-sidebar.js');
module.exports = {
    title: '无涯之舟',
    themeConfig: {
        nav: navAndSidebar.nav,
        sidebarDepth: 0,
        sidebar: navAndSidebar.sidebar,
    },
    plugins: {}
}