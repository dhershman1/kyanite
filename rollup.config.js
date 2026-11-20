import { gzipSync } from 'node:zlib'
import terser from '@rollup/plugin-terser'

/**
 * Tiny replacement for rollup-plugin-filesize: logs the minified and gzipped size of each bundle
 * @returns {import('rollup').Plugin}
 */
function filesize () {
  return {
    name: 'filesize',
    writeBundle (options, bundle) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type !== 'chunk') continue

        const size = (n) => `${(n / 1024).toFixed(2)} KB`

        console.log(`${options.file}: ${size(Buffer.byteLength(chunk.code))} (gzip: ${size(gzipSync(chunk.code).length)})`)
      }
    }
  }
}

export default {
  input: './src/index.js',
  plugins: [terser(), filesize()],
  output: [
    { file: 'dist/kyanite.min.js', format: 'es' },
    { file: 'dist/kyanite.min.cjs', format: 'cjs' },
    { file: 'dist/kyanite.iife.min.js', format: 'iife', name: 'K' }
  ]
}
