/*
 * @Author: lwy
 * @Date: 2020-10-13 09:22:28
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-13 09:31:15
 * @FilePath: /代码/01_给node传参数/index.js
 */
console.log(process);
// 命令行执行 node index.js lwy age=18
// 可以在argv数组中看到参数
console.log(process.argv[2]);
console.log(process.argv[3]);
// 遍历打印所有参数
process.argv.forEach(item => {
  console.log(item);
});

// 清空控制台
console.clear()

// 打印调用栈
console.trace();