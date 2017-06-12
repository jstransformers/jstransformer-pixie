'use strict'

const pixie = require('pixie')

exports.name = 'pixie'
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  const template = pixie(str, options.openBracket || '{{', options.closeBracket || '}}')
  return locals => {
    return pixie.compile(template, locals)
  }
}
