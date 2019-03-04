const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const lessFiles = './less/**/*.less';

gulp.task('less', () => {
  return gulp.src(lessFiles)
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./../css'));
});

gulp.task('watch', () => {
  gulp.watch(lessFiles, gulp.parallel('less'));
});

gulp.task('default', gulp.parallel('less', 'watch'));