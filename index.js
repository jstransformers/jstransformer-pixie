'use strict'

const pixie = require('pixie')

exports.name = 'pixie'
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  const template = pixie.parse(str, options)
  return locals => {
    return pixie.compile(template, locals)
  }
}
