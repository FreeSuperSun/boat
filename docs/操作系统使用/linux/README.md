---
title: linux
---

# linux

## 常用命令

### 修改密码

    ```bash
    passwd username
    ```

### tar 打包/解包/压缩/解压缩

首先明确打包和压缩的区别,打包是将若干个文件组合成一个总的文件,压缩则是将一个文件或者
若干个文件通过一定的压缩算法减少占用空间.

之所以需要区别打包和压缩是因为有一些压缩程序只能将一个文件进行压缩,所以要先进行打包,
然后再将打包后的文件进行压缩.

tar本身是一个打包工具,不过可以通过调用压缩程序来一次完成打包和压缩.

#### 命令格式

```shell script
tar [必要参数] [可选参数] [压缩文件名] ([被压缩文件或目录])
```

必要参数包括:
* x 提取文件
* c 压缩文件
* t 显示压缩文件内容
* v 显示操作过程
* z 调用gzip压缩或解压(.tar.gz .tgz)
* j 调用bz压缩或解压缩(.tar.bz .tar.bz2 .bz .bz2)

可选参数包括:

* f 指定压缩文件

示例:
```shell script
tar -cvf log.tar log2012.log

tar -zcvf log.tar.gz log2012.log

tar -jcvf log.tar.bz2 log2012.log

tar -ztvf log.tar.gz

tar -zxvf /opt/soft/test/log.tar.gz
```

[tar命令](https://www.cnblogs.com/peida/archive/2012/11/30/2795656.HTML)

### scp 基于ssh的文件复制

```shell script
scp local_file remote_username@remote_ip:remote_folder 

scp local_file remote_username@remote_ip:remote_file 

scp local_file remote_ip:remote_folder 

scp local_file remote_ip:remote_file 

scp root@www.runoob.com:/home/root/others/music /home/space/music/1.mp3 

scp -r www.runoob.com:/home/root/others/ /home/space/music/
```

[Linux scp命令](https://www.runoob.com/linux/linux-comm-scp.html)