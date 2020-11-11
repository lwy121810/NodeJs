/*
 * @Author: lwy
 * @Date: 2020-10-16 10:36:35
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-16 14:03:05
 * @FilePath: /代码/03-JavaScript-module/commonjs2/main.js
 */
// 会先执行bar.j的代码
// 因为commonjs是同步执行的 而且是运行时加载
require('./bar')
console.log("main.js");