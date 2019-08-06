1. fastjson用于将Java Bean序列化为JSON字符串，也可以从JSON字符串反序列化到JavaBean。

2. 血的教训！！！！！因为单词（momentNotice、messageNotice）写错了，改了将近1d，期间有多次回光返照，在某些时候感觉好了

3. 后端向前端传的Date()格式如果未经转字符串处理，则在前端进行字符串拼接时会存在问题！！！！

4. mybatis中多表关联查询，如果多个表的id相同则只能查询到每种关联结果中的一条，解决办法：使用列别名

5. 内连接：
SELECT O.ID,O.ORDER_NUMBER,C.ID,C.NAME FROM CUSTOMERS C INNER JOIN ORDERS O ON C.ID=O.CUSTOMER_ID;
  左外连接： 是用的是LEFT  JOIN或LEFT OUTER JOIN     连接语句。
SELECT O.ID,O.ORDER_NUMBER,O.CUSTOMER_ID,C.ID,C.NAME
FROM ORDERS O LEFT OUTER JOIN CUSTOMERS C ON C.ID=O.CUSTOMER_ID
WHERE O.ORDER_NUMBER<>'MIKE_ORDER001';
  右外连接：
      
6.	
