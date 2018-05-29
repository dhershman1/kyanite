import height from '../src/height'
import test from 'tape'

test('Basic functionality', t => {
  t.is(height({ a: 1, b: 2 }), 2)
  t.end()
})

test('Ignores nested objects', t => {
  t.is(height({ a: 1, b: { c: 2 } }), 2)
  t.end()
})
