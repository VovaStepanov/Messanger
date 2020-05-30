const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  return gulp.src('../css/mainpage.scss')
    .pipe(sass())
	.pipe(autoprefixer({
            cascade: false
        }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('../css/'))
});


gulp.task('all', function(){
  gulp.watch('../css/mainpage.scss', gulp.series(['sass'])); 
})