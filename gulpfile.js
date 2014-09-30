var gulp  = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function () {
  gulp.src('test/**')
    .pipe(watch('test/**', function(files) {
      console.log("なにかが！行われた！")
     }));

});
