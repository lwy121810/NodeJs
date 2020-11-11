/*
 * @Author: lwy
 * @Date: 2020-10-19 10:26:41
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-19 10:31:52
 * @FilePath: /代码/03-JavaScript-module/ESModule与CJS互相调用/main.mjs
 */

 // ES模块导入CommonJS模块
import foo from './modules/bar.js'

// 可以正常使用
console.log(foo.name);

// NOTE：多数情况下 ES Module可以加载CommonJS模块
// ES Module在加载CommonJS模块时 会将CommonJS的module.exports导出的作为default导出方式来使

