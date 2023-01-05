import babel from '@rollup/plugin-babel'
import cleanup from 'rollup-plugin-cleanup'
import filesize from 'rollup-plugin-filesize'
import terser from '@rollup/plugin-terser'

export default [
  {
    input: './src/index.js',
    plugins: [
      babel({ babelHelpers: 'bundled' }),
      terser(),
      filesize({
        showMinifiedSize: false
      })
    ],
    output: {
      file: 'dist/kyanite.min.js',
      format: 'umd',
      name: 'kyanite',
      exports: 'named'
    }
  }, {
    input: './src/index.js',
    plugins: [
      babel({ babelHelpers: 'bundled' }),
      cleanup(),
      filesize({
        showMinifiedSize: false
      })
    ],
    output: {
      file: 'dist/kyanite.js',
      format: 'umd',
      name: 'kyanite',
      exports: 'named'
    }
  }
]
