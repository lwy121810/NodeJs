/*
 * @Author: lwy
 * @Date: 2020-10-19 11:28:46
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-19 11:30:35
 * @FilePath: /代码/04_常见的内置模块/01_path/03_使用ESModule加载.mjs
 */
import path from 'path'

const basepath = '/User/lwy'
const filename = 'abc.txt'

const filepath1 = path.join(basepath, filename)
console.log(filepath1); // /User/lwy/abc.txt

const filepath2 = path.resolve(basepath, filename)
console.log(filepath2); // /User/lwy/abc.txt

const basepath3 = './User/lwy'
const filepath3 = path.resolve(basepath3, filename) 
console.log(filepath3);// /Users/apple/Downloads/学习/NodeJs/代码/04_常见的内置模块/01_path/User/lwy/abc.txt
