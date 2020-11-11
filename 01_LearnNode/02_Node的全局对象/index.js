/*
 * @Author: lwy
 * @Date: 2020-10-13 09:43:51
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-13 10:03:13
 * @FilePath: /代码/02_Node的全局对象/index.js
 */
console.clear()
// 延迟1s执行 只执行一次
setTimeout(() => {
  console.log("setTimeout");
}, 1000);

// 每间隔1s执行一次
setInterval(() => {
  console.log("setInterval");
}, 1000);

// 立即执行
setImmediate(()=>{
  console.log("setImmediate");
});

process.nextTick(() => {
  console.log("process.nextTick");
})