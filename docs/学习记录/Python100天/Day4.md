---
title: Day4:循环结构
---

# Day4: 循环结构

## 两种循环

for-in循环,适合明确知道循环次数或者对一个可迭代对象进行迭代的时候.

while循环,适合知道退出条件,但不知道迭代次数据时候.

可以使用 break continue关键字.

### for-in循环

```python
sum = 0
for x in range(2, 101, 2):
    sum += x
print(sum)
```

### while循环

```python
counter = 0
while counter <= 10
    counter++
```

## 杂项

#### range(start,stop,step)函数

产生一个数字序列.

参数为整数,区间前闭后开,start会包括,stop不包括

step为步长,可为负.
