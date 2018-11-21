[![npm](https://img.shields.io/npm/v/kyanite.svg?style=flat-square)](https://www.npmjs.com/package/kyanite)
[![David](https://img.shields.io/david/dhershman1/kyanite.svg?style=flat-square)](https://david-dm.org/dhershman1/kyanite)
[![David](https://img.shields.io/david/dev/dhershman1/kyanite.svg?style=flat-square)](https://david-dm.org/dhershman1/kyanite?type=dev)
[![Travis](https://img.shields.io/travis/dhershman1/kyanite.svg?style=flat-square)](https://travis-ci.org/dhershman1/kyanite)
[![Coverage Status](https://img.shields.io/coveralls/github/dhershman1/kyanite.svg?style=flat-square)](https://coveralls.io/github/dhershman1/kyanite?branch=master)

![kyanite-scaled](https://user-images.githubusercontent.com/8997380/48008308-69174500-e0e7-11e8-9a57-ebd558f094f8.png)

A light weight pure functional library with single type utility functions and it only depends on itself.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Contents

- [View the Changelog](https://github.com/dhershman1/kyanite/blob/master/CHANGELOG.md)
- [View the Documentation](https://dhershman1.github.io/kyanite/)
- [Philosophy](#philosophy)
- [Key Features](#key-features)
- [How To](#how-to)
- [Credit](#credit)

## Philosophy

The goal for Kyanite is to be stripped down, light weight, and intuitive. The idea is to be performant and easy to use in a functional setting, making it simple to build reusable functions in your code base with powerful and organized algorithmic pipes. Ultimately, Kyanite’s continued growth and improvement will support the growth and improvement of the JavaScript community

## Key Features

- Purely Functional - This was a main focus for the project. I wanted it to be an easy to use, functional system while also being completely pure by making use of piping and transducers to boost performance.
- Single type utility functions - Theoretically, all of the functionality is based around accepting a single data type, doing what it does, and giving you back a result, thus making it reliable, stable, and lightweight.
- Everything is curried! Setup static in one spot and then pass the rest of the dynamic data in later.
- Data last ideaology

## How To

With a CDN

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

Or installing with `npm i kyanite` and then:

Standard module system

```js
// This will use the module path in the package.json (src/index.js)
import K from 'kyanite'
// However if you want to grab the dev version
import K from 'kyanite/dist/kyanite.js'
```

Common JS

```js
// For the prod minified version
const K = require('kyanite')
// For the dev/debug friendly version
const K = require('kyanite/dist/kyanite.js')
```

## Credit

A lot of the if not most of the inpiration for this library came from 2 libraries I follow closely, Primarily most of it stems from:

- [foreword](https://github.com/abstract-tools/foreword) by [Abstract Tools](https://github.com/abstract-tools) which is a very nice and easy to use library developed by a close friend. This is where a lot of functionality, AND the idea of a pure single data type system came from I can't recommend it enough.
- [Ramdajs](http://ramdajs.com/) by [Ramda](https://github.com/ramda) a large and fairly handy library where the original idea sparked
