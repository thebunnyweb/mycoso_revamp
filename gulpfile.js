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
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var importCss = require('postcss-import');
var imageMin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');

gulp.task('styles', function() {
  var plugins = [importCss, precss, autprefixer, cssnano];
  return gulp
    .src('./css/main.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./app/css/'));
});

gulp.task('admincss', function(){
  return gulp.src('./css/admin.css').pipe(gulp.dest('./app/css'))
})

gulp.task('imagemin', function() {
  return gulp
    .src('./assets/**/*')
    .pipe(imageMin())
    .pipe(gulp.dest('./app/assets/'));
});

gulp.task('htmlmin', function() {
  return gulp
    .src('./*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('./app/'));
});

gulp.task('scripts', function() {
  gulp
    .src([
      './js/jquery-2.2.4.min.js',
      './js/anime.min.js',
      './js/jquery.fittext.js',
      './js/typed.min.js',
      './js/jquery.fullpage.min.js',
      './js/TweenMax.min.js',
      './js/slick.min.js',
      './js/jquery.validate.min.js'
    ])
    .pipe(concat('plugin.js'))
    .pipe(gulp.dest('./app/js/'));
});

gulp.task('mainscripts', function() {
  return gulp.src(['./js/main.js', './js/form.js', './js/data.js']).pipe(gulp.dest('./app/js'));
});

gulp.task('spritesvg', function() {
  return gulp
    .src('./assets/svg/*.svg')
    .pipe(rename({ prefix: 'icon-' }))
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(gulp.dest('./assets/'));
});

gulp.task(
  'build',
  ['htmlmin', 'styles', 'imagemin', 'spritesvg', 'scripts','mainscripts'],
  function() {}
);

gulp.task(
  'default',
  ['htmlmin', 'styles', 'imagemin', 'spritesvg', 'scripts','mainscripts', 'admincss'],
  function() {
    gulp.watch('./css/**/*.css', ['styles', 'admincss']);
    gulp.watch('./js/**/*.js', ['scripts','mainscripts']);
    gulp.watch('./**/*.html',['htmlmin'])
  }
);
