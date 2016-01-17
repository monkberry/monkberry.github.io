'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
const shell = require('gulp-shell');
const livereload = require('gulp-livereload');
const path = require('path');

const DIST = path.join(__dirname, 'dist');

const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

const errorHandler = function (err) {
  console.log(err.toString());
  this.emit('end');
};

gulp.task('css', function () {
  return gulp.src(['style/index.scss'])
    .pipe(plumber({errorHandler}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(cssnano())
    .pipe(concat('bundle.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(DIST));
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(['style/**/*.scss'], ['css']);
  gulp.watch('_site/dist/bundle.css', livereload.changed);
  return gulp.src('', {read: false})
    .pipe(shell('webpack -w'));
});

gulp.task('webpack', shell.task('webpack -p'));

gulp.task('html', shell.task('jekyll build'));

gulp.task('serve', shell.task('jekyll serve -b -I'));

gulp.task('build', ['css', 'webpack', 'html']);

gulp.task('default', ['css', 'serve', 'watch']);