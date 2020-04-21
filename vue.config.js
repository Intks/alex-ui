/* eslint-disable space-before-function-paren */
const path = require('path')
const utils = require('./utils')
const striptags = require('./strip-tags')

const MarkdownItContainer = require('markdown-it-container')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  productionSourceMap: false,
  publicPath: './',
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples'))
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        preventExtract: true,
        preprocess: (MarkdownIt, source) => {
          MarkdownIt.renderer.rules.table_open = function () {
            return '<table class="table">'
          }
          MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)

          // ```code`` 给这种样式加个class code_inline
          const codeLine = MarkdownIt.renderer.rules.code_inline
          MarkdownIt.renderer.rules.code_inline = function (...args) {
            args[0][args[1]].attrJoin('class', 'code_inline')
            return codeLine(...args)
          }
          return source
        },
        use: [
          [MarkdownItContainer, 'demo', {
            validate: params => params.trim().match(/^demo\s*(.*)$/),
            render: function (tokens, idx) {
              if (tokens[idx].nesting === 1) {
                const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))
                // 移除描述，防止被添加到代码块
                tokens[idx + 2].children = []

                return `<demo-block>
                              <div slot="desc">${html}</div>
                              <div slot="highlight">`
              }
              return '</div></demo-block>\n'
            }
          }]
        ]
      })
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
}
