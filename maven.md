<h1>maven常用命令</h1>

1. mvn archetype:create 创建Maven项目
2. mvn compile 编译源代码
3. mvn test-compile 编译测试代码
4. mvn test 运行测试
5. mvn site 生成项目相关信息的网站
6. mvn clean 清除项目的生成结果
7. mvn package 打包项目生成jar/war文件
8. mvn install 安装jar至本地库
9. mvn deploy 上传至私服
10. mvn eclipse:eclipse 生成Eclipse项目文件
11. mvn ieda:ieda 生成IDEA项目文件
12. mvn archetype:generate 反向生成maven项目的骨架
13. mvn -Dtest package 只打包不测试
14. mvn jar:jar 只打jar包
16. mvn test -skipping compile -skipping test-compile 只测试不编译也不编译测试
17. mvn eclipse:clean 清除eclipse的一些系统设置
18. mvn dependency:list 查看当前项目已被解析的依赖
19. mvn clean install -U 强制检查更新
21. mvn source:jar 打包源码
22. mvn jetty:run 运行项目于jetty上
23. mvn tomcat:run 运行项目于tomcat上
24. mvn -e 显示详细错误 信息:
25. mvn validate 验证工程是否正确，所有需要的资源是否可用
26. mvn integration-test 在集成测试可以运行的环境中处理和发布包
27. mvn verify 运行任何检查，验证包是否有效且达到质量标准
28. mvn generate-sources 产生应用需要的任何额外的源代码
29. mvn help:describe -Dplugin=help 输出Maven Help插件的信息
30. mvn help:describe -Dplugin=help -Dfull 输出完整的带有参数的目标列
31. mvn help:describe -Dplugin=compiler -Dmojo=compile -Dfull 获取单个目标的信息
32. mvn help:describe -Dplugin=exec -Dfull 列出所有Maven Exec插件可用的目标
33. mvn help:effective-pom 查看Maven的默认设置
34. mvn install -X 想要查看完整的依赖踪迹，打开 Maven 的调试标记运行
35. mvn install assembly:assembly 构建装配Maven Assembly
36. mvn dependency:resolve 打印已解决依赖的列表
37. mvn dependency:tree 打印整个依赖树
38. mvn dependency:sources 获取依赖源代码
39. -Dmaven.test.skip=true 跳过测试
40. -Dmaven.tomcat.port=9090 指定端口
41. -Dmaven.test.failure.ignore=true 忽略测试失败


