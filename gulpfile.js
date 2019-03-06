const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const fileLess = './../less/style.less';
const pathDest = './../css';

gulp.task('less', () => {
  return gulp.src(fileLess)
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest(pathDest));
});

gulp.task('watch', () => {
  gulp.watch(fileLess, gulp.parallel('less'));
});

gulp.task('default', gulp.parallel('less', 'watch'));