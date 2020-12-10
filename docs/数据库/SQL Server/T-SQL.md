---
title: T-SQL
---

# T-SQL

## 条件语句

`case-when-then`

又分为两种:1.简单case函数与搜索case函数

```sql
SELECT   ProductNumber, Category =  
      CASE ProductLine  
         WHEN 'R' THEN 'Road'  
         WHEN 'M' THEN 'Mountain'  
         WHEN 'T' THEN 'Touring'  
         WHEN 'S' THEN 'Other sale items'  
         ELSE 'Not for sale'  
      END,  
   Name  
FROM Production.Product  
ORDER BY ProductNumber;  

SELECT   ProductNumber, Name, "Price Range" =   
      CASE   
         WHEN ListPrice =  0 THEN 'Mfg item - not for resale'  
         WHEN ListPrice < 50 THEN 'Under $50'  
         WHEN ListPrice >= 50 and ListPrice < 250 THEN 'Under $250'  
         WHEN ListPrice >= 250 and ListPrice < 1000 THEN 'Under $1000'  
         ELSE 'Over $1000'  
      END  
FROM Production.Product  
ORDER BY ProductNumber ;  
```

**注意点**

1. case语句类似于switch,只会匹配第一个匹配到的条件,后续的不会再匹配.

#### 参考链接

[Microsoft doc](https://docs.microsoft.com/en-us/sql/t-sql/language-elements/case-transact-sql?view=sql-server-ver15)

[SQL之case when then用法](https://www.cnblogs.com/richardzhu/p/3571670.html)

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