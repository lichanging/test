<h1>git常用命令</h1>

1. 本地新建一个和远程分支同名的分支                  git checkout --track origin/branch_name

2. git命令删除远程分支                              git branch -r -d origin/branchName

3. 删除本地分支　                                   git branch -d 分支名

4. 查看项目分支（包括本地和远程）                     git branch -a

5. fatal unable to get credential storage lock File exists       
   解决办法：win10环境下，把C:\Users\lic 目录下  .git-credentials.lock 文件删除掉 ，重新提交后成功保存用户名

6. [git项目更换项目名且远程仓库移动到其它路径怎么关联远程和本地？](https://docs.qq.com/doc/DUGdjR0Z0TGl0c29Y)

