var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    concat       = require ('gulp-concat'),
    rename       = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    watch        = require('gulp-watch'),
    iconfont     =   require( 'gulp-iconfont' ),
    browserSync  = require('browser-sync').create(),
    imagemin     = require('gulp-imagemin');
    iconfontCss  =   require( 'gulp-iconfont-css' );

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false,
        tunnel: true,
        online: true
    });
});
    
//imagesMin
gulp.task('imagemin', async () => {
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
});

//styles (compressed, autoprefixer)
gulp.task('style', gulp.series(function () {
    return gulp.src('src/styles/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
}));

//styles (watch)
gulp.task('watch', function () {
    return gulp.watch('src/styles/**/*.scss', gulp.series('default'));
});

gulp.task('default', gulp.series('style'));


//icon fonts
var fontName = 'icons';

//add svg icons to the folder "icons" and use 'iconfont' task for generating icon font
gulp.task( 'iconfont', async () => {
    gulp.src( 'dist/assets/icons/*.svg' )
        .pipe( iconfontCss( {
            // где будет наш scss файл
            targetPath   : '../../../src/styles/common/_icons.scss',
            // пути подлючения шрифтов в _icons.scss
            fontPath     : 'assets/fontIcons/',
            fontName    : fontName

        } ) )
        .pipe( iconfont( {
            fontName    : fontName,
            formats     : [ 'svg', 'ttf', 'eot', 'woff', 'woff2' ],
            normalize   : true,
            fontHeight  : 1001
        } ) )
        .pipe( gulp.dest( 'dist/assets/fontIcons' ) )
});