const fs = require('fs')
const path = require('path')
// 获取文件状态
let filePath = path.join(__dirname, 'file.txt')
fs.stat(filePath, (err, stat) => {
  if (err) {
    // console.error(err);
  } else {
    // console.log(stat);
    /**
     * atime: access time 文件访问时间
     * mtime: modify time 文件数据发生变化时间
     * ctime:文件的状态信息发生变化的时间（比如文件的权限）
     * birthtime:文件创建时间
    */
   // 是否是文件
  //  console.log(stat.isFile());
  //  // 是否是文件夹
  //  console.log(stat.isDirectory());
  }
})
// 读取文件 如果读取的是非文本文件 就不要传递utf-8
// fs.readFile(filePath,'utf-8', (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// })

// 写入文件
// 若路径文件不存在 会自动创建该文件（但不会创建文件夹，也就是文件夹必须存在）
// 会覆盖原来的文件
// fs.writeFile(filePath, '青青子衿，悠悠我心。','utf-8', err => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("写入成功！");
//   }
// })

// 追加文件
let append = Buffer.from("但为君故，沉吟至今")
fs.appendFile(filePath, append, err=>{
  if (err) {
    console.error(err);
  } else {
    console.log("追加成功！");
  }
})

