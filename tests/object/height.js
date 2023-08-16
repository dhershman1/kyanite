import height from '../../src/object/height.js'
import test from 'tape'

test('height -- Basic functionality', t => {
  t.is(height({ a: 1, b: 2 }), 2)
  t.end()
})

test('height -- Ignores nested objects', t => {
  t.is(height({ a: 1, b: { c: 2 } }), 2)
  t.end()
})
