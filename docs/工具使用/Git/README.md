---
title: 杂项
---

#### 同时向多个远程分支提交代码

```bash
git remote set-url --add origin https://github.com/jicklin/bokeyuan.git
```

可以通过 `git remote set-url --add origin origin-rul`为同一个远程仓库名称添加多个推送地址.

[git一个本地分支同时向多个远程分支提交代码](https://www.jianshu.com/p/dee791260538)

## 踩坑

1. 当提示权限不够不能进行回滚操作的时候,除了检查本身git对目录的权限之后,还要考虑
是不是文件本身正在被其它程序修改,导致无法对文件进行修改.