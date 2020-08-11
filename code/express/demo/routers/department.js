const express = require('express')

const departmentRouter = express.Router()

departmentRouter.route('/departments').get((req, res) => {
  res.send('get department data')
}).post((req, res) => {
  res.send('post department data')
}).put((req, res) => {
  res.send('put department data')
}).delete((req, res) => {
  res.send('delete department data')
})

// 导出
module.exports = departmentRouter