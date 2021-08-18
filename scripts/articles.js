const gulp = require('gulp')
const path = require('path')
const MarkdownIt = require('markdown-it')
const through2 = require('through2')
const PluginError = require('plugin-error')

const articleDir = path.resolve(__dirname, '../articles')
const saveArticleDir = path.resolve(__dirname, '../public/articles/assets')
const mdIT = new MarkdownIt()

function translateMD(filename, data) {
  const s = filename.split('.')
  // const id = sha256(data)
  const sn = `${s[0]}.json`
  return {
    content: JSON.stringify({ data: mdIT.render(data)}),
    filename: sn 
  }
}

gulp.src(path.join(articleDir, '*.md')).pipe(function (opt) {
  opt = opt || {}
  return through2.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }
    if (file.isStream()) {
      cb(new PluginError('gulp-babel', 'Streaming not supported'));
      return;
    }
    const fileOpts = Object.assign({}, opt, {
      filename: file.relative,
      content: file.contents.toString()
    })
    const tx = translateMD(fileOpts.filename, fileOpts.content)
    file.contents = Buffer.from(tx.content)
    file.path = tx.filename
    this.push(file)
    cb()
  })
}()).pipe(gulp.dest(saveArticleDir))
