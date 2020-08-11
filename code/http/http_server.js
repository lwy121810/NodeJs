const http = require('http')

// 创建server对象
let server = new http.Server()

// 监听请求事件 当有请求过来时会触发该回调事件（server.emit('request)时）
server.on('request', (request, response) => {
  // 设置状态码 相应数据类型 编码格式
  response.writeHead(200, {'Content-Type':'text/plain;charset=utf-8'})
  // 设置相应数据
  response.end("呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。")
  
})
/** response
 * response.writeHead(statusCode,[headers])
 * 向请求的客户端发送响应头 statusCode是HTTP状态码 
 * headers是一个类似关联数组的对象，表示响应头的每个属性。
 * writeHead函数在一个请求内最多只调用一次，若不调用，则会自动生成一个响应头
 * 
 * response.write(data,[encoding])
 * 向请求的客户端发送响应内容。
 * data是一个buffer或者字符串，表示要发送的内容。如果是字符串需要指定encoding来说明它的编码方式 默认是utf-8
 * 在response.end调用之前，write可以被多次调用
 * 
 * response.end(data,[encoding])
 * 结束响应 告诉客户端所有发送已经完成。
 * 当所有要发送的内容发送完毕之后，该方法必须被调用一次。
 * 如果不调用 客户端将永远处于等待状态
 * 
 * 参数与write意义一样
 */

/** 静态资源&动态资源
 * 静态资源：一般客户端发送请求到web服务器，web服务器根据请求的资源从磁盘中
 * 取到相应的文件，返回给客户端。
 * 
 * 动态资源：一般客户端请求的动态资源，将请求交于web服务器，web服务器连接数据库，
 * 从数据库获取数据处理之后的结果，返回给客户端
 */


// 启动应用
server.listen(8888, ()=> {
  console.log("开启了服务器");
})

// 监听服务器关闭
server.on('close', ()=> {
  console.log("服务器关闭");
})
// 关闭服务器 会触发上面的回调事件
// server.close()