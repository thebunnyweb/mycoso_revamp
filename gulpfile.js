var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var autprefixer = require('autoprefixer');
var pixrem = require('pixrem');
var precss = require('precss');
var rename = require('gulp-rename');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
var stylefmt = require('stylefmt');

gulp.task('styles', function() {
  var plugins = [precss, autprefixer, cssnano];

  return gulp
    .src('./css/main.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./prod/css/'));
});

gulp.task('spritesvg', function() {
  return gulp
    .src('./assets/svg/*.svg')
    .pipe(rename({ prefix: 'icon-' }))
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(gulp.dest('./assets/'));
});

gulp.task('default', ['spritesvg', 'styles'], function() {
  gulp.watch('./css/**/*.css', ['styles']);
});
