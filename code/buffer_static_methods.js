// isEncoding：是否支持对应的编码
console.log(Buffer.isEncoding('utf-8'));// true

let buf = Buffer.from('青青子衿，悠悠我心')
// isBuffer: 判断是否为Buffer对象
console.log(Buffer.isBuffer(buf)); // true

// byteLength(str[,encoding])：返回指定编码的字节长度 默认utf8
console.log(Buffer.byteLength('但为君故，沉吟至今'));// 27

// Buffer.concat: 将一组buffer对象合并为一个buffer对象
let buf2 = Buffer.from('Hello World');
let concatBuf = Buffer.concat([buf, buf2]);
console.log(concatBuf.toString());