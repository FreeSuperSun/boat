---
title: 写一个把字符串大小写切换的方法
---

# 写一个把字符串大小写切换的方法

## 思路

1. 遍历字符串,根据每个字符的值切换大小写,再拼接成字符串
3. 遍历字符串,交每个字符与其大写对比,判断是否进行转换
2. 使用正则匹配,将大小写字母转换.

## 代码

### 遍历方法

```javascript
function switchUL(originString) {
    return originString.split('').map(item => {
        if (item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90)
            return item.toLowerCase();
        if (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122)
            return item.toUpperCase();
        return item;
    }).join('');
}

console.log(switchUL('aBc+Xy0Z'));
```

## 参考链接

[Github解析页](https://github.com/haizlin/fe-interview/issues/15)