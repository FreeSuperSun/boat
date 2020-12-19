---
title: Function
---

### Function.prototype.apply()/Function.prototype.call()

使用给定的this值调用函数本身,再加上传到函数中的参数.

apply()与call()的区别在于,apply()的参数为一个参数数组,而call()的参数为一个参数列表.

本质上是改变函数执行时的上下文,需要考虑与this相关的知识.

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

