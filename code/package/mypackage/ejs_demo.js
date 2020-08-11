const ejs = require('ejs')
const path = require('path')

// 模版技术

// let data = {user:{name:'<span>lwy</span>'}};

// let fileName = path.join(__dirname, 'views','out.ejs')
// ejs.renderFile(fileName, data, (err, str) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(str);
//   }
// })


// if

// let data = {user:{name:'<span>lwy</span>'}};
// let fileName = path.join(__dirname, 'views','if.ejs')
// ejs.renderFile(fileName, data, (err, str) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(str);
//   }
// })

// loop

let data = {books:['三国演义','水浒传','西游记','红楼梦']};
let fileName = path.join(__dirname, 'views','loop.ejs')
ejs.renderFile(fileName, data, (err, str) => {
  if (err) {
    console.error(err);
  } else {
    console.log(str);
  }
})