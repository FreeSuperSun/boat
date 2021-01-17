---
title: kettle基本操作
---

## 连接其它数据库

### 连接GBase

#### 方法1,使用JDBC驱动

1. 下载GBase的JDBC驱动,放入`data-integration/lib`文件夹中.
2. 配置新的数据库链接时,选择以下几项:
    1. 连接名称自己输入
    2. 连接类型选择`Generic database`.
    3. 连接方式选择`Native(JDBC)`
    4. 设置中自定义连接URL为`jdbc:gbase://address:port`
    5. 自定义驱动类名称为`com.gbase.jdbc.Driver`,注意这里用`ctrl+alt+space`是查不到
       的,不影响使用.
    6. 然后在最下面输入账号密码.
   
#### 方法2,使用mpp插件

不知道插件是哪里来的,要把插件放到`plugins`文件夹.

然后数据库连接就可以选择mpp了.