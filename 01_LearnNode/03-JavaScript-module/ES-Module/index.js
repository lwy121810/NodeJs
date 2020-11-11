/*
 * @Author: lwy
 * @Date: 2020-10-16 14:16:24
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-16 17:14:34
 * @FilePath: /代码/03-JavaScript-module/ES-Module/index.js
 */

 // 常见的导入方式 也有三种
 // 1. import {} from '路径';
 // 这里的后缀名必须要写上 否则会找不到 
 // webpack中不需要写是因为webpack内部帮我们实现了添加后缀名
//  import {name, age, sayHello} from './modules/foo.js'
// console.log(name);
// console.log(age);
// sayHello('lwy')

 // 2. 导入的时候也可以起别名
//  import {name as fName, age as fAge, sayHello as fSayHello} from './modules/foo.js'
//  console.log(fName);
//  console.log(fAge);
//  fSayHello('lwy')

 // 3. * as obj 导出
 // 这里是将所有要导出的变量放到一个对象上
//  import * as foo from './modules/foo.js'
// console.log(foo.age);
// console.log(foo.name);
// foo.sayHello('lwy')


// 导入默认导出的变量
// import format from './modules/foo.js'
// format()

// import导入是不可以放在代码逻辑中的
// const flag = true
// if (flag) {
//   import format from './modules/foo.js'
// }
// 上面代码会报错：Uncaught SyntaxError: Unexpected identifier
// 因为ES Module必须在编译时知道依赖关系
// import和export是交给js引擎来解析和执行的 在解析时就确定了依赖关系
// js引擎解析和执行js代码流程：js源文件-> Parse模块解析成抽象语法树AST 
// AST经过解释器转为字节码 
// 上面的代码在解析过程中就会抛出Uncaught SyntaxError语法错误

// import函数
// 在webpack环境中 由于webpack同时支持es module和commonjs 所以可以通过require来导入模块
// 前面说过 require本质上是一个函数 是在运行时加载 在单纯的es中是没有该函数的
// 在es模块中可以通过import函数
// import()函数可以异步加载模块 返回一个promise
import('./modules/foo.js').then(res => {
  // res就相当于是该模块了 Module
  console.log(res.name);
  console.log(res);
})
// 脚手架使用的import函数
// 大部分的脚手架都是基于webpack的 所以import函数是被webpack解析的
// webpack会把引用的js文件单独打包 
// 单独打包的话就会把项目打包成多个文件 
// 这样在进行首屏渲染的时候就不用加载一个大的js文件了
// 而是在使用的时候才去加载