---
title: animation动画
---

# animation 动画

## 原理

1. 通过设置animation相关的属性设置动画的相关属性.
2. 通过@keyframe设置具体的动画效果,具体设置方法就是设置在某个阶段元素的状态, 作为动画的关键帧.
3. CSS会自动处理关键帧之前的动画过程.

#### CSS动画优点

1. 非常容易的创建动画,不需要了解JavaScript就能创建动画.
2. 动画运行效果良好,对设备性能要求低.
3. 使浏览器控制动画效果,可以考虑是否显示等因素对动画进行优化.

## 相关语法

### animation相关属性

属性名|描述|备注
---|---|---
animation|动画相关属性的简写形式|顺序无关
animation-delay|动画何时开始,从动画应用在元素上到动画开始的时间.|默认0,可以为负值,表示从动画中间开始
animation-direction|播放方向|normal 正向循环<br>alternate交替循环<br>reverse 反向循环<br>alternate-reverse,反向交替循环
animation-duration|运行一个周期的时长|默认0s,无动画
animation-iteration-count|运行次数|可为小数,可为infinite无限.
animation-name|@keyframes设置的关键帧名称|WebStorm需要用字符串形式
animation-play-state|动画运行状态,是否在运行|running,paused,可以通过设置这个来暂停动画
animation-timing-function|动画执行节奏|为一个或多个timing-function.
animation-fill-mode|动画执行前后如何应用CSS属性|none 不应用<br>forwards 保留最后的关键帧<br>backwards 应用最开始的关键帧<br>both 同时前后


1. animation-direction是与count配合的,单独设置有些没有效果.

#### timing-function 取值

取值|描述
---|---
ease|默认值,一开始加速更快,接近中间中加速已经变慢
linear|线性
ease-in|开始慢,后不断加速
ease-in-out|开始和结束慢
ease-out|结束慢
step-start|立刻到结束状态
step-end|一直保持初始状态直到结束,再到结束状态.
cubic-bezier()|立方贝塞尔曲线
step()|步长函数

### @keyframes定义动画序列

其实就是定义不同时间动画元素的各项属性,比如移动,变色等.

以percent(10% 20%)定义不同时间的属性,有两个特别的from和to,定义动画开始和结束.



## 踩坑

1. WebStorm中设置animation-name的时候,需要使用字符串,否则会报错,虽然不会影响正常运行.
2. 计算动画过程还是要依靠相同的属性,并不会那么智能.比如下面的例子
    ```css
    @keyframes slide {
     from {
        right: 0;
    }
    to {
        left:0;
       }
    }

    .keyFrames {
    position: fixed;
    animation-name: 'slide';
    animation-duration: 3s;
    }
    ```
   这样是没有动画效果的.

## 参考链接

[MDN CSS动画](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations)