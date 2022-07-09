import ts from 'gulp-typescript'
import minify from 'gulp-minify'
export const tYpsc =()=>{
    return app.gulp.src(app.path.src.ts, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "TS",
            message: "Error: <%= error.message %>"
        })))
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'app.min.js'
        })) 
        .pipe(minify({
            ext:{
                src:app.gulp.src(app.path.src.ts),
                min:'.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(app.gulp.dest(app.path.build.ts))
        .pipe(app.plugins.browserSync.stream())
}