# 圣杯布局和双飞翼布局的理解和区别，并用代码实现

### 圣标布局和双飞翼布局实现的需求

1. 三列布局
2. 两侧列宽度固定,中间列宽度自适应
3. 中间列需要优先渲染

### 实现

#### 圣杯布局实现
1. 首先创建html元素,center放前面就会进行优先渲染.
    ```html
    <div id="holy-container">
        <div id="holy-center"></div>
        <div id="holy-left"></div>
        <div id="holy-right"></div>
    </div>
    ```
2. 给三列的div和父div加入背景色和outline,标识的更清晰
    ```css
    #holy-container {
        background-color: #6699CC;
        outline: black 1px solid;
    }
    
    #holy-container > div {
        outline: black 1px solid;
        height: 300px;
    }
    
    #holy-center {
        background-color: #663366;
    }
    
    #holy-left, #holy-right {
        background-color: #CCCC99;
    }
    ```
3. 设置 left right的宽度为固定值,设置center宽度为100%;设置center left right为float:left,使其浮动;设置container为
overflow:hidden,使其能撑高;设置 left right宽度.
    ```css
    #holy-container {
        overflow: hidden;
        min-width: 400px;
        max-width: 100px;
    }
    
    #holy-container > div {
        float: left;
    }
    
    #holy-center {
        width: 100%;
    }
    
    #holy-left, #holy-right {
        width: 150px;
    }
    ```
4. 设置container的padding,使left与right被挤下去.center独占一行.
    ```css
    #holy-container {
        padding:0 150px;
    }
    ```
5. 设置left right为相对定位,合理的设置其左边距和相对移动距离,使其上移一行并显示在center两侧
    ```css
    #holy-left {
        position: relative;
        margin-left: -100%;
        left: -150px;
    }

    #holy-right {
        position: relative;
        margin-left: -150px;
        right: -150px;
    }
    ```
#### 双飞翼布局实现

### 其它知识

#### 为什么在holy-container div中设置 `overflow:hidden`便会使得div本身有高度?

因为设置overflow为hidden时,就会创建BFC,导致div在auto高度下计算方式会包括浮动的子元素的高度.

至于BFC是什么,那是另一个话题了.

#### 参考链接
> [github解答页](https://github.com/haizlin/fe-interview/issues/2)

> [css布局之圣杯布局和双飞翼布局](https://juejin.im/post/6844903568718184461)

> [CSS中为什么overflow:hidden能清除浮动(float)的影响？原理是什么？](https://www.zhihu.com/question/30938856)