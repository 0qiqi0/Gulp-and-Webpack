//就是变量的批量赋值
'use strict'
//let arr = [1,2,3];
let arr = [1,[2.1,2.2],3];
/*let a = arr[0];
let b = arr[1];
let c = arr[2];*/

//let [, [,x]] =arr; //x=2.2
//let [a,b,...other] =arr; //...叫拓展运算符，把后面的整体放在一个数组中，但是拓展运算符不能放在中间
let [a,b,c] = arr;
console.log(a,b,c)

//把右侧的数据类型赋值到左侧构造的相似的数据类型中
//对象的解构赋值
let obj = {
    a:'a',
    b:'b',
    c:'c',
    arr: [1,2,3]
}
//错误let {x, y, z}=obj;因为obj没有xyz这三个属性
//let {a, b, c}=obj;
let {a:myx , b: myy, c: myz,arr:[,,x]} = obj;
console.log(myx, b ,myz,x);