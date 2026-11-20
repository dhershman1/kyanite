import { gzipSync } from 'node:zlib'
import terser from '@rollup/plugin-terser'
import { dts } from 'rollup-plugin-dts'

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

// Also declares the global `K` for the IIFE build loaded with a script tag
const typesFooter = 'export as namespace K'

export default [{
  input: './src/index.js',
  plugins: [terser(), filesize()],
  output: [
    { file: 'dist/kyanite.min.js', format: 'es' },
    { file: 'dist/kyanite.min.cjs', format: 'cjs' },
    { file: 'dist/kyanite.iife.min.js', format: 'iife', name: 'K' }
  ]
}, {
  // Bundles the declarations tsc generates from our JSDoc (see tsconfig.json) into one file per module format
  input: './.types/index.d.ts',
  plugins: [dts()],
  output: [
    { file: 'dist/kyanite.d.ts', format: 'es', footer: typesFooter },
    { file: 'dist/kyanite.d.cts', format: 'es', footer: typesFooter }
  ]
}]
