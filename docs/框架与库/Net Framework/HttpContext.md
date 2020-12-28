---
title: HttpContext
---

## 命名空间

System.Web

## 属性

#### Current

当前HTTP请示的HttpContext对象.

#### Request

为当前HTTP请求获取HttpRequest对象.

```csharp
string result = HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"];
```