JNI 基础准备

JNI 全称：Java Native Interface。从Java1.1开始，JNI标准成为java平台的一部分，它允许Java代码和其他语言写的代码进行交互。
https://www.ibm.com/support/knowledgecenter/SSYKE2_8.0.0/com.ibm.java.vm.80.doc/docs/jni_overview.html

//    该类使用jni调用sysplore提供的dll获取动画数据
//    生成.h c++头文件：javah -classpath D:\company\simulation\target\classes -d D:\company\simulation\src\main\java\com\tongyuan\simulation\jni -jni com.tongyuan.simulation.service.ReadMsrFile

头文件生成
1. javac example/Sample1.java

2. javah -classpath . -jni example.Sample1

javah命令

-classpath ： 文件所在的根路径；

-d : 输出 *.h 头文件的路径；

-jni ： 生成JNI样式的包头文件，可以理解成 *.class 文件的 包路径+类名

此处比较诡异的是，-classpath 必须得是.class 的包路径文件的上一级；-jni 必须是.class 文件的 包路径+类名，否则会报错。


javah -classpath C:\Users\lic\Desktop\scalacpptest\target\classes -d C:\Users\lic\Desktop\scalacpptest\jni -jni jexample.Sample1



3. 参考https://gitee.com/smirkcat/scalacpptest


java调用dll

1. java调用helloWorld级别dll：   https://blog.csdn.net/nikaihua008/article/details/72628136?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task


2. java调用依赖别的库的dll：  在系统环境变量中配置该dll依赖的所有dll所在的路径.  如  C:\Users\lic\Documents\Visual Studio 2010\Projects\helloJni\x64\Debug

3. 






！！！注意：   java调用有依赖别的库的dll时，  在系统环境变量中需要添加该dll依赖的所有dll所在的文件路径.  如  C:\Users\lic\Documents\Visual Studio 2010\Projects\helloJni\x64\Debug； 加载时用system.load(path);
