---
title: 写一个方法把下划线命名转成大驼峰命名
---

# 写一个方法把下划线命名转成大驼峰命名

## 代码

```js
function toCamel(originName) {
    return originName.split('_').map((item) => {
        return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
    }).join('');
}


const strTest = 'this_is_a_function_0';

console.log(toCamel(strTest));
```

## 踩坑

1. 使用`toUpperCase()`的时候不能忘掉后面的括号.不知道为什么WebStorm没有报错,执行时才报错.
2. 此种情况没有考虑多个连续下划线的情况,因为给出要求就是标准的下划线命名.如果要考虑
多个下划线的情况,可以使用正则将其替换为单个下划线,再使用这次的函数.

## 相关链接

[Github解答页](https://github.com/haizlin/fe-interview/issues/12)