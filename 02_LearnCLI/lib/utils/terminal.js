/*
 * @Author: lwy
 * @Date: 2020-10-24 15:57:59
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-24 16:20:18
 * @FilePath: /02_LearnCLI/lib/utils/terminal.js
 */
// 执行终端命令相关的代码

// 导入模块 正如名字所示 该模块会开启一个新的进程
// 为什么要开启一个进程？
// 因为我们需要我们当前的进程帮助我们执行js代码 比如createProjectAction函数
// 当我们需要执行npm install等终端命令的时候 需要把终端命令放到另一个进程里面的
// 其实npm install或者其他的npm命令 都会开启一个进程
const {spawn} = require('child_process')
const commandSpawn = (...args) => {

  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args)
    // 将打印信息显示出来
    // 子进程的log显示在当前进程中
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)
  
    // 监听子进程是否执行完毕
    childProcess.on('close', () => {
      resolve()
    })
  })
}

module.exports = {
  commandSpawn
}

