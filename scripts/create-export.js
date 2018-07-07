const fs = require('fs')
const path = require('path')
const globby = require('globby')

const listFns = () => {
  const files = globby.sync(['src/**/*.js', '!src/index.js', '!src/_internals'])

  return files
    .map(file => {
      const { dir, base, name } = path.parse(file)

      return {
        name,
        fullPath: `./${dir.replace('src/', '')}/${base}`
      }
    })
}

const generateIndex = () => {
  const propertyRequireLines = listFns()
    .map(fn => `export { default as ${fn.name} } from '${fn.fullPath}'`)

  const indexLines = []
    .concat(propertyRequireLines.join('\n'))
    .join('\n')

  return `${indexLines}\n`
}

fs.writeFileSync('src/index.js', generateIndex())
