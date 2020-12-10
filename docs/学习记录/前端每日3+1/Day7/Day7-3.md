---
title: 统计某个字符串在另一个字符串中出现的次数
---

# 统计某个字符串在另一个字符串中出现的次数

## 踩坑

这个题是有陷井的,并不那么简单.

比如`aaaa`中`aa`出现了几次?`ababa`中`aba`出现了几次?

在计算子字符串出现次数的时候,如果匹配到了一次,不能直接把子字符串直接删掉,因为子字符串中
后面的几个字符与子字符串之后出现的字符组合起来有可能仍然匹配到.

所以有两个简单方案是不可以行的:

1. 使用匹配,匹配成功能删除出现的子字符串,再次进行匹配
2. 使用split按子字符串将原字符串分割,计算分割出来的数组长度.

## 思路

想到以下几个思路:

1. 最原始的方法,根据子字符串的长度从原字符串开始进行遍历对比,匹配一次计算一次.
2. 使用合适的正则进行匹配.直接使用子字符串匹配是没用的.

### 原始遍历

```javascript
function subStrCount(str, subStr) {
    let count = 0;
    for (let i = 0; i < str.length - subStr.length; i++) {
        if (subStr === str.slice(i, i + subStr.length)) {
            count++;
        }
    }
    return count;
}

let str = 'aaaaaa';
let subStr = 'aa';

console.log(subStrCount(str, subStr));
```

也可以稍微优化一下,第一次匹配的时候使用include或者match,找到第一个匹配的位置,然后删掉第一个字符及之
前的字符,再次进行匹配.

原理上没有区别.
### 正则匹配

使用零宽断言可以解决重复匹配的问题.

零宽断言是匹配前面或者后面有指定模式的位置,所以所有的位置都会匹配.

```js
function subStrCount(str, subStr) {
    let reg = new RegExp(`(?=${subStr})`, 'g');
    return str.match(reg);
}

let str = 'aaaaa';
let subStr = 'aa';

console.log(subStrCount(str, subStr));
```
## 相关知识

### 正则匹配方式问题

无论是贪婪还是懒惰,都无法解决这种匹配问题.因为无论哪种匹配,匹配一次后就不会再次进行匹配了.

### split重复匹配问题

split只会检测到第一个匹配的时候就切断,后面再次执行,所以无法解决这个问题.

### 字符串插值

```js
let reg = new RegExp(`(?=${subStr}`,'g');
```

其中的`${subStr}`部分一开始没有看懂,还以为$是正则的一部分.

其实这里是字符串字面量的一种使用方法.用反引号包括的字符串中可以使用字符串插件,即`${exp}`.

中间可以放置一个JavaScript表达式,可以自动构成字符串.

## 参考链接

[Github解析页](https://github.com/haizlin/fe-interview/blob/master/category/history.md)