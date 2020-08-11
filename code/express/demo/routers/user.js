const express = require('express')

const userRouter = express.Router()

userRouter.route('/').get((req, res) => {
  res.send('get users data')
}).post((req, res) => {
  res.send('post users data')
}).put((req, res) => {
  res.send('put users data')
}).delete((req, res) => {
  res.send('delete users data')
})

// 导出
module.exports = userRouter