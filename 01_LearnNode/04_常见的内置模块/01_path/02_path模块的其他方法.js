/*
 * @Author: lwy
 * @Date: 2020-10-19 10:41:18
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-19 11:28:09
 * @FilePath: /代码/04_常见的内置模块/01_path/02_path模块的其他方法.js
 */
const { constants } = require("buffer")
const path = require("path")

const filepath = '/User/lwy/abc.txt'

// console.log(path.dirname(filepath)); // 获取文件夹名称 /User/lwy
// console.log(path.basename(filepath));// 获取文件名  abc.txt
// console.log(path.extname(filepath)); // 获取扩展名  .txt

const basepath = '/User/lwy'
const filename = 'abc.txt'

// 2. join路径拼接
const filepath1 = path.join(basepath, filename)
console.log(filepath1); // /User/lwy/abc.txt

// 3. resolve路径拼接
// 跟join的区别：join只是做简单的拼接
// resolve会判断拼接的字符串中是否有/ ./ ../等开头的路径
// 也就是reslove拿到的会是一个完整的路径
const filepath2 = path.resolve(basepath, filename)
console.log(filepath2); // /User/lwy/abc.txt

const basepath3 = './User/lwy'
const filepath3 = path.resolve(basepath3, filename) 
console.log(filepath3);// /Users/apple/Downloads/学习/NodeJs/代码/04_常见的内置模块/01_path/User/lwy/abc.txt
