---
title: Day2:语言元素
---

# Day2:语言元素

## 常用数据类型

1. 整型
2. 浮点型
3. 字符串型 单双引号,三单双引号多行
4. 布尔型 True,False
5. 复数 3+5j

## 变量命名规则

1. 大小写敏感
1. 小写字母拼写,多个单词下划线形式
2. 受保护实例属性用单个下划线开头
3. 私有实例属性用两个下划线开头

## 数据类型的确认和转换

### type()函数

使用`type()`检查类型
```python
a = 321
b = 12
print(a + b)    # 333
print(a - b)    # 309
print(a * b)    # 3852
print(a / b)    # 26.75
```

### 数据类型转换

1. int()：将一个数值或字符串转换成整数，可以指定进制。
1. float()：将一个字符串转换成浮点数。
1. str()：将指定的对象转换成字符串形式，可以指定编码。
1. chr()：将整数转换成该编码对应的字符串（一个字符）。
1. ord()：将字符串（一个字符）转换成对应的编码（整数）。

## 运算符

只写几个不熟悉的特别的,通用的就不写了.

运算符|描述
---|---
[] [:] | 下标(取数组元素) 切片
~|按位取反
//|整除
& ^ &#124;|按位与 按位异或 按位或
!=|不等于

## 杂项

#### input()获取键盘输入

```python
a = input('a = ')
```

#### % 格式化运算符(不推荐使用)

[Python教程](https://docs.python.org/zh-cn/3/library/stdtypes.html#old-string-formatting)

```python
a = int(input('a = '))
b = int(input('b = '))
print('%d + %d = %d' % (a, b, a + b))
print('%d - %d = %d' % (a, b, a - b))
print('%d * %d = %d' % (a, b, a * b))
print('%d / %d = %f' % (a, b, a / b))
print('%d // %d = %d' % (a, b, a // b))
print('%d %% %d = %d' % (a, b, a % b))
print('%d ** %d = %d' % (a, b, a ** b))
```

#### 代码折行

```python
# 如果代码太长写成一行不便于阅读 可以使用\对代码进行折行
is_leap = year % 4 == 0 and year % 100 != 0 or \
          year % 400 == 0
print(is_leap)
```