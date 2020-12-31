---
title: Window
---

## 属性

#### location

返回一个Location对象.

## 方法

#### scrollTo()/scroll()

两个函数是相同的.

```js
window.scroll(x-coord, y-coord)
window.scroll(options)
```
x-coord 为横轴座标,y-coord为纵轴座标

options是一个对象,包含三个属性:
1. top 等同于y-coord
2. left 等同于x-coord
3. behavior smooth表示平滑滚动,instant表示瞬间滚动.

