---
title: 写一个判断数据类型的方法
---

## typeof的局限

1. typeof只能判断基本类型,不能区分具体的引用类型.
2. typeof判断null的时候会判断为object,因为null被认为是对一个空对象的引用.
3. typeof会识别函数

```js
console.log(typeof null);  //object
console.log(typeof new Array([])); //object
console.log(typeof function (){}); //function
```

## 利用Object.prototype.toString()和call()来实现

Object.prototype.toString()使用一定的机制,可以输出类型的名称.

由于所有的类型都由Object派生,所以通过调用Object.prototype.toString.call(obj),就可以
输出obj的类型.

如果在obj的定义中设置好了相关的值,就可以输出实际的名称,否则就会输出object.

许多原生类型已经进行了这样的设置,所以在原生类型对象上调用会取得原生类型的名称.

配合正则对输出的名称进行处理,就可以得到具体的类型的名称.

```js
function myType(v){
    return Object.prototype.toString.call(v).replace(/^.{8}(.+)]$/,(m,$1)=> $1.toLowerCase());
}

function type (obj) {
	return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g,'');
}

const typeCheck = (obj) => {
  const typeStr = Object.prototype.toString.call(obj);
  return typeStr.toLowerCase().slice(8, typeStr.length - 1);
};

const getDataType = el => {
    const dataType = Object.prototype.toString.call(el);
    return dataType.split(' ')[1].split(']')[0];
};
```

## 参考链接

[Github解析页](https://github.com/haizlin/fe-interview/issues/27)

[JavaScript 中 apply 、call 的详解](https://github.com/lin-xin/blog/issues/7)

[谈谈 Object.prototype.toString](https://juejin.cn/post/6844903477940846600)

[JavaScript:Object.prototype.toString方法的原理](https://www.cnblogs.com/ziyunfei/archive/2012/11/05/2754156.html)