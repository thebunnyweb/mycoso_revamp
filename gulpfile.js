var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var autprefixer = require('autoprefixer');
var pixrem = require('pixrem');
var precss = require('precss');


gulp.task('styles', function() {
  var plugins = [
    precss,
    autprefixer,
    cssnano,
    pixrem
  ];

  return gulp
    .src('./css/main.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./prod/css/'));
});

gulp.task('default', ['styles'], function() {
  // gulp.watch('./css/**/*.css', ['styles']);
});
