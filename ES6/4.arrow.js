'use strict'

let say = name =>name; //第一个name是参数，第二个参数是返回值
//es5
/*var say = function(name){
    return name
}*/
let say1 = (name1,age) => `${name1} ${age}`;
var res1 = say1('qiqi',5);
console.log(res1)

let say2 = (name2,age2) => {
    var a =5;
    return `${name2} ${age2} ${a}`
}
var res2 = say2('qiqi',5);
console.log(res2)