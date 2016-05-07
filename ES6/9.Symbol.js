//Symbol解决了什么问题
//用的少
'use strict'
/*let ele = document.querySelector('#li');

ele.x = 123;
ele.y = 234;*/ //两个人用了ele属性会相互覆盖，symb解决了此问题
//如何Symbol都不相等，类似Nan！=Nan
let sybx =Symbol('subx');
let syby =Symbol('suby');

/*
console.log(syb,syb2,syb == syb2);
console.log(typeof syb,syb.toString() === syb2.toString())*/
let ele ={}

ele[sybx]=123;
ele[syby]=234;

console.log(ele);