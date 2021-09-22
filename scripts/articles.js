const gulp = require('gulp')
const fs = require('fs')
const path = require('path')
const MarkdownIt = require('markdown-it')
const through2 = require('through2')
const PluginError = require('plugin-error')
const sha256 = require('sha256')
const chalk = require('chalk')
const dateformat = require('dateformat')
const frontMatter = require('front-matter')

const articleDir = path.resolve(__dirname, '../articles')
const buildDir = process.env.NODE_ENV === 'production' ? 'docs' : 'public'
const saveArticleDir = `${buildDir}/articles/*`
const mdIT = new MarkdownIt()

const articles = []

function articleMatter(data) {
  const { attributes, body } = frontMatter(data)
  return {
    title: attributes.title,
    tag: attributes.tag,
    date: dateformat(attributes.date, 'yyyy-mm-dd'),
    body
  }
}

function translateMD(data) {
  const id = sha256(data)
  const n = `${id}.json`
  const matter = articleMatter(data)
  const item = {
    ...matter,
    id,
    body: matter.body.substr(0, 100).replace(/\s*/g, '')
  }
  articles.push(item)
  return {
    content: JSON.stringify({
      ...matter,
      body: mdIT.render(matter.body)
    }),
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
    const tx = translateMD(fileOpts.content)
    file.contents = Buffer.from(tx.content)
    file.path = tx.filename
    this.push(file)
    cb()
  })
}()).pipe(gulp.dest(saveArticleDir, {
  cwd: path.resolve(__dirname, '../')
})).on('end', writeArticleList)
