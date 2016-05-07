function add(...arg){//拓展运算符参数
    //debugger;
    let res = 0;
    for(let i=0,len = arg.length; i<len;i++){
        res+=arg[i];
    }
    //最快
/*    for(let i =arg.length-1;i>=0; i--){
        res+=arg[i];
    }*/
    return res;
}
let res = add(1,2,3,4)
console.log(res);