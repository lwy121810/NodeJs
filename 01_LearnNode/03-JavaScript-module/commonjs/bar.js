/*
 * @Author: lwy
 * @Date: 2020-10-14 10:56:54
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-15 10:40:45
 * @FilePath: /代码/03-JavaScript-module/commonjs/bar.js
 */
const age = 18
const name = "lwy"

function sayHello(name) {
  console.log("Hello " + name);
}

// 通过exports导出内容
// exports.name = name;
// exports.age = age;
// exports.sayHello = sayHello;


// node中是通过Module类来实现模块化的 
// 每个模块就是Module的实例module 也就是当前文件 
// 也就是一个js文件就是一个module
// 每个module都有一个exports对象 默认为{}
// 真正负责导出的是module.exports对象

// exports和module.exports有什么关系？
// 而之所以像上面exports.name = name也能导出 是因为node源码中实现了
// exports = module.exports;
// 这样 module.exports 和exports指向了同一个对象
// 所以当exports发生变化时 导出的数据也会发生变化

// 但是当使用下面的方式导出时 导出的数据就跟exports无关了 
// 修改exportsd也不会影响导出
// module.exports = {

// }

// 既然实际导出的时module.exports 那么exports存在的意义是什么呢？
// 因为commonJs规范中要求有一个exports作为导出 node为了满足commonJs规范
// 做了一个妥协 增加了一个exports 但实际上可以没有exports

console.log(module);
/** module
 * <ref *1> Module {
  id: '/Users/apple/Downloads/学习/NodeJs/代码/03-JavaScript-module/commonjs/bar.js',
  path: '/Users/apple/Downloads/学习/NodeJs/代码/03-JavaScript-module/commonjs',
  exports: {},
  parent: Module {
    id: '.',
    path: '/Users/apple/Downloads/学习/NodeJs/代码/03-JavaScript-module/commonjs',
    exports: {},
    parent: null,
    filename: '/Users/apple/Downloads/学习/NodeJs/代码/03-JavaScript-module/commonjs/main.js',
    loaded: false,
    children: [ [Circular *1] ],
    paths: [
      '/Users/apple/Downloads/学习/NodeJs/代码/03-JavaScript-module/commonjs/node_modules',
      '/Users/apple/Downloads/学习/NodeJs/代码/03-JavaScript-module/node_modules',
      '/Users/apple/Downloads/学习/NodeJs/代码/node_modules',
      '/Users/apple/Downloads/学习/NodeJs/node_modules',
      '/Users/apple/Downloads/学习/node_modules',
      '/Users/apple/Downloads/node_modules',
      '/Users/apple/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  filename: '/Users/apple/Downloads/学习/NodeJs/代码/03-JavaScript-module/commonjs/bar.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/apple/Downloads/学习/NodeJs/代码/03-JavaScript-module/commonjs/node_modules',
    '/Users/apple/Downloads/学习/NodeJs/代码/03-JavaScript-module/node_modules',
    '/Users/apple/Downloads/学习/NodeJs/代码/node_modules',
    '/Users/apple/Downloads/学习/NodeJs/node_modules',
    '/Users/apple/Downloads/学习/node_modules',
    '/Users/apple/Downloads/node_modules',
    '/Users/apple/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
 */
console.log(exports);// {} 默认为空