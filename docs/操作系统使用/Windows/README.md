---
title: Windows
---

# Windows

## UWP

### 开着代理的情况下UWP应用无法连接,如Store等.

原因:

>Win10 所有 UWP 应用均运行在被称为 App Container 的虚拟沙箱环境中，App Container 可以保证应用安全性，但同时也阻止了网络流量发送到本机（即 loopback）， 使大部分网络抓包调试工具无法对 UWP 应用进行流量分析。同样的，该机制也阻止了 UWP 应用访问 localhost，即使你在系统设置中启用了代理，也无法令 UWP 应用访问本地代理服务器。

下载[Fiddle Classic](https://www.telerik.com/download/fiddler)

1. 点击WinConfig.
2. 选择要启用的应用,勾选后点击`Save Change`.

[解决使用代理时 Win10 UWP 应用无法联网问题](https://zhuanlan.zhihu.com/p/55906778)

## 命令行

#### 刷新DNS本地缓存

```cmd
ipconfig /flushdns
```

[如何刷新本地的DNS缓存？](https://jingyan.baidu.com/article/6d704a13fb6e1828db51ca3a.html)

#### cmd让命令在后台执行

```shell script
start /b run.bat
```

[如何在Windows的cmd下让程序在后台执行](https://blog.csdn.net/gobitan/article/details/3364160)