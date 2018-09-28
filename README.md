[![npm](https://img.shields.io/npm/v/kyanite.svg?style=flat-square)](https://www.npmjs.com/package/kyanite)
[![David](https://img.shields.io/david/dhershman1/kyanite.svg?style=flat-square)](https://david-dm.org/dhershman1/kyanite)
[![David](https://img.shields.io/david/dev/dhershman1/kyanite.svg?style=flat-square)](https://david-dm.org/dhershman1/kyanite?type=dev)
[![Travis](https://img.shields.io/travis/dhershman1/kyanite.svg?style=flat-square)](https://travis-ci.org/dhershman1/kyanite)
[![Coverage Status](https://img.shields.io/coveralls/github/dhershman1/kyanite.svg?style=flat-square)](https://coveralls.io/github/dhershman1/kyanite?branch=master)

# Kyanite

A light weight pure functional library with single type utility functions and it only depends on itself.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Contents

- [Changelog](#changelog)
- [Credit](#credit)
- [Documentation](#documentation)
- [Philosophy](#philosophy)
- [Key Features](#key-features)
- [How To](#how-to)
- [Modular](#modular)
- [Modular By Datatype](#modular-by-datatype)

## Changelog

You can view the changelog here: https://github.com/dhershman1/kyanite/blob/master/CHANGELOG.md

## Credit

A lot of the if not most of the inpiration for this library came from 2 libraries I follow closely, Primarily most of it stems from:

- [foreword](https://github.com/abstract-tools/foreword) by [Abstract Tools](https://github.com/abstract-tools) which is a very nice and easy to use library developed by a close friend. This is where a lot of functionality, AND the idea of a pure single data type system came from I can't recommend it enough.
- [Ramdajs](http://ramdajs.com/) by [Ramda](https://github.com/ramda) a large and fairly handy library where the original idea sparked

## Documentation

You can find the documentation here: https://www.dusty.codes/documentation/kyanite

## Philosophy

The goal for the library is to be stripped down, light weight, and intuitive. With Kyanite, The idea is to be performant and easy to use in a functional setting, it's easy to build powerful and organized, yet small, algorithmic pipes into reusable functions for your codebase. The hope is that it will continue to bring functionality to the world of JavaScript with continued improvement as it grows!

## Key Features

- Purely Functional, this was a big thing for me I wanted it to be easy to use functional system but also I wanted everything to be completely pure. I am happy with the results.
- Emphasis on single type utility functions, all of the functionality is (Theroetically) based around accepting a single data type (String, Array, Object, Number) doing what it does, and giving you back a result. Making it reliable and stable while also staying lightweight
- Everything is curried! Setup static in one spot and then pass the rest of the dynamic data in later.
- The library is completely modular, allowing you to bring in single functions for use! Making it super easy to only use the stuff you need or the stuff you want.

## How To

Standard module system

```js
import K from 'kyanite'
```

Common JS

```js
const K = require('kyanite')
```

CDN

```html
<script src="https://cdn.jsdelivr.net/npm/kyanite@latest/dist/kyanite.min.js"></script>
<script>
  const K = kyanite

  K.isEmpty({})
</script>
```

Local copy script tag

```html
<script src="/path/to/kyantie.min.js"></script>
<script>
  const K = kyanite

  K.isEmpty({})
</script>
```

## Modular

Like [lodash](https://lodash.com/) each method is importable by itself or desturctured from the main object. The benefit to being split up and importable individually is this helps out with tree shaking and only using the functionality you need at that time. Keeping builds smaller.

Examples:

Standard module system

```js
import isEmpty from 'kyanite/isEmpty'

isEmpty({})
```

Common JS

```js
const isEmpty = require('kyanite/isEmpty')

isEmpty({})
```

CDN

```html
<script src="https://cdn.jsdelivr.net/npm/kyanite@latest/isEmpty.js"></script>
<script>
  isEmpty({})
</script>
```

Through your browser

```html
<script src="path/to/kyanite/isEmpty.js"></script>
<script>
  isEmpty({})
</script>
```

## Modular By Datatype

However You can also break it down by data type too!

- `kyanite/array` : All of the `Array` based functions (`intersection`, `difference`, `concat`, etc...)
- `kyanite/function` : All of the `"Function"` based functions (`curry`, `is`, `isEmpty`, etc...)
- `kyanite/list` : All of the `List` based functions (`includes`, `nth`, `reverse`, etc...)
- `kyanite/number` : All of the `Number` based functions (`add`, `gcd`, `isOdd`, etc...)
- `kyanite/object` : All of the `Object` based functions (`sift`, `height`, `assign`, etc...)
- `kyanite/string` : All of the `String` based functions (`capitalize`, `toLower`, `fuzzySearch`, etc...)

Examples:

Standard JS

```js
import KA from 'kyanite/array'
import KF from 'kyanite/function'
import KL from 'kyanite/list'
import KN from 'kyanite/number'
import KO from 'kyanite/object'
import KS from 'kyanite/string'
```

CommonJs

```js
const KA = require('kyanite/array')
const KF = require('kyanite/function')
const KL = require('kyanite/list')
const KN = require('kyanite/number')
const KO = require('kyanite/object')
const KS = require('kyanite/string')
```

CDN

```html
<script src="https://cdn.jsdelivr.net/npm/kyanite@latest/array.js"></script>
<script src="https://cdn.jsdelivr.net/npm/kyanite@latest/function.js"></script>
<script src="https://cdn.jsdelivr.net/npm/kyanite@latest/list.js"></script>
<script src="https://cdn.jsdelivr.net/npm/kyanite@latest/number.js"></script>
<script src="https://cdn.jsdelivr.net/npm/kyanite@latest/object.js"></script>
<script src="https://cdn.jsdelivr.net/npm/kyanite@latest/string.js"></script>
<script>
  KA.filter()
  KF.curry()
  KL.includes()
  KN.add()
  KO.isEmpty()
  KS.fuzzySearch()
</script>
```

Through your browser

```html
<script src="path/to/kyanite/array.js"></script>
<script src="path/to/kyanite/function.js"></script>
<script src="path/to/kyanite/list.js"></script>
<script src="path/to/kyanite/number.js"></script>
<script src="path/to/kyanite/object.js"></script>
<script src="path/to/kyanite/string.js"></script>
<script>
  KA.filter()
  KF.curry()
  KL.includes()
  KN.add()
  KO.isEmpty()
  KS.fuzzySearch()
</script>
```
