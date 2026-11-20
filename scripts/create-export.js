import fs from 'node:fs/promises'
import path from 'node:path'

// Every public function lives at src/<category>/<name>.js, src/_internals holds private helpers
const files = (await fs.readdir('src', { recursive: true }))
  .map(f => f.split(path.sep).join('/'))
  .filter(f => f.endsWith('.js') && f.includes('/') && !f.startsWith('_internals/'))
  .sort()

const exportsList = files
  .map(f => `export { default as ${path.posix.parse(f).name} } from './${f}'`)
  .join('\n')

await fs.writeFile('src/index.js', `${exportsList}\n`)
console.log('Finished Writing Exports... Wrapping up...')
