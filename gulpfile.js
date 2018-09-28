

var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('handle:scss', function () {
    gulp.src('./src/gp8.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
})

gulp.task('watch:scss', function () {
    gulp.watch('./src/**/*.scss', ['handle:scss']);
})

gulp.task('default', ['handle:scss', 'watch:scss'])