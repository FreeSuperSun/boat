

# 第4天 HTML5的文件离线储存如何使用,工作原理是什么?

## 应用缓存

这里的文件离线储存指的应该是 应用缓存(Application Cache AppCache),已经废弃,不再使用.

推荐使用Service Works代替.

应用缓存基本的原理是声明一个配置文件,里面规定哪些文件需要被缓存,哪些文件不被缓存,
离线状态下访问某些文件时跳转到什么位置等.

会有很多小问题,所以被废弃了,不再使用.

## 涉及到浏览器端存储的相关方案

可以在浏览器端进行存储的方案有以下几种:

1. cookie
2. Web Storage(localStorage session Storage)
3. IndexedDB
5. service worker
4. application cache **已废弃**

## 参考链接
[Github解析页](https://github.com/haizlin/fe-interview/issues/10)

[有趣的HTML5：离线存储](https://segmentfault.com/a/1190000000732617)

[HTML5离线存储原理](https://segmentfault.com/a/1190000006984353)

[JavaScript高级程序设计(图书)]()

[你真的了解 Cookie 和 Session 吗](https://juejin.cn/post/6844903842773991431)