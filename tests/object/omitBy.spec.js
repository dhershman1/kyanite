import { test } from 'node:test'
import assert from 'node:assert/strict'
import omitBy from '../../src/object/omitBy.js'

test('omitBy -- Omits the values that pass the predicate', () => {
  const original = { a: 1, b: 2, c: 3, d: 4 }

  assert.deepEqual(omitBy(x => x < 3, original), { c: 3, d: 4 })
  assert.deepEqual(original, { a: 1, b: 2, c: 3, d: 4 }, 'The original is not mutated')
})

test('omitBy -- Passes the key as the second argument', () => {
  assert.deepEqual(omitBy((_, k) => k === 'c', { a: 1, b: 2, c: 3 }), { a: 1, b: 2 })
})

test('omitBy -- Handles empty results', () => {
  assert.deepEqual(omitBy(() => true, { a: 1 }), {})
  assert.deepEqual(omitBy(() => false, {}), {})
})

test('omitBy -- Is curried', () => {
  const omitStrings = omitBy(x => typeof x === 'string')

  assert.deepEqual(omitStrings({ test: '3432', thing: 123 }), { thing: 123 })
})
