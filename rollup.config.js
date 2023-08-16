import babel from '@rollup/plugin-babel'
import filesize from 'rollup-plugin-filesize'
import terser from '@rollup/plugin-terser'

export default [
  {
    input: './src/index.js',
    plugins: [
      babel({ babelHelpers: 'bundled', presets: [['@babel/preset-env', { targets: { ie: '11' } }]] }),
      terser(),
      filesize({
        showMinifiedSize: false
      })
    ],
    output: {
      file: 'dist/kyanite.min.js',
      format: 'es',
      name: 'K'
    }
  }, {
    input: './src/index.js',
    plugins: [
      babel({ babelHelpers: 'bundled', presets: [['@babel/preset-env', { targets: { ie: '11' } }]] }),
      terser(),
      filesize({
        showMinifiedSize: false
      })
    ],
    output: {
      file: 'dist/kyanite.min.cjs',
      format: 'cjs',
      name: 'K'
    }
  },
  {
    input: './src/index.js',
    plugins: [
      babel({ babelHelpers: 'bundled', presets: [['@babel/preset-env', { targets: { ie: '11' } }]] }),
      terser(),
      filesize({
        showMinifiedSize: false
      })
    ],
    output: {
      file: 'dist/kyanite.iife.min.js',
      format: 'iife',
      name: 'K'
    }
  }
]
