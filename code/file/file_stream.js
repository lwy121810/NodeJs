const fs = require('fs')
const path = require('path')
/**
 一种是buffer模式，一种是stream模式，buffer模式就是取完数据一次性操作，stream模式就是边取数据边操作

原来的方式在处理数据量较大的文件时不能分块处理，导致速度慢，内存容易爆满

*/
// 流式操作

let filePath = path.join(__dirname, 'file.txt')

// 1.搭建读的管道
let readStream = fs.createReadStream(filePath)
// 2.设置编码格式
readStream.setEncoding('utf-8')

let data = ''
// 当文件那边还有数据流入程序时 会执行下面的回调函数 并将数据存放到chunk
readStream.on('data', chunk=>{
  data += chunk
})

// 当文件那边没有数据时 会执行end回调函数 
readStream.on('end', ()=> {
  console.log("数据已经读取完毕");
  console.log(data);
})


// 搭建写的通道
let writeStream = fs.createWriteStream(path.join(__dirname, 'file1.txt'))
// 写入完毕之后的回调
writeStream.on('finish', err => {
  if (err) {
    console.error(err);
  } else {
    console.log("完成写入！");
  }
})

writeStream.write("人生不相见，")
writeStream.write('动如参与商。')
// 写入完成之后需要调用end方法来结束
writeStream.end();


