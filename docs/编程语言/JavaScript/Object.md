---
title: Object
---

# Object

## Object相关函数

#### Object.prototype.toString()

未被重载的情况下,会返回对象的类型,形式为"[object type]",其中type为对象的类型.

可以通过调用Object.prototype.toString.call()或Object.prototype.toString.apply()
的方式来检测对象的类型.可以识别基本类型及原生引用类型.

自定义的类型如果未进行重载,将为显示为"[object Object]".

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)

#### Object.prototype.assign()

Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。