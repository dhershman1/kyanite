import { test } from 'node:test'
import assert from 'node:assert/strict'
import pickBy from '../../src/object/pickBy.js'

test('pickBy -- Picks the values that pass the predicate', () => {
  const original = { a: 1, b: 2, c: 3, d: 4 }

  assert.deepEqual(pickBy(x => x < 3, original), { a: 1, b: 2 })
  assert.deepEqual(original, { a: 1, b: 2, c: 3, d: 4 }, 'The original is not mutated')
})

test('pickBy -- Passes the key as the second argument', () => {
  assert.deepEqual(pickBy((_, k) => k === 'c', { a: 1, b: 2, c: 3 }), { c: 3 })
})

test('pickBy -- Handles empty results', () => {
  assert.deepEqual(pickBy(() => false, { a: 1 }), {})
  assert.deepEqual(pickBy(() => true, {}), {})
})

test('pickBy -- Is curried', () => {
  const pickNumbers = pickBy(x => typeof x === 'number')

  assert.deepEqual(pickNumbers({ test: '3432', thing: 123 }), { thing: 123 })
})
