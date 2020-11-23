# Day1-2:圣杯布局和双飞翼布局的理解和区别，并用代码实现

### 圣标布局和双飞翼布局实现的需求

1. 三列布局
2. 两侧列宽度固定,中间列宽度自适应
3. 中间列需要优先渲染
4. 以最高的一列为整体的高度

### 实现

#### 圣杯布局实现

1. container内的三列 center left right设为浮动,container设置overflow:hidden(撑高container).
1. container设置左右的padding,两侧留出left right的空间,center宽度设为100%.此时left right会被顶到下一行.
2. left right 设置负的margin-left,使得left right 回到与center同样的行.
3. left right设置为相对定位,并设置合适的偏移量,使得显示在center两侧.因为container
设置了padding,不设置偏移量的话left right的左右位置会被压缩.
4. 建议设置container的max-width与min-width以保证显示效果.

#### 双飞翼布局实现

1. 与圣杯布局类似
1. container不设置左右padding,而是在center内再加一个inner-center,
设置其左右侧margin,挤出放置left right的空间.
2. left right不需要设置相对定位和偏移量.因为container不设置padding.

#### 绝对定位方式的实现
1. 与圣杯布局类似,但container不设置padding,而不center设置margin,使两侧有空间.
2. left right使用绝对定位,定位至两侧空白.由于left right设置成绝对定位,container
需要设置成相对定位.

#### 弹性盒布局

终极单行单列布局方式,除了旧版浏览器的兼容性问题之外没有其它缺点.

具体参考弹性盒的使用.

#### 几种实现缺点
1. 圣杯布局在特定情况下会破碎,center的宽度小于left宽度时布局会出现混乱
2. 绝对定位布局在left right高度大于center的时候,会导至下方其它元素显示问题,因为left right
无法撑高container.
3. 双飞翼布局会增加客外的DOM,增加计算量.
4. 弹性盒要考虑其兼容性.

优先使用弹性盒,现代化的解决方案.

### 其它知识

#### 为什么在holy-container div中设置 `overflow:hidden`便会使得div本身有高度?

因为设置overflow为hidden时,就会创建BFC,导致div在auto高度下计算方式会包括浮动的子元素的高度.

至于BFC是什么,那是另一个话题了.

#### 参考链接
> [github解答页](https://github.com/haizlin/fe-interview/issues/2)
>
> [css布局之圣杯布局和双飞翼布局](https://juejin.im/post/6844903568718184461)
>
> [CSS中为什么overflow:hidden能清除浮动(float)的影响？原理是什么？](https://www.zhihu.com/question/30938856)
>
>[【布局】聊聊为什么淘宝要提出「双飞翼」布局](https://github.com/zwwill/blog/issues/11)
>
>CSS权威指南
>
>精通CSS高级Web标准解决方案