var gulp = require('gulp');
var concat = require('gulp-concat');
var react = require('gulp-react');
var transpiler = require('gulp-es6-module-transpiler');

gulp.task('jsx', function() {
    return gulp.src("app/*.jsx")
        .pipe(react())
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['jsx'], function() {
    return gulp.src("build/*.js")
        .pipe(transpiler({
            type: "amd",
            prefix: "app"
        }))
        .pipe(concat('deps.min.js'))
        .pipe(gulp.dest('dist'));
});
