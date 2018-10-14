[![npm](https://img.shields.io/npm/v/kyanite.svg?style=flat-square)](https://www.npmjs.com/package/kyanite)
[![David](https://img.shields.io/david/dhershman1/kyanite.svg?style=flat-square)](https://david-dm.org/dhershman1/kyanite)
[![David](https://img.shields.io/david/dev/dhershman1/kyanite.svg?style=flat-square)](https://david-dm.org/dhershman1/kyanite?type=dev)
[![Travis](https://img.shields.io/travis/dhershman1/kyanite.svg?style=flat-square)](https://travis-ci.org/dhershman1/kyanite)
[![Coverage Status](https://img.shields.io/coveralls/github/dhershman1/kyanite.svg?style=flat-square)](https://coveralls.io/github/dhershman1/kyanite?branch=master)

# Kyanite

A light weight pure functional library with single type utility functions and it only depends on itself.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Contents

- [Changelog](https://github.com/dhershman1/kyanite/blob/master/CHANGELOG.md)
- [Documentation](https://www.dusty.codes/documentation/kyanite)
- [Philosophy](#philosophy)
- [Key Features](#key-features)
- [How To](#how-to)
- [Credit](#credit)

## Philosophy

The goal for the library is to be stripped down, light weight, and intuitive. With Kyanite, The idea is to be performant and easy to use in a functional setting, it's easy to build powerful and organized, yet small, algorithmic pipes into reusable functions for your codebase. The hope is that it will continue to bring functionality to the world of JavaScript with continued improvement as it grows!

## Key Features

- Purely Functional, this was a big thing for me I wanted it to be easy to use functional system but also I wanted everything to be completely pure. Making use of piping, and transducers to boost performance
- Emphasis on single type utility functions, all of the functionality is (Theroetically) based around accepting a single data type doing what it does, and giving you back a result. Making it reliable and stable while also staying lightweight
- Everything is curried! Setup static in one spot and then pass the rest of the dynamic data in later.
- Data last ideaology

## How To

`npm i kyanite`

Standard module system

```js
// This pulls from the actual source folder and builds with
// Your own build setup so you shouldn't need the dev distro
import K from 'kyanite'
// However if you want to be sure just in case
import K from 'kyanite/dist/kyanite.js'
```

Common JS

```js
// For the prod minified version
const K = require('kyanite')
// For the dev/debug friendly version
const K = require('kyanite/dist/kyanite.js')
```

CDN

```html
<!-- It is recommended to replace the @latest with a strict version number for production -->
<script src="https://cdn.jsdelivr.net/npm/kyanite@latest/dist/kyanite.min.js"></script>
<!-- To use the debug friendly kyanite simply remove .min from the filename -->
<script src="https://cdn.jsdelivr.net/npm/kyanite@latest/dist/kyanite.js"></script>
<script>
  const K = kyanite

  K.isEmpty({})
</script>
```

Local copy script tag

```html
<!-- To use the prod minified version -->
<script src="/path/to/kyantie.min.js"></script>
<!-- To use the dev/debug friendly version -->
<script src="/path/to/kyantie.js"></script>
<script>
  const K = kyanite

  K.isEmpty({})
</script>
```

## Credit

A lot of the if not most of the inpiration for this library came from 2 libraries I follow closely, Primarily most of it stems from:

- [foreword](https://github.com/abstract-tools/foreword) by [Abstract Tools](https://github.com/abstract-tools) which is a very nice and easy to use library developed by a close friend. This is where a lot of functionality, AND the idea of a pure single data type system came from I can't recommend it enough.
- [Ramdajs](http://ramdajs.com/) by [Ramda](https://github.com/ramda) a large and fairly handy library where the original idea sparked
