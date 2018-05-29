[![David](https://img.shields.io/david/silicate-tools/kyanite.svg?style=flat-square)](https://david-dm.org/silicate-tools/kyanite)
[![David](https://img.shields.io/david/dev/silicate-tools/kyanite.svg?style=flat-square)](https://david-dm.org/silicate-tools/kyanite?type=dev)
[![Travis](https://img.shields.io/travis/silicate-tools/kyanite.svg?style=flat-square)](https://travis-ci.org/silicate-tools/kyanite)
[![Coverage Status](https://img.shields.io/coveralls/github/silicate-tools/kyanite.svg?style=flat-square)](https://coveralls.io/github/silicate-tools/kyanite?branch=master)

# Kyanite

A light weight pure functional library with single type utility functions and it only depends on itself.

## Contents

- [Changelog](#changelog)
- [Credit](#credit)
- [Philosophy](#philosophy)
- [Key Features](#key-features)
- [How To](#how-to)
- [Documentation](#documentation)
- [Modular](#modular)

## Changelog

You can view the changelog here: https://github.com/silicate-tools/kyanite/blob/master/CHANGELOG.md

## Credit

A lot of the if not most of the inpiration for this library came from 2 libraries I follow closely, Primarily most of it stems from:

- [foreword](https://github.com/abstract-tools/foreword) by [Abstract Tools](https://github.com/abstract-tools) which is a very nice and easy to use library developed by a close friend. This is where a lot of functionality, AND the idea of a pure single data type system came from I can't recommend it enough.
- [Ramdajs](http://ramdajs.com/) by [Ramda](https://github.com/ramda) a large and fairly handy library where the original idea sparked

## Philosophy

The idea for Kyanite is to not just be another library but to introduce a pure single task functional experience. This is to keep things light, and optimal in terms of size and performance.

Working with the functional experience is working with immutable data, with this library I wanted to keep that as true as I could with using pure functions, but also in using single type data structures through out the library.

The goal for the library was to be stripped down, light weight and easy to understand intuitively. As well as being performant and optimized in the best ways possible, and I am happy with that current outcome.

## Key Features
Some of the primary features for Kyanite are:

- Purely Functional, this was a big thing for me I wanted it to be easy to use functional system but also I wanted everything to be completely pure. I am happy with the results.
- Emphasis on single type utility functions, all of the functionality is (Theroetically) based around accepting a single data type (String, Array, Object, Number) doing what it does, and giving you back a result. Making it reliable and stable while also staying lightweight
- Everything is curried! Setup static in one spot and then pass the rest of the dynamic data in later.
- Modular! Despite the main minified file being `9.13kb` (`3.08kb` gzipped) ontop of that the library is completely modular, allowing you to bring in single functions for use! Most functions (aside from say something like `isEqual`) are below `1kb` (even smaller if you gzip) most of these are even below `500 Bytes`! Making it easy and even lighter on your large scale applications!

## How To

Standard module system

```js
import kyanite from 'kyanite'
```

Common JS

```js
const kyanite = require('kyanite')
```

Through the browser

```html
<script src="path/to/kyanite/kyanite.min.js"></script>
```

## Documentation

Create a new documentation setup for the library

Will need to create a main documentation page for this on dusty.codes

## Modular

Like [lodash](https://lodash.com/) each method is importable by itself or desturctured from the main object. The benefit to being split up and importable individually is this helps out with tree shaking and only using the functionality you need at that time. Keeping builds smaller.

Examples:

Standard module system

```js
import isEmpty from 'kyanite/isEmpty';

isEmpty({});
```

Common JS

```js
const isEmpty = require('kyanite/isEmpty');

isEmpty({});
```

Through your browser

```html
<script src="path/to/kyanite/isEmpty.js"></script>
<script>
  isEmpty({});
</script>
```
