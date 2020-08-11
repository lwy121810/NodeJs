// 中间件
// Express框架可以通过中间件的方式按照模块和功能对处理函数进行切割处理
// 当需要在处理请求之前做一些统一处理时 可以使用中间件

const express = require('express')
// 引入第三方中间件
const morgan = require('morgan')

const app = express()

// app.get('/a',
//   (req, res, next) => {
//     //进行统一处理 比如：权限检查 日志记录 其他操作等
//     console.log('日志记录');
//     console.log("权限检查");
//     next()
//   },
//   (req, res) => {
//     res.send('get a')
//   }
// )

// app.post('/a',
//   (req, res, next) => {
//     //进行统一处理 比如：权限检查 日志记录 其他操作等
//     console.log('日志记录');
//     console.log("权限检查");
//     next()
//   },
//   (req, res) => {
//     res.send('post a')
//   }
// )

// 上面的写法不够简洁

let logger =  (req, res, next) => {
  //进行统一处理 比如：权限检查 日志记录 其他操作等
  console.log('日志记录');
  next()
}
let  permission =  (req, res, next) => {
  //进行统一处理 比如：权限检查 日志记录 其他操作等
  console.log('权限检查');
  next()
}
// 应用中间件
app.use(logger)
app.use(permission)
// 第三方中间件 先下载引入
app.use(morgan('dev'))

// express内置中间件
app.use(express.urlencoded())
app.use(express.json())

app.get('/a',(req, res) => {
    res.send('get a')
  }
)
app.post('/a',(req, res) => {
    res.send('post a')
  }
)



app.listen(80, () => console.log("启动"))