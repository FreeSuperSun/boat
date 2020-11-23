# Day2-3:写一下方法去掉字符串中的空格

### 需求

写一个方法去掉字符串中的空格，要求传入不同的类型分别能去掉前、后、前后、中间的空格.

### 解决方案

前后的空格可以用字符串函数trim去掉.中间的空格需要使用正则表达式匹配.

有几个需要注意的点.
1. 使用split后join的思路是不行的,碰上连续的空格就没有办法了.
2. 直接使用/s+/匹配不可以,会影响所有的空格.
3. 使用正则的难点在于如何在去除中间空格时不影响前后的空格,需要使用零宽断言.
4. 还有个技巧,可以先把前后的空格存起来,再去掉所有的空格,再前前后的加上,只是不够优雅.

```javascript
function removeBlank(before = false, middle = false, after = false, stringToTrim) {
    if (before) {
        stringToTrim = stringToTrim.trimLeft();
    }
    if (after) {
        stringToTrim = stringToTrim.trimRight();
    }
    if (middle) {
        let pattern = /(?<!^\s*)\s+(?!\s*$)/g;
        stringToTrim = stringToTrim.replace(pattern, '');
    }
    return stringToTrim;
}


let testString = '     adfa adf ad 23 42 f   adf ad fa f adf    ';

console.log(removeBlank(false, true, false, testString));
```
### 知识点

#### 正则表达式

见 正则表达式.

## 参考链接
[github解析](https://github.com/haizlin/fe-interview/issues/6)