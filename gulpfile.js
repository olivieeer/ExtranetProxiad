var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var refresh = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();
var minifyCSS = require('gulp-minify-css');
var embedlr = require('gulp-embedlr');
var jshint = require("gulp-jshint");
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var gulpIf = require('gulp-if');
// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var source = './**/*'; // dossier de travail
var destination = './dist'; // dossier à livrer

gulp.task('useref', function(){
  var assets = useref.assets();

  return gulp.src('app/**/*.html')
    .pipe(assets)
    // Minifie seulement les fichiers CSS
    .pipe(gulpIf('*.css', minifyCSS()))
    // Minifie seulement les fichiers Javascript
    .pipe(gulpIf('*.js', uglify()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});
gulp.task('scripts', function() {
    gulp.src(['app/scripts/**/*.js'])
        .pipe(browserify())
        .pipe(concat('dest.js'))
        .pipe(gulp.dest('dist/build'))
        .pipe(refresh(server))
})

// task
gulp.task('jsLint', function () {
    gulp.src('app/scripts/**/*.js') // path to your files
    .pipe(jshint())
    .pipe(jshint.reporter()); // Dump results
})

gulp.task('styles', function() {
    gulp.src(['app/style.less'])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/build'))
        .pipe(refresh(server))
})

gulp.task('lr-server', function() {
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
})

gulp.task('useref', function(){
  var assets = useref.assets();

  return gulp.src('app/**/*.html')
    .pipe(assets)
    // Minifie seulement les fichiers Javascript
    .pipe(gulpIf('*.js', uglify()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'))
})

gulp.task('html', function() {
    gulp.src("**/*.html")
        .pipe(embedlr())
        .pipe(gulp.dest('dist/'))
        .pipe(refresh(server));
})

gulp.task('default', function() {
    gulp.run('lr-server', 'scripts', 'styles', 'html');

    gulp.watch('app/scripts/**', function(event) {
        gulp.run('scripts');
    })

    gulp.watch('app/**', function(event) {
        gulp.run('styles');
    })

    gulp.watch('app/**/*.html', function(event) {
        gulp.run('html');
    })
})