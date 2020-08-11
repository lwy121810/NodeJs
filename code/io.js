const fs = require('fs')
const path = require('path')
// 异步操作 不会阻塞线程
// fs.readFile(path.join(__dirname, 'file.txt'),'utf-8', (error, data) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(data);
//   }
// })
// // 会先打印end
// console.log('end');

/*
end
file context
*/

// 同步操作
// let data = fs.readFileSync(path.join(__dirname, 'file.txt'),'utf-8')
// console.log(data);
// console.log('end');
/** 
 * file context
 * end
 * */ 