import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import globby from 'globby'
import path from 'path'
import { uglify } from 'rollup-plugin-uglify'

const buildEntry = () => {
  const plugins = [babel(), uglify()]
  const typesPaths = ['array', 'function', 'number', 'object', 'string']
    .map(p => `./src/${p}/index.js`)
  const paths = globby.sync(['src/**/*.js', '!src/**/index.js', '!src/_internals'])

  return [...paths, ...typesPaths].map(p => {
    const { name, dir } = path.parse(p)

    const convert = {
      array: 'KA',
      function: 'KF',
      number: 'KN',
      object: 'KO',
      string: 'KS'
    }

    return {
      input: path.resolve(__dirname, p),
      plugins: name === 'index' ? [...plugins, filesize()] : plugins,
      output: {
        dir: './',
        file: name === 'index' ? `${dir}.js` : `${name}.js`,
        format: 'umd',
        name: convert[name] || name
      }
    }
  })
}

export default buildEntry()
