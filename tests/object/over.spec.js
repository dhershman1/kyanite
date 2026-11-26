import { test } from 'node:test'
import assert from 'node:assert/strict'
import over from '../../src/object/over.js'

test('over -- Basic functionality', () => {
  assert.deepEqual(over('b', x => x + 1, { a: 1, b: 1, c: 3 }), { a: 1, b: 2, c: 3 })
})

test('over -- Is curried', () => {
  const fn = over('b')
  const o = fn(x => x + 1)

  assert.deepEqual(fn(x => x - 1, { a: 1, b: 3 }), { a: 1, b: 2 })
  assert.deepEqual(o({ a: 1, b: 1 }), { a: 1, b: 2 })
})
