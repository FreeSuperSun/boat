---
title: CSS选择器有哪些?哪些属性以继承?
---

# 第4天 CSS选择器有哪些?哪些属性可以继承?

## CSS的选择器

选择器|例子|描述
---|---|---
通用选择器| * |选择所有元素
类选择器|.intro|选择`class="intro"`的所有元素
ID选择器|#intro|选择`id="intro"`的所有元素
类型(标签)选择器| div|选择所有的div标签
后代选择器|div p|选择所有的div内部的p标签
子选择器|div>p|选择父元素为div的p元素
群组选择器|div,p|选择所有的div元素和p元素
同辈选择器|div~p|选择在div元素后且与div素有相同父元素的p元素
相临同辈选择器|div+p|选择在紧邻在div元素后面且与div元素有相同父元素p元素
属性选择器|input[type="submit"]|选择有属性type,属性值为submit的input元素
伪元素选择器|::before|伪元素
伪类选择器|a:link|伪类

## CSS有哪些属性可以继承

## 相关知识

### 属性选择器的匹配模式

有点类似于正则表达式的字符串匹配.

匹配模式|示例|说明
---|---|---
存在匹配|abbr[title]|匹配存在title属性的abbr元素
开头匹配|a[href^="http://"]|匹配href以http://开头的a元素
结尾匹配|img[src$=".jpg"]|
包含匹配|a[href*="/about/"]|
分隔匹配|a[rel~=next]|匹配rel属性中以空格分隔的值中包含next的a元素
短线匹配|a[lang&#124;=en]|匹配en或en-us

## CSS继承性

css继承特性主要是指文本方面的继承，盒模型相关的属性基本没有继承特性。 

CSS的继承其实很符合逻辑,基本上想一下是否该继承就可以得到结果.

#### 不可继承的
display、margin、border、padding、background、height、min-height、max-height、width、min-width、max-width、overflow、position、top、bottom、left、right、z-index、float、clear、 table-layout、vertical-align、page-break-after、page-bread-before和unicode-bidi。 
#### 所有元素可继承的： 
visibility和cursor 
#### 终极块级元素可继承的： 
text-indent和text-align 
#### 内联元素可继承的： 
letter-spacing、word-spacing、white-space、line-height、color、font、font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction 
#### 列表元素可继承的： 
list-style、list-style-type、list-style-position、list-style-image

## 参考链接

[CSS选择器有哪些？哪些属性可以继承？优先级算法如何计算？内联和important哪个优先？](https://blog.csdn.net/sjinsa/article/details/70768483)

[精通CSS高级Web标准解决方案(书)]()

[css有哪些属性可以继承？](https://www.jianshu.com/p/fbfc6c751e34)
