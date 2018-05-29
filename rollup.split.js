import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import globby from 'globby'
import path from 'path'
import { uglify } from 'rollup-plugin-uglify'

const buildEntry = () => {
  const results = []
  const paths = globby.sync(['src/*.js', '!src/index.js', '!src/_internals'])

  paths.forEach(p => {
    const { name, dir } = path.parse(p)
    let [, moduleName] = dir.split('/')

    if (name !== 'index') {
      moduleName = name
    }

    const config = {
      input: path.resolve(__dirname, p),
      plugins: [
        babel(),
        uglify(),
        filesize()
      ],
      output: {
        dir,
        file: `${moduleName}.js`,
        format: 'umd',
        name: moduleName
      }
    }

    results.push(config)

    return true
  })

  return results
}

export default buildEntry()
