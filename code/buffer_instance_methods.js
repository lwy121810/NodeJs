let buf = Buffer.alloc(10)
console.log(buf); // <Buffer 00 00 00 00 00 00 00 00 00 00>
let len = buf.write('lwy');
console.log(len); // 3
console.log(buf); // <Buffer 6c 77 79 00 00 00 00 00 00 00>
// 如果存进去的是文本数据，可以使用toString转成字符串
// toString(): 将buffer对象转为字符串
console.log(buf.toString()); // lwy 
// toJSON(): 将buffer对象装成JSON格式的对象
console.log(buf.toJSON()); // { type: 'Buffer', data: [ 108, 119, 121, 0, 0, 0, 0, 0, 0, 0 ] }