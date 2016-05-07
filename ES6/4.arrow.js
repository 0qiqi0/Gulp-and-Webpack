'use strict'

let say = name =>name; //第一个name是参数，第二个参数是返回值
//es5
/*var say = function(name){
    return name
}*/
let say1 = (name1,age) => `${name1} ${age}`;
//不写{}，它就是return的值，写了{}，要写return
var res1 = say1('qiqi',5);
console.log(res1)
//箭头函数只能定义一个匿名函数并赋给一个变量
let say2 = (name2,age2) => {
    var a =5;
    return `${name2} ${age2} ${a}`
}
//say2和say3一样
let say3 = function(name2,age2){
    var a =5;
    return `${name2} ${age2} ${a}`
}
var res3 = say3('qiqi',5);
console.log(res3)

var res2 = say2('qiqi',5);
console.log(res2)

//只有一个参数时,可以更加简写
let say4 = a => a+1;