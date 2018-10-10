const fs = require('fs')
const globby = require('globby')
const jsDocParser = require('jsdoc-to-markdown')
const { name, version, description } = require('../package.json')

const generateUsage = fnName => ({
  'commonjs': {
    title: 'CommonJs',
    code: `const { ${fnName} } = require('kyanite')`
  },
  'standard': {
    title: 'Standard',
    code: `import { ${fnName} } from 'kyanite'`
  },
  'cdn': {
    title: 'CDN',
    code: `<script src="https://cdn.jsdelivr.net/npm/kyanite@${version}/dist/kyanite.min.js"></script>
    <script>
      kyanite.${fnName}
    </script>`
  },
  'browser': {
    title: 'Browser',
    code: `<script src="path/to/modules/kyanite/dist/kyanite.min.js"></script>
    <script>
      kyanite.${fnName}
    </script>`
  }
})

const generateSyntax = (fnName, args) => {
  if (!args) {
    return ''
  }

  const argsStr = args.map(a => a.optional ? `[${a.name}]` : a.name).join(', ')

  return `${fnName}(${argsStr})`
}

const files = globby.sync(['src/**/*.js', '!src/index.js', '!src/_internals'])

fs.writeFileSync('info.json', JSON.stringify({
  name,
  version,
  description,
  docs: jsDocParser.getTemplateDataSync({ files }).map(d => ({
      since: d.since ? d.since : 'Unknown',
      deprecated: d.deprecated || false,
      category: d.category || 'Uncategorized',
      title: d.name,
      desc: d.description,
      examples: d.examples,
      returns: d.returns,
      params: d.params,
      syntax: generateSyntax(d.name, d.params),
      usage: generateUsage(d.name)
    }))
  }))

console.log('Finished Writing Docs...')
