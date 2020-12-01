---
title:返回随机整数
---

# 返回随机整数

```js
//返回[0,m)范围内随机整数,包括0,不包括m.
function getRandomInteger(m) {
    return Math.floor(Math.random() * m);
}

//返回[0,m]范围内随机整数,包括0,包括m.
function getRandomInteger(m) {
    return Math.floor(Math.random() * (m + 1));
}

//返回[min,max)范围内的随机整数
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//返回[min,max]范围内随机整数
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
```