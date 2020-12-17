---
title: 常用命令
---

## 防火墙

CentOS 7.0默认使用的是firewall作为防火墙

查看防火墙状态

```shell script
firewall-cmd --state
```

停止firewall
```shell script
systemctl stop firewalld.service
```

禁止firewall开机启动
```shell script
systemctl disable firewalld.service 
```