import babel from 'rollup-plugin-babel'
import cleanup from 'rollup-plugin-cleanup'
import filesize from 'rollup-plugin-filesize'
import { uglify } from 'rollup-plugin-uglify'

const plugins = [
  babel(),
  uglify(),
  filesize()
]

const buildTypes = () => {
  const typeList = ['array', 'function', 'number', 'object', 'string']
  const names = {
    array: 'KA',
    function: 'KF',
    number: 'KN',
    object: 'KO',
    string: 'KS'
  }

  return typeList.map(t => ({
    input: `./src/${t}/index.js`,
    plugins,
    output: {
      file: `./${t}.js`,
      format: 'umd',
      name: names[t]
    }
  }))
}

export default [
  {
    input: './src/index.js',
    plugins,
    output: {
      file: 'dist/kyanite.min.js',
      format: 'umd',
      name: 'K'
    }
  }, {
    input: './src/index.js',
    plugins: [
      babel(),
      cleanup(),
      filesize()
    ],
    output: {
      file: 'dist/kyanite.js',
      format: 'umd',
      name: 'K'
    }
  },
  ...buildTypes()
]
