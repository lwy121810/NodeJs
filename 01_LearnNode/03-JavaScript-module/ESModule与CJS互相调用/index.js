/*
 * @Author: lwy
 * @Date: 2020-10-19 10:16:49
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-19 10:24:33
 * @FilePath: /代码/03-JavaScript-module/ESModule与CJS互相调用/index.js
 */

// 1. 使用es模块导出 使用commonjs导入
const foo = require('./modules/foo.mjs')
console.log(foo); // Must use import to load ES Module:

// NOTE: 通常情况下 CommonJS不能加载ES Module
// 因为CommonJS是同步的 ES Module必须经过静态解析等操作 无法在这时执行JS代码
// 但是这个也不是绝对的 某些平台在实现的时候可以进行针对性的解析，也可以支持
// Note当中是不支持的

