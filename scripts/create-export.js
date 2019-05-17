const fs = require('fs')
const path = require('path')
const globby = require('globby')

const files = globby.sync(['src/**/*.js', '!src/index.js', '!src/common.js', '!src/_internals'])
const buildRes = type =>
  files.map(f => {
    const { dir, base, name } = path.parse(f)
    const src = `./${dir.replace('src/', '')}/${base}`

    if (type === 'standard') {
      return `export { default as ${name} } from '${src}'`
    }

    return `  ${name}: require('${src}'),`
  }).join('\n')

// Build Exports
// fs.writeFileSync('src/index.js', `module.exports = {\n${buildRes('cjs')}\n}`)
fs.writeFile('src/index.js', `${buildRes('standard')}\n`, err => {
  if (err) {
    throw err
  }

  console.log('Finished Writing Exports...')
})
