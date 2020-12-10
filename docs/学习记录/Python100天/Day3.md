---
title: Day3:分支结构
---

# Day3:分支结构

## 分支结构

if elif else

```python
x = float(input('x = '))
if x > 1:
    y = 3 * x - 5
elif x >= -1:
    y = x + 2
else:
    y = 5 * x + 3
print('f(%.2f) = %.2f' % (x, y))
```

## 杂项

#### 代码块的构成

不是用花括号,而是用缩进的方式,并且代码块的入口需要有冒号

```python
username = input('请输入用户名: ')
password = input('请输入口令: ')
# 用户名是admin且密码是123456则身份验证成功否则身份验证失败
if username == 'admin' and password == '123456':
    print('身份验证成功!')
else:
    print('身份验证失败!')
```