var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var cssshrink = require('gulp-cssshrink');
var htmlmin = require("gulp-htmlmin");
var nodemon = require('gulp-nodemon');
var cp = require('child_process');

gulp.task('scripts', function () {
	gulp.src('public/src/js/**/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('public/build/js'));
});

gulp.task('styles', function () {
	gulp.src('public/src/css/**/*.css')
		.pipe(plumber())
		.pipe(prefix('last 2 versions'))
		.pipe(cssshrink())
		.pipe(gulp.dest('public/build/css'));
});

gulp.task('images', function () {
	gulp.src('public/src/img/*')
		.pipe(plumber())
		.pipe(imagemin())
		.pipe(gulp.dest('public/build/img'));
});

gulp.task("html", function() {
  gulp.src("public/src/**/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public/build/'))
});

gulp.task('watch', function () {
	gulp.watch('public/src/js/**/*.js',['scripts']);
	gulp.watch('public/src/css/**/*.css',['styles']);
	gulp.watch("public/src/**/*.html",["html"]);
});

gulp.task('nodemon', function () {
	nodemon({ script: 'server/server.js', ext: 'js',ignore: ['public/**/*']}).on('restart', function () {
		console.log('restarted!')
	});
});

gulp.task('default',['styles', 'scripts', 'html', 'images', 'watch', 'nodemon']);