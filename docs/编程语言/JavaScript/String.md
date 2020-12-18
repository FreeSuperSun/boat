---
title: String
---

# 字符串 String

### String.prototype.replace() 字符串替换

```javascript
str.replace(regexp|substr, newSubStr|function)
```

#### 简单替换

被替换参数为简单字符串或简单正则匹配,替换参数为简单字符串时,替换规则就很简单,直接进行替换.

被替换参数为简单字符串和简单正则匹配的区别在于,如果是字符串的话就只会替换第一个匹配项,
正则的话则是根据匹配模式.

#### 替换参数字符串使用参数

如果被替换参数为正则,则在替换字符串中可以使用一些特殊的变量名.

字符串参数|函义
---|---
$$| 转义$
$&|插入匹配的子串
$`|匹配子串左边内容
$'|匹配子串右边内容
$n|正则的分组引用匹配
$&lt;name&gt;|正则的具名引用匹配

#### 替换参数为函数

匹配执行后,会调用传入的函数,将函数返回值作为替换字符串.

函数同样可以使用一些特殊的参数

参数函数特殊参数|含义
---|---
match|匹配到的子串
pn(p1,p2..)|分组引用
$n|分组引用
offset|匹配到的子字符串在原字符串中的偏移量
string|被匹配的原字符串
NamedCaptureGroup|具名引用对象

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#使用字符串作为参数)

#### String.prototype.charCodeAt(index)

返回字符串指定位置的UTF-16数字.

#### String.prototype.match(regexp)

正则匹配

#### String.prototype.slice(beginIndex,endIndex)

返回子字符串,不修改原字符串.

#### String.prototype.substring(beginIndex,endIndex)

slice的退化版.索引不能为负数.

