/*
 * @Author: lwy
 * @Date: 2020-10-20 10:02:50
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-20 10:08:58
 * @FilePath: /代码/04_常见的内置模块/02_fs/03_文件的读写.js
 */

const fs = require('fs')
// 1. 文件的写入
const content = "青青子衿，悠悠我心。"
// 这种会直接覆盖原来的文本 只保留content
// fs.writeFile('./abc.txt',content, err => {
//   console.log(err);
// })

// 在原有内容后追加
// fs.writeFile('./abc.txt', content, {flag:'a'}, err => {
//   console.log(err);
// })


// 2. 文件读取
// 默认是以Buffer读取数据
// fs.readFile('./abc.txt', (err, data) => {
//   console.log(data);
// })

// 指定字符集
fs.readFile('./abc.txt', {encoding:'utf-8'}, (err, data) => {
  console.log(data);
})