---
title: 简述你对BFC规范的理解
---

# 简述你对BFC规范的理解

## BFC相关

BFC(Block Formatting Context块级格式化上下文)是CSS中的一个渲染机制,相当于一个盒子.内部的元素与外界的元素互不干扰,谁也影响不了谁.

### BFC形成条件

如果有以下任意一条,就会形成一个BFC:

1. float值不是none.
2. position的值不是static或者relative
3. display的值是 inline-block,table-cell,flex,table-caption,flow-root
4. overflow的值不是visible.

### BFC特点

1. 内部的盒子会在垂直方向上一个接一个的放置.
2. 属于同一个BFC的两个相邻的盒子的margin会重叠,与方向无关.
3. 每个元素的左外边距与包含块的左边界接触
4. 计算BFC高度时,浮动的元素也参与计算.
5. 浮动 清除浮动 外边距折叠只会影响在同一个BFC元素内.
6. 

### BFC应用

1. 使得float元素不会乱跑.
2. 普通元素与浮动元素产生边距.
3. 使得浮动元素父元素佣有与浮动元素相同的高度.
4. 避免外边距折叠.

## 参考链接

[Github解析页](https://github.com/haizlin/fe-interview/issues/20)