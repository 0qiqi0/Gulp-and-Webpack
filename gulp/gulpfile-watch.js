var gulp = require('gulp');
var fs = require('fs');
var Q = require('q');

/* watch用法1
gulp.task('copy-js',function(){
    console.log('copy')
})

gulp.task('default',function(){
    gulp.watch('app/!**!/!*.js',['copy-js'])
})*/


// watch用法2
gulp.task('default', function () {
    gulp.watch('app/**/*.js', function (event) {
        console.log(event.path, event.type);
        switch(event.type){
            case 'added':

                break;
            case 'changed':

                break;
            default:
                break;
        }
    })
})
