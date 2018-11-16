const fs = require('fs')
const path = require('path')
const globby = require('globby')

const files = globby.sync(['src/**/*.js', '!src/index.js', '!src/common.js', '!src/_internals'])

// Build Exports
fs.writeFileSync('src/index.js', `${files.map(f => {
  const { dir, base, name } = path.parse(f)

  return `export { default as ${name} } from './${dir.replace('src/', '')}/${base}'`
}).join('\n')}\n`)

console.log('Finished Writing Exports...')
