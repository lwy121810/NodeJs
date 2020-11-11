/*
 * @Author: lwy
 * @Date: 2020-10-21 11:24:31
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-21 11:42:32
 * @FilePath: /代码/04_常见的内置模块/03_events/01_events的基础方法.js
 */

// Node中的核心API都是基于异步事件驱动的:
// 我们可以监听这个事件(监听器 Listeners)，并且传入的回 调函数，这个回调函数会在监听到事件时调用;
// 导出的是一个类
const EventEmitter = require('events')


// 1.创建发射器 类似于其他语言/框架中的事件总线 跟oc中的通知类似
const emitter = new EventEmitter()

// 监听事件
emitter.on('click', arg1 => {
  console.log("监听到click事件", arg1);
})

emitter.on('click', arg1 => {
  console.log('监听到click事件2', arg1);
})
// 上面两个监听都会收到事件

setTimeout(() => {
  // 发射事件
  emitter.emit('click', 'lwy', 'lml')
}, 1000);