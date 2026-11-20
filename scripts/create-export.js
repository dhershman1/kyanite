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

// Shared types that should be importable from the package, e.g. `import type { Reduced } from 'kyanite'`
const typeExports = [
  "/** @typedef {import('./_internals/_types.js').Ord} Ord */",
  "/** @typedef {import('./_internals/_types.js').Path} Path */",
  "/** @typedef {import('./_internals/_types.js').Schema} Schema */",
  "/** @typedef {import('./_internals/_types.js').Arity1Fn} Arity1Fn */",
  "/** @typedef {import('./_internals/_types.js').Pred} Pred */",
  "/**\n * @template K, V\n * @typedef {import('./_internals/_types.js').KeyValuePair<K, V>} KeyValuePair\n */",
  "/**\n * @template T\n * @typedef {import('./_internals/_types.js').Reduced<T>} Reduced\n */"
].join('\n')

await fs.writeFile('src/index.js', `${typeExports}\n\n${exportsList}\n`)
console.log('Finished Writing Exports... Wrapping up...')
