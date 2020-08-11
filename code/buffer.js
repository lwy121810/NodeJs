
let buf1 = Buffer.from([1,2,3,4]) // 通过数组创建
console.log(buf1); // <Buffer 01 02 03 04>

// 根据字符串创建Buffer 
let buf2 = Buffer.from('Hello World')
console.log(buf2); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>

// 在utf8中 使用三字节表示一个中文字符
let buf22 = Buffer.from('你是个好孩纸')
console.log(buf22); // <Buffer e4 bd a0 e6 98 af e4 b8 aa e5 a5 bd e5 ad a9 e7 ba b8>
console.log(buf22.length); // 18 


let buf3 = Buffer.alloc(10)
console.log(buf3);// <Buffer 00 00 00 00 00 00 00 00 00 00>

// 创建buffer对象的长度不会改变 不像数组
console.log(buf1.length); // 4
console.log(buf2.length); // 11
console.log(buf3.length); // 10