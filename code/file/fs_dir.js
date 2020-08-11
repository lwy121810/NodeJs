const fs = require('fs')
const path = require('path')

// 创建目录
// fs.mkdir(path.join(__dirname, 'abc'), err => {
//   if (!err) {
//     console.log("创建成功！");
//   }
// })

// 读取文件夹
// fs.readdir(path.join(__dirname), (err, paths) => {
//   // paths:数组 包含文件/文件夹的名字（只有名字 没有路径）
//   console.log(paths);
// })

// 删除文件夹
// fs.rmdir(path.join(__dirname, 'abc'), err => {
//   if (!err) {
//     console.log("删除成功！");
//   }
// })