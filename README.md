# jstransformer-pixie



[Pixie](https://github.com/jamen/pixie) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-pixie/master.svg)](https://travis-ci.org/jstransformers/jstransformer-pixie)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-pixie/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-pixie)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-pixie/master.svg)](http://david-dm.org/jstransformers/jstransformer-pixie)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-pixie.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-pixie.svg)](https://www.npmjs.org/package/jstransformer-pixie)

## Installation

    npm install jstransformer-pixie

## API

```js
var pixie = require('jstransformer')(require('jstransformer-pixie'))

pixie.render('pixie {{bar}} baz', {}, {bar: 'qux'}).body
//=> 'pixie qux baz'
```

## License

MIT
