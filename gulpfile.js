import gulp from 'gulp'
import { path } from './gulp/config/path.js'
global.app = {
    path: path,
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    gulp: gulp,
    plugins: plugins,
}
import { copy } from './gulp/tasks/copy.js'
import { clear } from './gulp/tasks/clear.js'
import { html } from './gulp/tasks/html.js'
import { plugins } from './gulp/config/plagins.js'
import { server } from './gulp/tasks/server.js'
import { scss } from './gulp/tasks/scss.js'
import { js } from './gulp/tasks/js.js'
import { tYpsc } from './gulp/tasks/ts.js'
import { images } from './gulp/tasks/images.js'
import { otfTottf, ttfToWoff, fontstyle } from './gulp/tasks/fonts.js'
import { svgSprive } from './gulp/tasks/svgSp.js'
export { svgSprive }
import { zip } from './gulp/tasks/zip.js'
import { ftp } from './gulp/tasks/ftp.js'


function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)

    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.ts, tYpsc)
    gulp.watch(path.watch.images, images)
}
const fonts = gulp.series(otfTottf, ttfToWoff, fontstyle)
const MainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js,tYpsc, images, ))
const dev = gulp.series(clear, MainTasks, gulp.parallel(watcher, server))
const build = gulp.series(clear, MainTasks)
const deployZip = gulp.series(clear, MainTasks, zip)
const deployFtp = gulp.series(clear, MainTasks, ftp)
export { dev }
export { build }
export { deployZip }
export { deployFtp }
gulp.task('default', dev)