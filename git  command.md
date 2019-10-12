1. 本地新建一个和远程分支同名的分支                 git checkout --track origin/branch_name

2. git命令删除远程分支                            git branch -r -d origin/branchName

3. 删除本地分支　                                 git branch -d 分支名

4. 查看项目分支（包括本地和远程）                  git branch -a

5. fatal unable to get credential storage lock File exists       
     把C:\Users\lic 目录下文件删除掉，然后配置config  
    （1） git config --global user.name "youName"
    （2） git config --global user.email youemialName@example.com   
