//es5中函数和构造函数并无大的区别
/*function Person(){
    this.name = 'qiqi';
    return {name:'qiqi2'}
    //return this
}
var p = new Person();
console.log(p);*/
'use strict'
class Person{
    constructor(name){
        this.name=name;
        this.hobbies = [];
    }
    getName(){
        console.log(this.name);
        return this.name;
    }

    get hobby(){
        return this.hobbies;
    }
    set hobby(hobby){
        this.hobbies.push(hobby);
    }
}

class Student extends Person{
    constructor(name){
        super(name);//子类中先调用父类构造函数
        this.name = name;

    }
    getStuNum(){
        console.log('988')
    }
    getName(){
        console.log(super.getName(),this.name);
    }
}

var p = new Person('qiqi');
p.hobby = 'smoking';
p.hobby = 'drinking';
console.log(p.hobby)
p.getName()

var g= new Student('qiqi1');
g.getName();
g.getStuNum();