var gulp = require('gulp');
//创建任务
gulp.task('hello1',function(){
    console.log('hello');
})//执行此任务时，后面的函数会执行

gulp.task('default',['hello1'],function(){
    console.log('default');
})//设置默认任务,依赖hello1

