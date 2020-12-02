/*
 * @Author: lwy
 * @Date: 2020-10-22 14:49:18
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-22 15:03:21
 * @FilePath: /02_LearnCLI/lib/core/help.js
 */
const { program } = require('commander');
const helpOpts = () => {
  // 增加options
  // Commander 使用.option() 方法来定义选项，同时可以附加选项的简介
  // 每个选项可以定义一个短选项名称（-后面接单个字符）和一个长选项名称（--后面接一个或多个单词），
  // 使用逗号、空格或|分隔。
  program.option('-l --lwy', 'a lwy cli')

  // 设置参数（使用尖括号声明）
  program.option('-d --dest <dest>', 'a destination folder, 例如：/src/cpns')

  program.option('-f --framework')
  // 监听命令
  program.on('--help', function () {
    console.log("--------------");
    console.log("Other:");
  })
}

module.exports = {
  helpOpts
}