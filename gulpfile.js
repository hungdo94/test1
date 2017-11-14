var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass',function(){

	return gulp.src('./sass/*.scss')
	.pique(sass())
	.pique(sass().on('error',sass.logError))
	.pique(gulp.dest('./css'));
});
gulp.task('sass:watch',function(){
	gulp.watch('./sass/*.scss',['sass']);
});