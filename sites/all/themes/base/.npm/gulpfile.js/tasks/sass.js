var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../lib/handleErrors');
var config       = require('../config/sass');
var autoprefixer = require('gulp-autoprefixer');
var gulpFilter   = require('gulp-filter');
var plumber      = require('gulp-plumber');

gulp.task('sass', function () {

  var filter = gulpFilter(['*.css', '!*.map']);

  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass(config.settings))
    .on('error', handleErrors)
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(sourcemaps.write())
    //.pipe(sourcemaps.init({loadMaps: true}))
    //.pipe(filter)
    //.pipe(filter.restore())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
