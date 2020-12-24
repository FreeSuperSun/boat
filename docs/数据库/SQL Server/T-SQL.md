---
title: T-SQL
---

## 

## GROUP BY

### ROLLUP

放在GROUP BY子句里面,用于生成分组小计,类似于分类汇总.

好像有两种,一种是在GROUP BY后面加上WITH ROLLUP;一种是使用GROUP BY ROLLUP(col1,col2).

两者没有区别,GROUP BY(col1,col2) WITH ROLLUP跟GROUP BY ROLLUP(col1,col2)是一样的.第二种更
灵活,可以与普通的列配合,如 GROUP BY col1,ROLLUP(col2).

GROUP BY ROLLUP (col1, col2, col3, col4) 为以下列表中的每个列表达式组合创建组。
col1、col2、col3、col4
col1、col2、col3、NULL
col1、col2、NULL、NULL
col1、NULL、NULL、NULL
NULL、NULL、NULL、NULL

#### 参考链接

[SQL Server中Rollup关键字使用技巧(统计功能)](https://blog.csdn.net/chenguang79/article/details/7187571)

### GROUPING

作为一个条件,判断该行数据是否在某列上进行了分组. GROUPING(col1).

可以用在SELECT子句(CASE)或HAVING子句中,配合ROLLUP可以隐藏不需要的合计列.

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

#### SELECT与SET赋值的区别

使用select与set都可以给变量赋值,不过二者之间也有细微差别

1. select可以在一个语句中给多个变量赋值,set只能给一个变量赋值.
2. set使用查询结果赋值时,如果查询返回多行,则会报错.select则会将最后一行的值赋给变量.
3. 如果查询结果返回0行,则select不会改变变量的值;set则会将变量值设为null.

[set与select为变量赋值的区别](https://www.cnblogs.com/gered/p/10647575.html)

#### 类型转换

```sql
-- CAST Syntax:  
CAST ( expression AS data_type [ ( length ) ] )  
  
-- CONVERT Syntax:  
CONVERT ( data_type [ ( length ) ] , expression [ , style ] )  
```

