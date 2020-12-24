---
title:ssh
---

## ssh配置

#### 修改SSH默认端口

1. 打开配置文件,路径为`etc/ssh/sshd_config`
2. 设置或者添加Port字段,设为想修改的端口.
3. 执行命令重启ssh服务.
   ```bash
   #/etc/init.d/sshd restart     

   #service sshd restart 
   ```
