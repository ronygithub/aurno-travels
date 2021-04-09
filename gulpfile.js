var gulp = require('gulp'),
    watch = require('gulp-watch')

gulp.task('default', function(){
    console.log('Hurray!! YOu created a gulp task.');
});

gulp.task('html', function(){
    console.log('Image something useful done to your html here');
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
})