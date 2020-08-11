const express = require('express')
const app = express()

const departmentRouter = require('./routers/department')
const userRouter = require('./routers/user')

// 应用路由规则
// 把下面的代码分离到不同的文件 方便维护
app.use(departmentRouter)
app.use('/users',userRouter)

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
// app.all('/a', (req,res) => {
//   res.send('all')
// })

app.listen(80, ()=>console.log("启动express"))