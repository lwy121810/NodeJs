/*
 * @Author: lwy
 * @Date: 2020-10-19 11:34:07
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-19 11:42:15
 * @FilePath: /代码/04_常见的内置模块/02_fs/01_fs的三种使用方式.js
 */
const fs = require('fs')

// DEMO: 读取文件的信息
const filepath = './abc.txt'

// 1. 方式一：同步操作
// const info = fs.statSync(filepath)
// console.log(info);

/**
 Stats {
  dev: 16777220,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 4430564758,
  size: 22,
  blocks: 8,
  atimeMs: 1603078459299.853,
  mtimeMs: 1603078469416.0027,
  ctimeMs: 1603078469416.0027,
  birthtimeMs: 1603078459299.853,
  atime: 2020-10-19T03:34:19.300Z,
  mtime: 2020-10-19T03:34:29.416Z,
  ctime: 2020-10-19T03:34:29.416Z,
  birthtime: 2020-10-19T03:34:19.300Z
}
 */

 // 方式二：异步
//  fs.stat(filepath, (err, stats) => {
//    if (err) {
//      console.log(err);
//      return
//    }
//    console.log(stats);
//  })

 // 3.方式三：promise
 fs.promises.stat(filepath).then(stats => {
   console.log(stats);
 }).catch(err => {
   console.log(err);
 })