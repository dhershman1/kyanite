import { test } from 'node:test'
import assert from 'node:assert/strict'
import fromPairs from '../../src/array/fromPairs.js'

test('Basic Pairing', () => {
  assert.deepEqual(fromPairs([['a', 1], ['b', 2], ['c', 3]]), { a: 1, b: 2, c: 3 })
  assert.deepEqual(fromPairs([]), {}, 'Handles Empty Array')
  assert.deepEqual(fromPairs([[1, 'a'], [2, 'b']]), { 1: 'a', 2: 'b' }, 'Handles number keys')
})

test('Handles complex types', () => {
  assert.deepEqual(fromPairs([['a', { b: 1 }], ['c', { d: 2 }]]), { a: { b: 1 }, c: { d: 2 } })
  assert.deepEqual(fromPairs([['a', [1, 2]], ['b', [3, 4]]]), { a: [1, 2], b: [3, 4] })
})

test('Handles invalid array', () => {
  assert.deepEqual(fromPairs([[]]), {})
  assert.deepEqual(fromPairs([[], []]), {})
})
