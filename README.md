# zl-gitckt-specdir
node开发的,一个可以检出git仓库指定目录的模块

## 在程序代码中调用

1. 本地安装：npm i zl-gitckt-specdir -S
   
2. 使用
   
```js
let gitcktSpecdir = require("zl-gitckt-specdir");
// 从如下gitUrl地址拉取项目目录indexDB-demo,目录保存位置为saveDir，默认为当前命令执行时所在目录
gitcktSpecdir({
    gitUrl: 'https://gitee.com/zhangluzhanglu/zl-pro-demo-code.git',
    dirName: 'indexDB-demo',
    saveDir: "./aa/bb/cc/dd/zzzz"
})
```

## 在cmd/终端窗口中调用

1. 全局安装：npm i zl-gitckt-specdir -g
   
2. 使用
```js

格式：命令 参数

示例
  命令：zl-gitpull 
  参数：gitUrl=https://gitee.com/zhangluzhanglu/zl-pro-demo-code.git##dirName=indexDB-demo##saveDir=.
  参数格式说明：  参数名=参数值##参数名=参数值##参数名=参数值   （参数之间以两个#作为分隔符）

完整调用：zl-gitpull gitUrl=https://gitee.com/zhangluzhanglu/zl-pro-demo-code.git##dirName=indexDB-demo##saveDir=./

```
## 调用示例说明
1. 调用时，会在指向位置（默认当前目录）生成临时目录
2. 目录拉取成后，临时目录会删除掉
   ![1](/assets/1_v6ecw2r1d.png)
   ![2](/assets/2.png)

## 完整参数说明
```js
 * @description 从远程git仓库拉取指定目录内容
 * @param {object} param 参数对象 
 * @param {string} param.gitUrl  欲拉取项目的git仓库地址 
 * @param {string} param.dirName 拉取的指定目录名
 * @param {string} param.saveDir 拉取的内容保存地址，默认为当前目录 
 * @param {string} param.delGit  拉取完后是否删除.git文件（默认为true,删除）
 * @param {string} param.isUseEndDir  如果指定的目录有多个层级，那么是否取最后一级，默认为true,取最后一级.否则取完整路径

```