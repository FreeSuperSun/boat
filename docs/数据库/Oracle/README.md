---
title: Oracle
---

## 杂项

### 清理日志

两种操作方式:
1. 手动删除日志文件,然后在RMAN中执行命令,清理数据库中的日志信息.
    ```plsql
    crosscheck archivelog all;
    delete expired archivelog all;
    ```
2. 在RMAN中执行删除日志命令
    ```plsql
    delete archivelog all completed before 'sysdate-n'
    ```
[菜鸟求助——oraarch中的文件是否可以直接删除](https://bbs.51cto.com/archiver/tid-887442.html)