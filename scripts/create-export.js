const fs = require('fs')
const path = require('path')
const globby = require('globby')

globby(['src/**/*.js', '!src/index.js', '!src/_internals'])
  .then(files =>
    files.map(f => {
      const { dir, base, name } = path.parse(f)

      return `export { default as ${name} } from './${dir.replace('src/', '')}/${base}'`
    }).sort())
  .then(list => fs.writeFile('src/index.js', `${list.join('\n')}\n`, err => {
    if (err) {
      throw err
    }

    console.log('Finished Writing index.js...')
  }))
  .catch(err => {
    throw err
  })
