1. fastjson用于将Java Bean序列化为JSON字符串，也可以从JSON字符串反序列化到JavaBean。

2. 血的教训！！！！！因为单词（momentNotice、messageNotice）写错了，改了将近1d，期间有多次回光返照，在某些时候感觉好了

3. 后端向前端传的Date()格式如果未经转字符串处理，则在前端进行字符串拼接时会存在问题！！！！
      
4. 监控服务器资源比如内存、磁盘等的使用情况。 处理方案： 脚本统计, 提供接口统一访问   专门的运维工具，比如普罗米修斯、beat  之类的可采集数据

5. java.nio.charset.MalformedInputException: Input length = 1  
文件编码异常 https://blog.csdn.net/congzi0424/article/details/52162288

6. java.sql.SQLException: Incorrect string value: '\xE7\x96\xAF\xE7\x96\xAF...' for column 'name' at row 1
    解决方案：mysql和java中文编码错误。java使用utf8，mysql数据库、表、字段统一用utf8 （特别注意具体到字段！！！）

7. 运行jar、war包
```
java -jar projectName.jar --spring.config.location=./application.properties

```

8.unzip java.lang.IllegalArgumentException: MALFORMED
```
            //利用Tika的AutoDetectReader类检测文件的编码格式 
            //https://tika.apache.org/1.17/api/org/apache/tika/detect/AutoDetectReader.html
            AutoDetectReader dr = new AutoDetectReader(new FileInputStream(file));
            Charset charset = dr.getCharset();
```

9.idea远程调试jar服务
参考网址： https://blog.csdn.net/miwanmeng/article/details/85283562
注意事项：
类似于-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005 这样的语句直接拷贝由idea生成的    

如果debug失效了解决办法是停掉idea服务和远程服务后重新启动
