/**
 * Created by elson on 2016/8/22.
 */
var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css');

gulp.task('less', function () {
    gulp.src(['src/less/*.less'])
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('lessWatch', function () {
    gulp.watch('src/less/*.less', ['less']); //当所有less文件发生改变时，调用less任务
});


// Default task
gulp.task('default', function() {
    gulp.start('less', 'lessWatch');
});