import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff';
export const otfTottf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Fonts",
                message: "Error: <%= error.message %>"
            })))
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))

}
export const ttfToWoff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Fonts",
                message: "Error: <%= error.message %>"
            })))
        .pipe(fonter({
            formats: ['woff']
        }))
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))

}
export const fontstyle = () => {
    let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`
    fs.readdir(app.path.build.fonts, (err, fontsFiles) => {
        if (fontsFiles) {
            if (!fs.existsSync(fontsFile)) {
                fs.writeFile(fontsFile, '', cb)
                let newFileonly;
                for (let i = 0; i < fontsFiles.length; i++) {
                    let fontfamily = fontsFiles[i].split('.')[0];
                    if (newFileonly !== fontfamily) {
                        let fontName = fontfamily.split('-')[0] ? fontfamily.split('-')[0] : fontfamily
                        let fontWeight = fontfamily.split('-')[1] ? fontfamily.split('-')[1] : fontfamily
                        if (fontWeight.toLowerCase() === 'thin') {
                            fontWeight = 100;
                        } else if (fontWeight.toLowerCase() === 'extralight') {
                            fontWeight = 200;
                        } else if (fontWeight.toLowerCase() === 'light') {
                            fontWeight = 300;
                        } else if (fontWeight.toLowerCase() === 'medium') {
                            fontWeight = 500;
                        } else if (fontWeight.toLowerCase() === 'semibold') {
                            fontWeight = 600;
                        } else if (fontWeight.toLowerCase() === 'bold') {
                            fontWeight = 700;
                        } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
                            fontWeight = 800;
                        } else if (fontWeight.toLowerCase() === 'black') {
                            fontWeight = 900;
                        } else {
                            fontWeight = 400
                        }

                        fs.appendFile(fontsFile, `@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontfamily}.woff2") format("woff2"), url("../fonts/${fontfamily}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb)
                        newFileonly = fontfamily
                    }
                }
            } else {
                console.log("a file cущ")
            }
        }
    })
    return app.gulp.src(`${app.path.srcFolder}`)

    function cb() {}
}