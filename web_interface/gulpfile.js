var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');
var useref = require('gulp-useref');
var bower = require('gulp-bower-files');
var webserver = require('gulp-webserver');



// Set the banner content
var banner = ['/*!\n',
    ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n',
    ' */\n',
    ''
].join('');

// Compile LESS files from /less into /css
gulp.task('less', function() {
    return gulp.src('less/sb-admin-2.less')
        .pipe(less())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('dist/css'))

});

// Minify compiled CSS
gulp.task('minify-css', ['less'], function() {
    return gulp.src('dist/css/sb-admin-2.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Copy JS to dist
gulp.task('js', function() {
    return gulp.src(['js/sb-admin-2.js','bower_components/raphael/raphael.js', 'bower_components/raphael/raphael.min.js'])
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('dist/js'))
});


// Minify JS
gulp.task('minify-js', ['js'], function() {
    return gulp.src('js/sb-admin-2.js')
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('bower', function() {
    return bower({ directory: './vendor' })
});

//        .pipe(browserSync.reload({
//stream: true
//}))


// Copy vendor libraries from /bower_components into /vendor
gulp.task('copy', function() {
    gulp.src(['bower_components/raphael/raphael.js', 'bower_components/raphael/raphael.min.js'])
        .pipe(gulp.dest('dist/vendor/raphael'))

    gulp.src(['bower_components/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('dist/vendor/bootstrap'))

    gulp.src(['bower_components/bootstrap-social/*.css', 'bower_components/bootstrap-social/*.less', 'bower_components/bootstrap-social/*.scss'])
        .pipe(gulp.dest('dist/vendor/bootstrap-social'))

    gulp.src(['bower_components/datatables/media/**/*'])
        .pipe(gulp.dest('dist/vendor/datatables'))

    gulp.src(['bower_components/datatables-plugins/integration/bootstrap/3/*'])
        .pipe(gulp.dest('dist/vendor/datatables-plugins'))

    gulp.src(['bower_components/datatables-responsive/css/*', 'bower_components/datatables-responsive/js/*'])
        .pipe(gulp.dest('dist/vendor/datatables-responsive'))

    gulp.src(['bower_components/flot/*.js'])
        .pipe(gulp.dest('dist/vendor/flot'))

    gulp.src(['bower_components/flot.tooltip/js/*.js'])
        .pipe(gulp.dest('dist/vendor/flot-tooltip'))

    gulp.src(['bower_components/font-awesome/**/*', '!bower_components/font-awesome/*.json', '!bower_components/font-awesome/.*'])
        .pipe(gulp.dest('dist/vendor/font-awesome'))

    gulp.src(['bower_components/jquery/dist/jquery.js', 'bower_components/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('dist/vendor/jquery'))

    gulp.src(['bower_components/metisMenu/dist/*'])
        .pipe(gulp.dest('dist/vendor/metisMenu'))

    gulp.src(['bower_components/morrisjs/*.js', 'bower_components/morrisjs/*.css', '!bower_components/morrisjs/Gruntfile.js'])
        .pipe(gulp.dest('dist/vendor/morrisjs'))

    gulp.src(['bower_components/jquery.easing/js/*.js'])
        .pipe(gulp.dest('dist/vendor/jquery.easing'))
})


// Configure the browserSync task


gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './dist',
            index: "index.html"
        },
        browser: 'google chrome'
    })
});


gulp.task('useref', function(){
    return gulp.src('pages/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'))
});


gulp.task('webserver', function() {
    gulp.src('dist')
        .pipe(webserver({
            livereload: false,
            directoryListing: false,
            open: false,
            port: 3000,
            fallback: 'index.html'
        }));
});


// Dev task with browserSync
gulp.task('dev', ['bower','copy','useref', 'less', 'minify-css', 'js', 'minify-js','browserSync'], function() {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('dist/css/*.css', ['minify-css']);
    gulp.watch('js/*.js', ['minify-js']);
    // Reloads the browser whenever HTML or JS files change
});


// Run everything
gulp.task('default', ['bower','copy','useref', 'less', 'minify-css', 'js', 'minify-js','webserver'], function() {
});