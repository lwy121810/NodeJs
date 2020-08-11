# Node.js学习

nvm 是一个可以在同一台机器上安装和切换不同版本node.js的工具


JS中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性可以在程序任何地方访问，即全局变量

在浏览器js中，通常window是全局变量

在Node.js中的全局变量是global，所有全局变量(除global本身外)都是global对象的属性

后面看到的所有全局变量，例如console, setTimeout和process是global变量的成员。我们可以向全局变量中添加成员，使其在任何地方都可用


####process
描述当前node.js进程状态的对象，提供了一个与操作系统额度简单接口

#### __filename & __dirname

这些变量在每个文件中都可用，并提供当前模块的文件和目录的完整路径

```
console.log(__filename);
console.log(__dirname);
```

### Buffer
js语言本身只有字符串数据类型，没有二进制数据类型，但在处理像文件流时（文件的读写操作），必须使用二进制数据，因此，在node.js中定义了一个Buffer类，用来创建一个专门存放二进制数据的缓存区。说白了，Buffer类似一个整数数组


#### 创建Buffer对象

* Buffer.from(array)   根据一个数组创建Buffer对象
* Buffer.from(string[, encoding]); 根据字符串创建Buffer对象，默认utf8，可以指定字符编码
* Buffer.alloc(size); 创建指定长度的Buffer对象

**length**：
返回为Buffer对象分配的内存量（以字节为单位）。但这不一定反应Buffer中“可用”数据的数量。虽然length属性不是不可变的。若想修改Buffer的长度，程序应将length视为只读，并使用buf.slice()创建一个新的Buffer


```
// 根据数组创建Buffer对象
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
```

#### Buffer类方法

```
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
```
#### Buffer的对象方法


```
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
```

### 模块

模块是Node.js应用程序的基本组成部分，文件和模块是一一对应的，换言之，一个node.js文件就是一个模块，这个文件可能是js代码，json或者编译过的c/c++扩展



#### 模块化细节
* 已加载过的模块会被缓存，以提高性能。根据加载的路径来判断是否加载过
* 加载文件的后缀`.js`可以省略。模块文件常见省略有`.js`,`.json`,`.node`。 如果在同一目录出现文件名相同后缀名不同的话，加载顺序如下：
	1. 	`.js`
	2.  	`.json`
	3. 	`.node`

### 常用系统内置模块

* fs：文件操作
* http：网络操作
* path：路径操作
* querystring：查询参数解析

```
// 引入系统的文件操作模块
const fs = require('fs')
console.log(fs);

```

### 事件驱动模型
大部分前端编程都是事件驱动模型，如页面元素会提供onClick事件，代表鼠标按下事件。事件驱动模型大体思路如下：

* 有一个事件（消息）队列
* 鼠标按下时，向这个队列中增加一个点击事件（消息）
* 有一个循环，不断从队列中取出事件，调用不同绑定在事件上的函数

事件驱动编程是一种编程范式，这里程序执行流由外部事件决定。它的特点是有一个事件循环，当外部事件发生时通过回调机制来触发相应的处理。


### path
因为node.js是可以运行在不同的操作系统上的，不同的操作系统的路径分隔符是不一样的，在windows中，标准分隔符是`\`,在UNIX中，标准分隔符是`/`,还有他们的根路径也是不一样的，所以Node.js Path模块提供一些用于处理文件路径的工具。

```
const path = require('path')

// 获取当前操作系统路径分隔符
console.log(path.sep); // mac 下是 / windows下是\
// // 获取当前操作系统的环境变量分隔符 
console.log(path.delimiter); // mac下是: windows下是;

// 用于连接路径，该方法的主要用途在于会正确使用当前系统的路径分隔符
// path.join([...paths]) // 可以传递多个路径名 不要有路径分隔符 // 
console.log(path.join(__dirname, 'path.js'));// 获取当前文件路径
// 只写目录名或者文件名 不要写分隔符
console.log(path.join(__dirname, 'a','a.js'));

// ... 还有其他方法 不再举例
```


#### 流式操作
一种是buffer模式，一种是stream模式，buffer模式就是取完数据一次性操作，stream模式就是边取数据边操作

原来的方式在处理数据量较大的文件时不能分块处理，导致速度慢，内存容易爆满


## Web服务器
web服务器一般指网站服务器，是指驻留于因特网上某种类型计算机的程序，主要功能是提供网上信息浏览服务，用户通过浏览器遵循HTTP协议访问Web服务器上提供的信息。

目前主流的三个web服务器是Apache，Nginx，IIS

web应用程序是一种可以通过web访问的应用程序，部署在web服务器中


Node.js标准库提供了http模块，其中封装了一个搞笑的http服务器和一个简易的HTTP客户端。

http.Server是一个基于事件的HTTP服务器，它的核心由Node.js下层的C++部分实现，而接口由js封装，兼顾了高性能和简易性。


http.request是一个HTTP客户端工具，用于向HTTP服务器发起请求

```
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
```



## 包

* 包（package）是Node.js最重要的支柱。
* Node.js根据Common.js规范实现了包机制，但不完全遵循


## 模版技术
模版技术是为了将显示与数据分离，模版技术多种多样，但其本质是将模板文件和数据通过模板引擎生成最终的文件内容。



## Express

```
const express = require('express')

// 创建一个web应用
const app = express()
// get请求
app.get('/',(req, resp) => {
  // 响应数据
  resp.send('Hello Express')
})
app.post('/',(req, resp) => {
  resp.send('Hello Express Post')
})
app.listen(8888, ()=>console.log("启动"))



```

### 路由
路由是指根据不同的请求路径和请求方式进行路径分发，导向不同的处理函数，执行不同的业务逻辑

#### 请求方式匹配

HTTP常用的请求方式有get,post,put,delete等，Express支持按请求方式的路由规则。

当一个路径有多个匹配规则时，使用app.use，否则使用相应的app.method

```
const express = require('express')
const app = express()
// 路径相同 请求方式不同

// 以下请求路径都相同
// app.get('/a', (req, res) => {
//   res.send('get')
// })
// app.post('/a', (req, res) => {
//   res.send('post')
// })
// app.delete('/a', (req, res) => {
//   res.send('delete')
// })
// app.put('/a', (req, res) => {
//   res.send('put')
// })

// 上面也可以改成了链式语法
// app.route('/a').get((req, res) => {
//   res.send('get_x')
// }).post((req, res) => {
//   res.send('post_x')
// }).delete((req, res) => {
//   res.send('delete_x')
// }).put((req, res) => {
//   res.send('put_x')
// })


// 无论所有请求方式
app.all('/a', (req,res) => {
  res.send('all')
})

app.listen(80, ()=>console.log("启动express"))

```

#### 模块化路由处理程序

使用express.Router类创建可安装的模块化路由处理程序。Route实例是一个路由系统


#### 中间件

Express框架可以通过中间件的方式按照模块和功能对处理函数进行切割处理。


#### RESTful
表现层状态转换，目的是便于不同软件/程序在网络中互相传递消息。

设计RESTful风格服务

* GET /users 获取用户列表
* GET /users/1 获取id为1的用户
* PUT /users/2 更新id为2的用户
* POST /users/2 插入id为2的用户
* DELETE /users/1 删除id为1的用户

RESTful针对动态资源，资源是名词加复数，路径不包含后缀，充分利用http协议，利用请求方式不同来区分不同操作(增删改查)

