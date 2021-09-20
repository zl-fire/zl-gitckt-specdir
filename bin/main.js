#!/usr/bin/env node
let gitcktSpecdir = require("../index");
let path = require("path");
let param = process.argv[2];//获取用户输入的参数
// console.log(process.argv);
// console.log(path.resolve("."));
//显示帮助命令
if (param === "-help") {
    console.log("\nzl-gitpull 作用为拉取远程git仓库的指定目录\n");
}
else if (param === "-v") {
    console.log("当前版本为:", require('../package.json').version);
}
else {
    // 开始解析命令行中输入的参数
    let arr = param.split("##");
    arr = arr.filter(o => o != "");
    let obj = {};
    arr.forEach(ele => {
        let nameVal = ele.split("=");
        obj[nameVal[0]] = nameVal[1];
    })
    console.log(obj);
    // gitUrl=https://gitee.com/zhangluzhanglu/zl-pro-demo-code.git##dirName=indexDB-demo##saveDir=./
    // 开始拉取代码
    gitcktSpecdir(obj);
}
