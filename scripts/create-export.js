const fs = require('fs')
const path = require('path')
const ignoredFiles = ['_internals', 'esm', 'index.js']

const listFns = () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'src'))

  return files
    .filter(file => (/^[^._]/).test(file) && !ignoredFiles.includes(file))
    .map(file => ({
      name: file.replace('.js', ''),
      path: `./${file}`,
      fullPath: `./src/${file}/index.js`
    }))
}

const generateIndex = () => {
  const propertyRequireLines = listFns()
    .map(fn => `export { default as ${fn.name} } from './${fn.name}'`)

  const indexLines = []
    .concat(propertyRequireLines.join('\n'))
    .join('\n')

  return `${indexLines}\n`
}

fs.writeFileSync('src/index.js', generateIndex())
