const fs = require('fs')
const path = require('path')
const globby = require('globby')

const listFns = type => {
  const fileList = type
    ? [`src/${type}/*.js`, `!src/${type}/index.js`]
    : ['src/**/*.js', '!src/**/index.js', '!src/_internals']

  return globby.sync(fileList)
    .map(file => {
      const { dir, base, name } = path.parse(file)

      return {
        name,
        fullPath: !type
          ? `./${dir.replace('src/', '')}/${base}`
          : `./${base}`
      }
    })
}

const types = ['array', 'function', 'number', 'object', 'string', '']

types.forEach(v => {
  const propertyRequireLines = listFns(v)
    .map(fn => `export { default as ${fn.name} } from '${fn.fullPath}'`)
  const indexLines = []
    .concat(propertyRequireLines.join('\n'))
    .join('\n')

  fs.writeFileSync(v ? `src/${v}/index.js` : 'src/index.js', `${indexLines}\n`)
})
