import babel from 'rollup-plugin-babel'
import cleanup from 'rollup-plugin-cleanup'
import filesize from 'rollup-plugin-filesize'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: './src/index.js',
    plugins: [
      babel(),
      terser(),
      filesize()
    ],
    output: {
      file: 'dist/kyanite.min.js',
      format: 'umd',
      name: 'kyanite'
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
      name: 'kyanite'
    }
  }
]
