

# 在页面上隐藏元素的方法有哪些

## 思路

1. 利于位置属性或者浮动字位,将元素移动至视窗之外.
2. 设置其宽高为0.
3. 翻转元素,旋转到看不见. transform: rotate,transform:skew.
2. 利于z-index,将其置于其它元素之下.
3. 设置其透明度 opacity:0,使其不显示. 看不见,但会占据空间.
4. 设置display:none 不会渲染,可减少首屏渲染时间,会引起回流和重绘
5. 使用visibility:hidden 会泻染但不显示
6. 使用全局属性 hidden
7. transform:scale(0)