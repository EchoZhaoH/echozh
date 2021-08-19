const gulp = require('gulp')
const fs = require('fs')
const path = require('path')
const MarkdownIt = require('markdown-it')
const through2 = require('through2')
const PluginError = require('plugin-error')
const sha256 = require('sha256')
const chalk = require('chalk')
const dateformat = require('dateformat')

console.log('node mode: ', process.env.NODE_ENV)

const articleDir = path.resolve(__dirname, '../articles')
const buildDir = process.env.NODE_ENV === 'production' ? 'docs' : 'public'
const saveArticleDir = `${buildDir}/articles/*`
const mdIT = new MarkdownIt()

const articles = []

function translateMD(stat, data) {
  const id = sha256(data)
  const n = `${id}.json`
  const titleIdx = String.prototype.indexOf.call(data, '\n')
  const title = data.substr(0, titleIdx).replace(/[#\s]/g, '')
  const item = {
    title,
    id,
    date: dateformat(stat.ctimeMs, 'yyyy-mm-dd')
  }
  articles.push(item)
  return {
    content: JSON.stringify({ data: mdIT.render(data)}),
    filename: n 
  }
}

function writeArticleList() {
  fs.writeFile(path.resolve(__dirname, `../${buildDir}/articles/list.json`), JSON.stringify(articles), (err) => {
    if (err) {
      console.log(chalk.red(`write list file error: ${err.message}`))
      process.exit(-1) 
    }
  })
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
    const tx = translateMD(file.stat, fileOpts.content)
    file.contents = Buffer.from(tx.content)
    file.path = tx.filename
    this.push(file)
    cb()
  })
}()).pipe(gulp.dest(saveArticleDir, {
  cwd: path.resolve(__dirname, '../')
})).on('end', writeArticleList)
