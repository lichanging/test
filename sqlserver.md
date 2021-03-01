1. 在Windows server2012安装.net3.5     选择Windows Server 2012 iso镜像中的 ./source/sxs
https://www.opcsupport.com/s/article/How-to-install-NET-Framework-3-5-when-the-Features-Source-files-could-not-be-found-installation-warning-message-appears-in-Windows-Server-2012


2. sql server在安装的时候就可以配置远程登录、用户名密码登录，但是安装完后只能通过计算机名和密码登录，如果还需要通过ip和密码登录则需要配置对tcp/ip做配置，特别注意：ipAll端口一定要填                https://zhuanlan.zhihu.com/p/27288660


3. SqlServer用户被锁定
ALTER LOGIN 用户名 ENABLE ;
GO
ALTER LOGIN 用户名 WITH PASSWORD = 'password' unlock, check_policy = off,
check_expiration = off ;
GO


4. 
