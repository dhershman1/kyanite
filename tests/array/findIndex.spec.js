import findIndex from '../../src/array/findIndex.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('findIndex -- Returns the index number of the given value', () => {
  assert.deepEqual(findIndex(x => x > 5, [1, 3, 4, 5, 6]), 4)
})

test('findIndex -- Returns the index number of the First value which passes', () => {
  assert.deepEqual(findIndex(x => x > 5, [1, 3, 4, 5, 6, 7]), 4)
})

test('findIndex -- Gives back -1 if no value matches', () => {
  assert.deepEqual(findIndex(x => x < 0, [1, 3, 4, 5, 6]), -1)
})

test('findIndex -- It is curried', () => {
  const f = findIndex(x => x > 5)

  assert.deepEqual(f([1, 2, 3, 4, 5, 6]), 5)
})
