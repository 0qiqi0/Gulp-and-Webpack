'use strict'
function func () {
    setTimeout(function(){
        console.log(this.id)
    })
    setTimeout(()=>{
        console.log(this.id)
    })
}

let obj = {id: 123}

func.call(obj);