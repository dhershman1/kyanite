import babel from 'rollup-plugin-babel'
import cleanup from 'rollup-plugin-cleanup'
import filesize from 'rollup-plugin-filesize'
import { uglify } from 'rollup-plugin-uglify'

export default [{
  input: './src/index.js',
  plugins: [
    babel(),
    uglify(),
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
}]
