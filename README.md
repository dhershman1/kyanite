<p align=center>
  <a href="https://kyanite.dusty.codes/" title="Kyanite Documentation">
    <img alt="Kyanite Logo" src="https://user-images.githubusercontent.com/8997380/48008308-69174500-e0e7-11e8-9a57-ebd558f094f8.png">
  </a>
</p>
<br />
<p align=center>
  A light weight functional JavaScript library that only depends on itself.
</p>
<p align=center>
  <a href="./LICENSE">
    <img
      alt="license:mit"
      src="https://img.shields.io/badge/license-mit-green.svg?style=flat-square"
    />
  </a>
  <a href="https://codecov.io/gh/dhershman1/kyanite" >
    <img src="https://codecov.io/gh/dhershman1/kyanite/branch/master/graph/badge.svg?token=fF0sm70rWH"/>
  </a>
  <a href="https://kyanite.dusty.codes/">
    <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/fc0f65da-107d-43d4-9cb3-d74f46f2b472/deploy-status">
  </a>
  <a href="https://www.npmjs.com/package/kyanite">
    <img alt="Npm Version" src="https://img.shields.io/npm/v/kyanite.svg?style=flat-square">
  </a>
  <a href="https://github.com/dhershman1/kyanite/actions/workflows/kyanite.yml">
    <img alt="Build Status" src="https://img.shields.io/github/actions/workflow/status/dhershman1/kyanite/kyanite.yml?style=flat-square">
  </a>
  <a href="https://codebeat.co/projects/github-com-dhershman1-kyanite-master">
    <img alt="codebeat badge" src="https://codebeat.co/badges/4eeb4e32-dfe2-4d12-ac1a-bd13cf31ee55" />
  </a>
</p>

## Why The Name Kyanite?

Because I think mineral names are cool

## Contents

- [View the Changelog](https://github.com/dhershman1/kyanite/blob/master/CHANGELOG.md)
- [View the Documentation](https://kyanite.dusty.codes)
- [Philosophy](#philosophy)
- [Key Features](#key-features)
- [How To](#how-to)
- [Transducers](#transducers)
- [Testing](#testing)
- [Credit](#credit)

## Philosophy

The goal for Kyanite is to be stripped down, light weight, and intuitive. The idea is to be performant and easy to use in a functional setting, making it simple to build reusable functions in your code base with powerful and organized algorithmic pipes. Ultimately, Kyanite’s continued growth and improvement will support the growth and improvement of the JavaScript community

## Key Features

- Purely Functional - This was a main focus for the project. I wanted it to be an easy to use, functional system while also being completely pure by making use of piping and transducers to boost performance.
- Single type utility functions - Theoretically, all of the functionality is based around accepting a single data type, doing what it does, and giving you back a result, thus making it reliable, stable, and lightweight.
- Everything is curried! Setup static in one spot and then pass the rest of the dynamic data in later.
- Data last ideology

## How To

> **Note:** As of `v4.0.0` the script tag build adds a global named `kyanite` instead of `K`

With a CDN

```html
<!-- It is recommended to replace the @latest with a strict version number for production -->
<script src="https://cdn.jsdelivr.net/npm/kyanite@latest/dist/kyanite.iife.min.js"></script>

<script>
  kyanite.isEmpty({})

  // Or give it a shorter name
  const K = kyanite
</script>
```

Or installing with `npm i kyanite` and then:

Standard module system

```js
import * as K from 'kyanite'

// Or just the functions you need
import { map, pipe } from 'kyanite'
```

Common JS

```js
const K = require('kyanite')
```

## Transducers

A chain like `pipe([map(inc), filter(isEven), take(3)], list)` builds a whole new array at every step, even though `take` only needs the first few values. Transducers run the same steps in a single pass instead: each value goes through every step before the next one is read, no in between arrays are built, and once `take` has enough nothing else in the list is looked at.

Leave the list off a list function and hand it to `transduce` or `into`. The steps go in an array and run first to last, just like `pipe`:

```js
import { filter, into, map, take, transduce } from 'kyanite'

const isEven = n => n % 2 === 0

// into collects the results into an array, string, or object
into([], [map(n => n + 1), filter(isEven), take(3)], [1, 2, 3, 4, 5, 6, 7, 8]) // => [2, 4, 6]

// transduce takes a reducer, the same kind reduce does
transduce([filter(isEven), take(3)], (n, acc) => acc + n, 0, [1, 2, 3, 4, 5, 6, 7, 8]) // => 12
```

They work with any iterable, even a generator that never ends, since `take` stops reading once it has enough.

These work as transducers: `map`, `filter`, `reject`, `take`, `takeWhile`, `drop`, `dropWhile`, `uniq`, `uniqBy`, `concatMap`, and `pluck`. You can stop early from your own reducer with `reduced`.

Kyanite follows the [standard transducer protocol](https://github.com/cognitect-labs/transducers-js#transformer-protocol), so transducers and transformers from other libraries that follow it work with `transduce`, and Kyanite's work with theirs.

## Testing

Kyanite uses the built in [Node.js test runner](https://nodejs.org/api/test.html) (`node:test`) with `node:assert`

To run the tests:

- `git clone` the repo
- `cd` into the repo folder
- Run `npm i`
- Run `npm t`

## Credit

A lot of the if not most of the inspiration for this library came from 2 libraries I follow closely, Primarily most of it stems from:

- [foreword](https://github.com/abstract-tools/foreword) by [Abstract Tools](https://github.com/abstract-tools) which is a very nice and easy to use library developed by a close friend and mentor. This is where a lot of functionality ideas came from I can't recommend it enough.
- [Ramdajs](http://ramdajs.com/) by [Ramda](https://github.com/ramda) a beautiful and feature packed library where the original idea started
