---
title: 去除字符串最后一个指定的字符
---

# 去除字符串最后一个指定的字符

## 思路 
使用 String.prototype.lastIndexOf()查找字符位置,然后删除之,返回删除后的字符串.

```js
function delLast(mainString, delString) {
    let lastIndex = mainString.lastIndexOf(delString);
    if (lastIndex > -1) {
        let newArray = mainString.split('');
        newArray.splice(lastIndex, delString.length);
        mainString = newArray.join('');
    }
    return mainString;
}

const stringTest = 'adfadfqwerqefadfadf';

console.log(delLast(stringTest, 'qef'));
```

## 参考链接
>[Github解答页](https://github.com/haizlin/fe-interview/issues/9)