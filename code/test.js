// function func(name, age) {
//   return `this is $(name), age is $(age)`
// }
// console.log(func('john', 18));
// function nameWithAge({name, age}) {
//   age += 1;
//   console.log(age);
// }

// 这两种调用方法都是ok的
// nameWithAge({name:'john', age:17})
// nameWithAge({age:20, name:'name'})

// nameWithAge() // TypeError


// rest参数 
// 用于获取函数的多余参数 这样就不需要arguments对象了 
// rest参数搭配的变量是一个数组 该变量将多余的参数放到数组中
// rest参数只能是最后一个参数
// function func(...values) {
//   console.log(values);
// }

// func(1,2,3,4) // [ 1, 2, 3, 4 ]


// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// console.log(arr1.concat(arr2));

// let arr3 = [...arr1, ...arr2]

// console.log(arr3);


// let func1 = (x, y) => x + y

// console.log(func1(11, 22));

global.a = 100;

// console.log(global.a);// 100

// console.log(a); // 100

// console.trace()

// console.log(global.process);

console.log(__filename);
console.log(__dirname);