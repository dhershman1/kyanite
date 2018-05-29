const path = require('path')
const fs = require('fs')
const del = require('del')

const fileList = fs.readdirSync(path.join(__dirname, '..'))

const ignoredFiles = [
  'docs',
  'rollup.config',
  'rollup.split'
]
const results = fileList.filter(f => {
  const { ext, name } = path.parse(f)

  if (ignoredFiles.indexOf(name) === -1 && ext === '.js') {
    console.log(`Removing: ${name}`)

    return true
  }

  return false
})

if (!results.length) {
  console.log('Nothing to remove...')
} else {
  del(results).then(() => {
    console.info('Finished Cleaning Up')
  })
}
