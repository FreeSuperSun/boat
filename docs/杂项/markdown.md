---
title: markdown
---

# markdown

## 小技巧

#### markdown 的表格中需要竖线“|”这样的特殊符号，咋办？

使用 `&#124;` 代替.

列a|列b
---|---
我是分隔线|&#124;

>[V2EX](https://www.v2ex.com/t/169359)

#### 在Markdown件中慎用尖括号和html元素

在使用html时,一定要用反引号给包起来或者使用`&lt;`及`&gt;`,否则Markdown解析器会发生错误.

因为在Markdown中是允许直接书写HTML代码的,所以解析就会发生错误.