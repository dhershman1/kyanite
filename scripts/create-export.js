const fs = require('fs')
const path = require('path')
const globby = require('globby')

const files = globby.sync(['src/**/*.js', '!src/index.js', '!src/common.js', '!src/_internals'])
const buildRes = n =>
  files.map(f => {
    const { dir, base, name } = path.parse(f)

    return `export { default as ${name} } from '${n}/${dir.replace('src/', '')}/${base}'`
  }).join('\n')

// Build Exports
fs.writeFileSync('src/index.js', `${buildRes('.')}\n`)
// fs.writeFileSync('dist/index.mjs', `${buildRes('../src')}\n`)

console.log('Finished Writing Exports...')
