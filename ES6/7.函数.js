function add (x, y) {
    if(!y){
        y = 0;
    }
    //y || (y =0);
    //最好的：
  /*  if (typeof  y ==='undefined'){
        y = 0;
    }*/ //增加程序的鲁棒性
    return x+y;
}
//let res = add(1);
let res = add(1,2);
console.log(res);

function add (x =0, y = 0) { //不是number类型时默认给0
    return x+y;
}
let res = add(1,2);
//let res = add('asdasd',undefined);
console.log(res);