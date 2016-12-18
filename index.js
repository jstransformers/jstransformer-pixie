'use strict'

var pixie = require('pixie')

exports.name = 'pixie'
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  var template = pixie.parse(str, options)
  return function (locals) {
    return pixie.compile(template, locals)
  }
}
