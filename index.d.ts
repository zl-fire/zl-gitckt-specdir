export = gitcktSpecdir;
/**
 * @function gitcktSpecdir
 * @description 从远程git仓库拉取指定目录内容
 * @param {object} param 参数对象
 * @param {string} param.gitUrl  欲拉取项目的git仓库地址
 * @param {string} param.dirName 拉取的指定目录名
 * @param {string} param.saveDir 拉取的内容保存地址，默认为当前目录
 * @param {string} param.delGit  拉取完后是否删除.git文件（默认为true,删除）
 * @param {string} param.isUseEndDir  如果指定的目录有多个层级，那么是否取最后一级，默认为true,取最后一级.否则取完整路径
 * @example
 *
 *  param.gitUrl  欲拉取项目的git仓库地址
 *  param.dirName 拉取的指定目录名
 *  param.saveDir 拉取的内容保存地址，默认为当前目录
 *  param.delGit  拉取完后是否删除.git文件（默认为true,删除）
 *  param.isUseEndDir  如果指定的目录有多个层级，那么是否取最后一级，默认为true,取最后一级.否则取完整路径
 *
 * gitcktSpecdir({
 *     gitUrl: 'https://gitee.com/zhangluzhanglu/zl-pro-demo-code.git',
 *     dirName: 'indexDB-demo',
 *     saveDir: "./aa/bb/cc/dd/zzzz"
 * })
 */
declare function gitcktSpecdir(param: {
    gitUrl: string;
    dirName: string;
    saveDir: string;
    delGit: string;
    isUseEndDir: string;
}): void;
