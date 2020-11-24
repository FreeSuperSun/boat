---
title: T-SQL
---

# T-SQL

## 杂项

1. 定义某一列的默认值
```tsql
--add
create table table_name
(
    column_a int default 0
)

-- alter
alter table table_name
default 0 for column_a
```

2. 存储过程如何设置默认值

```tsql
create proc proc_name
@first int = null,
@second int = 2,
@third int = 3
as
...
go
```

调用时是按位置传值,所以有默认值尽量放在参数列表后面,就可以
根据调时的参数个数选择是否使用默认值.