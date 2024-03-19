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
<br />
<p align=center>
  <a href="https://github.com/standard/standard">
    <img alt="Standard JS" src="https://cdn.rawgit.com/standard/standard/master/badge.svg">
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

> **Note:** As of `v2.0.0` the module should be imported as just `K` instead of `kyanite`
> The unminified version of the library is no longer available as of 2.0.0

With a CDN

```html
<!-- It is recommended to replace the @latest with a strict version number for production -->
<script src="https://cdn.jsdelivr.net/npm/kyanite@latest/dist/kyanite.iife.min.js"></script>

<script>
  K.isEmpty({})
</script>
```

Or installing with `npm i kyanite` and then:

Standard module system

```js
// This will use the module path in the package.json (src/index.js)
import * as K from 'kyanite'
```

Common JS

```js
// For the prod minified version
const K = require('kyanite')
```

## Testing

Kyanite follows the [tap](http://testanything.org/) setup using the [tape](https://github.com/substack/tape) testing suite.

To run the tests:

- `git clone` the repo
- `cd` into the repo folder
- Run `npm i`
- Run `npm t`

## Credit

A lot of the if not most of the inspiration for this library came from 2 libraries I follow closely, Primarily most of it stems from:

- [foreword](https://github.com/abstract-tools/foreword) by [Abstract Tools](https://github.com/abstract-tools) which is a very nice and easy to use library developed by a close friend and mentor. This is where a lot of functionality ideas came from I can't recommend it enough.
- [Ramdajs](http://ramdajs.com/) by [Ramda](https://github.com/ramda) a beautiful and feature packed library where the original idea started
