const { src, dest, watch, series, parallel} = require('gulp');
const tingpng = require('gulp-tinypng')


const imgCompressTask =()=> {
  return src('image/index/*.png*')
      .pipe(tingpng('CqxyKzqBgv4GxHZD2nlVdVQhy9vt0zNF'))
      .pipe(dest('dist/img'))
}

exports.default = series(
  parallel(
    imgCompressTask,
  )
)