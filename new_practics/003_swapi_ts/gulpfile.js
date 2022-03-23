const gulp = require('gulp');
const less = require('gulp-less');
const browserify = require('browserify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');
const watchify = require('watchify');
const fancyLog = require('fancy-log');
const browserSync = require('browser-sync').create();
const path = {
    pages: ["./src/*.html", "./src/*.css"]
}

gulp.task('copy-file', () => gulp.src(path.pages) // Задача на копирование html файлов из src в dist
    .pipe(gulp.dest('./dist'))
)

gulp.task('less', function (done) {
    gulp.src('./**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./'))
    done();
})

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir:'./dist'
        },
        port: 3000
    })
    gulp.watch(['./dist/*']).on('change',browserSync.reload)
    gulp.watch(['./src/*.html', './src/*.css']).on('change', gulp.series('copy-file'))
})

gulp.task('less:watch', function () {
    gulp.watch('./**/*.less', gulp.series('less'))
})

const whatchifyBrowserify = watchify(browserify( // Обёртка для слежения за изменениями ts
    {
        basedir: '.',
        entries: ["./src/index.ts"], // Фалйы для обработки
        cache: {},
        debug: true, // Включаем отладку
        packageCache: {}
    })
    .plugin(tsify))

const bundle = () => whatchifyBrowserify
    .bundle() // объединит все модули в один файл
    .on('error', fancyLog) // Логирование при ошибках
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist')) // Путь к выходному файлу

gulp.task('default', gulp.parallel('less:watch','copy-file', bundle, 'serve'))
whatchifyBrowserify.on('update', bundle) // Вызов функции bundle при изменеии ts
whatchifyBrowserify.on('log', fancyLog) // Логирование
