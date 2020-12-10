---
title: iframe框架有哪些优缺点
---

# iframe框架有哪些优缺点

## iframe相关技术

iframe,内联框架元素,可以将另一个HTML页面嵌入到当前页面中.

每个嵌入的浏览上下文都有自己的会话历史记录和DOM树.

## 优点

1. 重载iframe内页面时不需要重载整个页面,只需要重载框架面
2. 技术易于掌握,使用方便
3. 方便制作一些通用的独立的部件,如导航栏.

## 缺点

1. 会产生很多页面,不容易管理
2. 打印会有问题
3. 对搜索引擎不友好
4. 会增加浏览器的资源占用,网络占用,资源请求.
5. window.onload会等待所有的iframe加载完成后触发

## 总结

有很多新的技术可以替代iframe,除非特殊情况,否则不建议再使用.

## 参考链接

[Github解析页](https://github.com/haizlin/fe-interview/issues/19)

[知乎讨论](https://www.zhihu.com/question/20653055)

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe)