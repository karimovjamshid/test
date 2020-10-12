const gulp        = require('gulp'),
      sass        = require('gulp-sass'),
      browserSync = require('browser-sync'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
    return gulp.src('app/scss/*.scss')
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) 
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('browser-sync',function(){
    browserSync({
        server:{
            baseDir: 'app'
        },
        notify:false
    })
})

gulp.task('code', function(){
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('script',function(){
    return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({stream:true}))
})

gulp.task('watch',function(){
    gulp.watch('app/scss/*.scss', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('code'));
    gulp.watch('app/js/*.js', gulp.parallel('script'));
})

gulp.task('default', gulp.parallel('sass','browser-sync', 'watch'));

// https://webdesign-master.ru/blog/tools/2016-03-09-gulp-beginners.html