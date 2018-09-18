import babel from 'rollup-plugin-babel'
import globby from 'globby'
import path from 'path'
import { uglify } from 'rollup-plugin-uglify'

const buildEntry = () => {
  const results = []
  const paths = globby.sync(['src/**/*.js', '!src/**/index.js', '!src/_internals'])

  paths.forEach(p => {
    const { name } = path.parse(p)

    const config = {
      input: path.resolve(__dirname, p),
      plugins: [
        babel(),
        uglify()
      ],
      output: {
        dir: './',
        file: `${name}.js`,
        format: 'umd',
        name: name
      }
    }

    results.push(config)

    return true
  })

  return results
}

export default buildEntry()
