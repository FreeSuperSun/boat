---
title: URL
---

定义了一系列访问操作URL的API.

## 属性

###### searchParams

返回一个URLSearchParams对象,包含当前URL中解码后的GET查询参数.

本身具备一个迭代器,可以对键值进行遍历

```js
for (const [key, value] of mySearchParams) {}
for (const [key, value] of mySearchParams.entries()) {}
```

