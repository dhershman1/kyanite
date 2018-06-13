const fs = require('fs')
const path = require('path')
const globby = require('globby')
const jsDocParser = require('jsdoc-to-markdown')
const { version } = require('../package.json')

const listFns = () => {
  const files = globby.sync(['src/**/*.js', '!src/index.js', '!src/_internals'])

  return files
    .map(file => {
      const { dir, base } = path.parse(file)

      return `./src/${path.join(dir.replace('src/', ''), base)}`
    })
}

const generateUsage = name => ({
  'commonjs': {
    title: 'CommonJs',
    code: `const ${name} = require('kyanite/${name}')`
  },
  'standard': {
    title: 'Standard',
    code: `import ${name} from 'kyanite/${name}'`
  },
  'cdn': {
    title: 'CDN',
    code: `<script src="https://cdn.jsdelivr.net/npm/kyanite@${version}/${name}.js"></script>`
  },
  'browser': {
    title: 'Browser',
    code: `<script src="path/to/modules/kyanite/${name}.js"></script>`
  }
})

const generateSyntax = (name, args) => {
  if (!args) {
    return ''
  }

  const argsStr = args.map(a => a.optional ? `[${a.name}]` : a.name).join(', ')

  return `${name}(${argsStr})`
}

jsDocParser.getTemplateData({
  'files': listFns(),
  'no-cache': true
}).then((data) => {
  const results = data.map(d => ({
    since: d.since ? d.since : 'Unknown',
    deprecated: d.deprecated || false,
    category: d.category,
    title: d.name,
    desc: d.description,
    examples: d.examples,
    returns: d.returns,
    params: d.params,
    syntax: generateSyntax(d.name, d.params),
    usage: generateUsage(d.name)
  }))

  fs.writeFileSync('docs.js', `module.exports = ${JSON.stringify(results)}`)
})
