/*
 * @Author: lwy
 * @Date: 2020-10-19 10:03:28
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-19 10:15:49
 * @FilePath: /代码/03-JavaScript-module/Node-ESModule/index.mjs
 */

// 不能直接导入 node环境中 每个文件就是一个模块 不过是CommonJs中的模块 而不是ESModule中的模块
// 所以这样会报错: Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
import {name, age} from './modules/foo.mjs'
console.log(name);
console.log(age);

// 两种方法解决：
// 1. 通过package.json中添加"type": "module"
// 2. 设置文件的扩展名为.mjs

