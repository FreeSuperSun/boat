---
title: WebConfigurationManager
---

在配置文件应用于 Web 应用程序时提供对配置文件的访问.访问Web.config文件中定义的相关信息.

## 命名空间

System.Web.Configuration

## 属性

### WebConfigurationManager.AppSettings

返回Web.config文件中的AppSetting段键值对对象.

返回值类型为NameValueCollection.

```cs
this.Page.Title = System.Web.Configuration.WebConfigurationManager.AppSettings["CompanyInfoLoginPageTitle"];
```

### WebConfigurationManager.ConnectionStrings

反回Web.config文件中的connectionStrings段.

返回值类型为ConnectionStringSettingsCollection

```csharp
string dbConn = WebConfigurationManager.ConnectionStrings["BPMDB"].ConnectionString;
```