
const {src, dest, series} = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const minify = require('gulp-minify');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');


function htmlTask(){
  return src('src/*.html')
  .pipe(dest('dist'))
}


function stylesTask(){
  return src('src/css/*.css')
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(minify())
  .pipe(sourcemaps.write())
  .pipe(concat('styles.css'))
  .pipe(dest('dist/css'))
}


function imagesTask(){
  return src('src/images/**/*')
  .pipe(imagemin())
  .pipe(dest('dist/images'))
}

function jsTask(){
  return src('src/js/*.js')
  .pipe(dest('dist/js'))
}

exports.html = htmlTask;
exports.styles = stylesTask;
exports.images = imagesTask;
exports.js = jsTask;

exports.default = series(htmlTask, stylesTask, imagesTask, jsTask);

