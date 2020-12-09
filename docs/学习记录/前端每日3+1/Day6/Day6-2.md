---
title: 用CSS创建一个三角形
---

# 用CSS创建一个三角形

## 利用边框

边框之间是相关垂直的关系,利于设置4个边框的宽度,可以得到任意的三角形.

多个三角形利于定位相互重叠,就可以做出很多效果.

<template>
<div>
  <div class="triangle">
  </div>
  <div class="anotherTriangle"></div>
  </div>
</template>

<script>
export default {
  name: "triangle"
}
</script>

<style scoped>
.triangle {
  background-color: black;
  height: 0;
  width: 0;
  border: 50px #CCCCFF solid;
  border-right-color: #CCFF99;
  border-bottom-color: #FFFFCC;
  border-left-color: #FFCCCC;
  margin:10px auto;
}
.anotherTriangle {
  background-color: black;
  height: 0;
  width: 0;
  border:  #CCCCFF solid;
  border-width: 40px 30px 20px 10px;
  border-right-color: #CCFF99;
  border-bottom-color: #FFFFCC;
  border-left-color: #FFCCCC;
  margin:10px auto;
}
</style>

```css
.triangle {
  background-color: black;
  height: 0;
  width: 0;
  border: 50px #CCCCFF solid;
  border-right-color: #CCFF99;
  border-bottom-color: #FFFFCC;
  border-left-color: #FFCCCC;
  margin:10px auto;
}
.anotherTriangle {
  background-color: black;
  height: 0;
  width: 0;
  border:  #CCCCFF solid;
  border-width: 40px 30px 20px 10px;
  border-right-color: #CCFF99;
  border-bottom-color: #FFFFCC;
  border-left-color: #FFCCCC;
  margin:10px auto;
}
```

## 利用背景渐变或者选择区域来实现

## 参考链接

[Github解析](https://github.com/haizlin/fe-interview/issues/17)