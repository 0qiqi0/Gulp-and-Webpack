var gulp = require('gulp');
var fs = require('fs');
//创建任务
/*
gulp.task('hello',function(){
    console.log('hello');
})//执行此任务时，后面的函数会执行
*/

/*
gulp.task('default',function(){
    //console.log('default');
    gulp.src('app/src.js').pipe(gulp.dest('dist'));
})//dest是一个目录

*/

/*
gulp.task('default',function(){
    gulp.src('app/**!/!*.js')
        .pipe(gulp.dest('dist'))
})*/
/*

gulp.task('default',function(){
    gulp.src(['app/bootstrap/!*.js','app/jquery/!*.js'],{base:'app'})
        .pipe(gulp.dest('dist'));
})//指定了基准路径，它后面都是要拷贝的路径*/

/*gulp.task('default',function(){
    gulp.src(['app/!**!/!*.js','!app/jquery/!*.js'],{base:'app'})
        .pipe(gulp.dest('dist'));
})//出去某一个*/

gulp.task('1',function(){
    console.log('1')
})
/*gulp.task('2',function(){
    setTimeout(function(){
        console.log('2')
    },3000) //不会等待2执行完成，直接到3.如何保证2完成后执行3，有3种方法

})*/
gulp.task('2',function(callback){
 setImmediate(function(){
     fs.writeFile('1.txt','hello',function(err){
         callback();
     })
 })
})
gulp.task('3',function(){
    console.log('3')
})
gulp.task('default',['1','2','3'],function(){
    fs.readFile('1.txt','utf8',function(err,data){
        console.log(data);
    })
})