# Day1-3:用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值

#### 具体要求

这是一道大题目，把考点拆成了四个小项；需要候选人用递归算法实现（限制15行代码以内实现；
限制时间10分钟内完成）：
1. 生成一个长度为5的空数组arr。
2. 生成一个（2－32）之间的随机整数rand。
3. 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到arr内[需要使用递归实现，不能使用for/while等循环]
4. 最终输出一个长度为5，且内容不重复的数组arr。
### 代码

```js
const LENGTH = 5;
let myArray = new Array(LENGTH);
let count = 0;

function getRandomNum() {
    return Math.floor(Math.random() * 31 + 2);
}

function fillArray(filledArray) {
    const newNum = getRandomNum();
    if (filledArray.indexOf(newNum) !== -1) {
        fillArray(filledArray);
    } else {
        filledArray[count] = newNum;
        count++;
        if (count === LENGTH) {
            console.log(myArray);
            return 'finished';
        } else {
            fillArray(filledArray);
        }
    }
}

fillArray(myArray);
```
### 知识点

#### 指定范围的随机整数

js的`Math.random()`返回的是0到1之间的随机数,包含0但是不包含1,记为`[0,1)`.配合floor和ceil可以返回任意
范围的随机整数.

要注意如果使用Math.round()函数的话,可能会造成各个数字之间出现概率不等.
```js
//返回[0,m)范围内随机整数,包括0,不包括m.
function getRandomInteger(m) {
    return Math.floor(Math.random() * m);
}

//返回[0,m]范围内随机整数,包括0,包括m.
function getRandomInteger(m) {
    return Math.floor(Math.random() * (m + 1));
}

//返回[min,max)范围内的随机整数
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//返回[min,max]范围内随机整数
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
```


#### 递归算法
递归算法的关键在于确认退出条件,以及及时更新退出条件.

在本题中,退出条件就是执行5次插入动作,所以更新count变量必须是在插入一个新值之后.

如果发现生成的随机数已经在数组中,就没必要检测count的状态,因为count不可能发生变化.

检测count是否完成要放在count发生变化之后.

#### 参考链接
>[github解析页](https://github.com/haizlin/fe-interview/issues/3)