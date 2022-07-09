import * as nodepath from 'path'
const rootFolder = nodepath.basename(nodepath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        ts:`${buildFolder}/ts/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,

    },
    src: {
        js: `${srcFolder}/js/*.js`, //or `${srcFolder}/js/app.js`
        ts:`${srcFolder}/ts/*.ts`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        svgicons: `${srcFolder}/svgicons/*.svg`,

    },
    watch: {
        ts: `${srcFolder}/ts/**/*.ts`,
        js: `${srcFolder}/js/**/*.js`,
        ts: `${srcFolder}/ts/**/*.ts`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: 'test'
}