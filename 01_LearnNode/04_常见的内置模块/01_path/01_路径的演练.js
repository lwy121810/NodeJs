/*
 * @Author: lwy
 * @Date: 2020-10-19 10:33:54
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-19 10:39:10
 * @FilePath: /代码/04_常见的内置模块/01_path/01_路径的演练.js
 */
const path = require('path')


const basePath = '/User/lwy'
const fileName = 'abc.text'

const filePath = path.resolve(basePath, fileName)
console.log(filePath);