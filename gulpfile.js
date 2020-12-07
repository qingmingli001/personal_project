const {src, dest, series, parallel} = require('gulp');


function htmlTask(){
  return src('src/*.html')
  .pipe(dest('dist'))
}


function stylesTask(){
  return src('src/css/*.css')
  .pipe(dest('dist/css'))
}


function imagesTask(){
  return src('src/images/**/*')
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

exports.default = series(this.html, this.styles, this.images, this.js);

