/*
 * @Author: lwy
 * @Date: 2020-10-16 14:31:34
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-16 17:43:00
 * @FilePath: /代码/03-JavaScript-module/ES-Module/modules/foo.js
 */

 // 导出方式一
//  export const name = "lwy"
//  export const age = 18
//  export const sayHello = function(name) {
//    console.log("你好" + name);
//  }

// 导出方式二 {}中统一导出
const name = "lwy"
const age = 11

function sayHello(name) {
  console.log("你好" + name);
}
/** !!!
 * export后面跟的{} 并不是一个对象！
 * {}里放置的是要导出的变量的引用列表
 */
export {
  name, // 这里不是es6对象的增强写法
  age,
  sayHello
}
// export里的name本质上是对当前模块中name的引用 而不是把name的值给导出去
// ES Module通过export导出的是变量本身的引用: 
// export在导出一个变量时，js引擎会解析这个语法，并且创建模块环境记录(module environment
// record);
// **********   模块环境记录
// **********   const name = name(当前模块的name) import时导入的是前面的引用
// **********   const age = age
// 而在导入的地方，我们是可以实时的获取到绑定的最新值的
// 注意:在导入的地方不可以修改变量，因为它只是被绑定到了这个变量上(其实是一个常量)
// 而在当前文件能修改变量 这涉及到js引擎在实现实时绑定的原理：
// js引擎在发现变量发生变化的时候并没有直接给变量的引用赋值
// 而是把之前的值（const name = name）给删掉， 然后搞一个新的const name = name 再进行绑定
// 把新的值再放入到模块环境记录中 也就是模块环境记录中永远记录的都是最新的值
// 
// 所以在本文件改的是当前变量所在的空间 所以可以修改
// 导入的时候就是变量的引用了 无法修改


// 如果{}里是对象 那肯定是可以使用键值对的 但下面的写法是错误的
// 这也侧面说明了export的打括号不是一个对象
// export {
//   name:name,
// }


// 3. 导出方式三： {}导出 并设置别名
// export {
//   name as fName,
//   age as fAge,
//   sayHello as fSayHello
// }


// 默认导出

export default function() {
  console.log("default导出的打印");
}