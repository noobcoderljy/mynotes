## 创建版本库
初始化一个仓库，使用`git init`
向版本库添加文件分为两个步骤
1. 使用命令`git add <file>`,可以反复多次使用提交，将工作区的修改添加到暂存区.  
`git add .`可以将当前工作区的全部修改添加到暂存区.
2. 使用命令`git commit -m "message"`将暂存区的修改全部提交到分支。

## 个人信息配置
`git config --global user.name "name"` #用户名  
`git config --global user,email "email"` #用户邮箱.  
-- global参数可以设置当前机器所有git库.  
`git config --list` #查看当前配置.

## 版本回退
在git中,有一个HEAD指向分支中的不同版本.  
HEAD表示当前版本  
HEAD^表示上一个版本  
HEAD^^表示上上个版本
HEAD~x表示前面第x个版本  
`git log` 可以查看所有的提交信息,用来查看所需要的版本id.  
`git relog` 可以查看所有操作信息,用来查看未来的版本id.  
`git reset`可以跳转HEAD指针,使得指针指向你所需要的版本.  
`git reset HEAD`可以撤销暂存区的修改.

## 撤销修改
如果你在工作区中修改了文件,但还没有add到暂存区中,你可以使用`git checkout -- file`来撤销工作区的修改.  
如果已经add到暂存区中,你可以使用`git reset HEAD`来撤销暂存区中的修改,然后使用`git checkout`来撤销工作区中的修改.  

## 删除文件
在 git中删除也是一个修改,当你需要删除一个文件是,直接`rm file`来删除工作区的文件.  
如果是你确实要删除的文件,那么使用`git rm file`来删除版本库中的文件  
如果并不是你需要删除的文件,那么使用`git checkout`来撤销工作区的修改.  

## 远程仓库
使用`ssh-keygen -t rsa -C "xxxx@email.com"`来生成秘钥.你可以在用户主目录找到.ssh文件,其中id_rsa是私钥,id_rsa_public是公钥,将公钥配置到github中就使用远程仓库了.  
使用`git remote add origin url`将本地仓库连接到远程仓库中.其中origin是url的缩写,可以自己设定.  
`git remote`可以列出已存在的远程分支.  
`git remore -v|--verbose` 列出详细信息.

`git push -u origin master`可以将本地master分支推送到远程,-u参数可以将本地master分支与远程分支连接起来,方便克隆与拉取.  
`git clone url`可以将远程库克隆到本地.  


## git 分支管理

   `git branch` #查看分支  
   `git branch <name>`#创建分支 
   `git checkout <name>`或`git switch <name>` #切换分支  
   `git checkout -b <name>`或`git switch -c <name>` #创建并且切换分支  
   `git merge <name>` #合并目标分支到当前分支  
   `git branch -d <name>` #删除分支.
