var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var includePaths = [
  path.join(__dirname, '/node_modules/'),
];

gulp.task("default", function () {
  gulp.src('sass/style.sass')
    .pipe(sass({outputStyle: 'compressed', includePaths: includePaths}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('static/css/'));
});

gulp.task("watch", function () {
  gulp.watch('sass/style.sass', function() {
    gulp.src('sass/style.sass')
      .pipe(sass({outputStyle: 'compressed', includePaths: includePaths}))
      .pipe(autoprefixer())
      .pipe(gulp.dest('static/css/'));
  });
});
