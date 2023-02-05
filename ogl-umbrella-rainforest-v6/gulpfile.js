const gulp = require('gulp');
const concat = require('gulp-concat');
const gulpIgnore = require('gulp-ignore')
const path = require('path');

const paths = {
    lib: path.join(__dirname, './src/lib/**/*.js'),
    factory: ['!./src/lib/ogl.js', '!./src/lib/utils/index.js'],
}

gulp.task("ogl", function (done) {
    console.log(paths.lib, paths.factory);
    return gulp.src(paths.factory, { base: './src' })
        .pipe(gulpIgnore.exclude(paths.factory))
        .pipe(concat('ogl.js'))
        .pipe(gulp.dest(path.join(__dirname, './dist')))
        // .on('end', done);
});


gulp.task('default', gulp.series('ogl'));
