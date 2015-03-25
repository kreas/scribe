var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
  scss: {
    source: "./themes/default/source/scss/*.scss",
    destination: "./themes/default/static/css"
  }
}

function catchError(error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('watch', function(){
  gulp.watch(paths.scss.source, ['sass']);
});

gulp.task('sass', function () {
  gulp.src(paths.scss.source)
    .pipe(sass())
    .on('error', catchError)
    .pipe(gulp.dest(paths.scss.destination));
});

gulp.task('default', ['sass'])
