---
title: 树莓派
---

## 安装系统

有各种系统可选,最简单的办法是使用Raspberry Pi Imager,选择相应的系统下载并烧录.

系统不是安装进去的,是直接烧录到卡里,将卡作为硬盘去用的.

## ssh远程连接

官方系统默认是不开ssh的,需要在boot分区手动建立ssh文件,然后就可以远程连接了

树莓派raspbian系统用户为pi ，密码默认为raspberry ；root 权限密码为raspberry。

## 系统基本操作

### 换源

```conf
# 编辑 `/etc/apt/sources.list` 文件，删除原文件所有内容，用以下内容取代：
deb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main non-free contrib rpi
deb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main non-free contrib rpi

# 编辑 `/etc/apt/sources.list.d/raspi.list` 文件，删除原文件所有内容，用以下内容取代：
deb http://mirrors.tuna.tsinghua.edu.cn/raspberrypi/ buster main ui
```

### 远程桌面

rdp - 安装 xrdp vnc - 未知