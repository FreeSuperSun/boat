---
title: 使用link和@import有什么区别
---
# Day1-1: 页面导入样式时,使用link和@import有什么区别?
### 知识点

#### `link`引入CSS样式的用法
```html
<link rel="stylesheet" type="text/css" href="sample-code/css2.css" media="all">
```

#### `@import`引入CSS样式的用法
```css
@import url(sample-code/css2.css);
```
1. `@import`可以用在<style></style>标签中,或者用在外部的样式表文件中.
2. `@import`必须写在最前面,如果前面有其它的CSS样式,则@import会被忽略.
2. `@import`后面如果有其它的样式,则最后面的分号不能省略.

### 区别

* `link`是html标签,不仅可以用来加载css,还可以定义RSS,定义rel属性等;而`@import`是css提供的.
* `link`引入的样式在页面加载时同时加载,同步加载;`@import`引入的样式需要页面加载完成后再加载,异步加载.
所以在网速慢情况下可能会出现一开始没有样式,闪烁一下出现样式后的页面.
* `link`没有兼容性问题,`@import`是CSS2.1引入的语法,IE5以下不支持.
* `link`可以通过js操作DOM动态引入样式表,`@import`不可以.

### 使用建议

建议使用`link`标签,慎用`@import`方式.

可以避免产生资源文件下载顺序混乱和http请求过多.

### 其它知识

#### `link`与`@import`权重的区别

`link`与`@import`在权重方面没有区别,只遵循CSS本身的层叠性,可以理解为将`@import`替换为
引入的外部CSS文件,然后根据权重与层叠进行渲染.

#### 参考链接
>[github解答页](https://github.com/haizlin/fe-interview/issues/1)
>
>[由link和@import的区别引发的CSS渲染杂谈](https://www.cnblogs.com/KilerMino/p/6115803.html)
>
>[高性能网站设计:不要使用@import](https://www.qianduan.net/high-performance-web-site-do-not-use-import/)
