/*
 * @Author: lwy
 * @Date: 2020-10-20 10:09:31
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-21 11:20:57
 * @FilePath: /代码/04_常见的内置模块/02_fs/04_文件夹的操作.js
 */

const fs = require('fs')
const path = require('path')

const dirname = './lwy'

// 1. 创建文件夹
// if (!fs.existsSync(dirname)) {
//   // 如果不存在该目录 创建
//   fs.mkdir(dirname, err => {
//     console.log(err);
//   })
// }

// 2. 读取文件夹中所有文件
// 不会读取子文件夹中内容
// fs.readdir(dirname,(err, files) => {
// files存储的是文件名（字符串）
//   console.log(files); // [ 'aaa', 'abc.jpg', 'bbb.js' ]
// })

// 这样
// fs.readdir(dirname,{withFileTypes:true}, (err, files) => {
//   // console.log(files);
//   // 这里files存储的不再是字符串 而是对象
//   // [
//   //   Dirent { name: 'aaa', [Symbol(type)]: 2 },
//   //   Dirent { name: 'abc.jpg', [Symbol(type)]: 1 },
//   //   Dirent { name: 'bbb.js', [Symbol(type)]: 1 }
//   // ]

//   files.forEach(item => {
//     console.log(item.name);
//   });
// })

// 获取文件中所有的文件名
// function getFiles(dirname) {
//   fs.readdir(dirname,{withFileTypes:true}, (err, files) => {
//     files.forEach(item => {
//       // 如果是文件夹
//       if (item.isDirectory()) {
//        // 递归调用
//        const filepath =  path.resolve(dirname, item.name)
//        getFiles(filepath)
//       } else {
//         console.log(item.name);
//       }
//     });
//   })
// }

// getFiles(dirname)


// 3. 文件夹的重命名
// fs.rename('./lwy', './wy',(err) => {
//   console.log(err);
// })


// let i = 0;
// const targetDir = process.argv[2]
// while (i < 10) {
//   i++
//   const name = 'day' + (i + '').padStart(2, 0)
//   const filepath = path.resolve(targetDir, name)
//   if (fs.existsSync(filepath)) {
//     continue
//   }
//   fs.mkdir(filepath, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('创建文件夹成功！');
//     }
//   })
// }



