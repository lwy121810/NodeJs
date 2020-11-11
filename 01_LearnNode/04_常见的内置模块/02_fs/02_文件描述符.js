/*
 * @Author: lwy
 * @Date: 2020-10-20 10:00:14
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-20 10:02:24
 * @FilePath: /代码/04_常见的内置模块/02_fs/02_文件描述符.js
 */
const fs = require('fs')

fs.open('./abc.txt', (err, fd) => {
  if (err) {
    console.log(err);
    return
  }

  // 通过文件描述符获取文件的信息
  fs.fstat(fd, (err, stats) => {
    console.log(stats);
  })
})