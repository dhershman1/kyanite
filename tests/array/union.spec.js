import { test } from 'node:test'
import assert from 'node:assert/strict'
import union from '../../src/array/union.js'

test('union -- Combines two arrays together without dupes', () => {
  const result = union([1, 2, 3, 4, 5], [4, 5, 6, 7])

  assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7])
})

test('union -- Handles multiple arrays being sent in', () => {
  const result = union([1, 2, 3, 4, 5], [[4, 5, 6, 7], [6, 7, 8, 9]])

  assert.deepEqual(result, [1, 2, 3, 4, 5, [4, 5, 6, 7], [6, 7, 8, 9]])
})

test('union -- Is curried', () => {
  const un = union([1, 2, 3, 4, 5])

  assert.deepEqual(un([4, 5, 6, 7]), [1, 2, 3, 4, 5, 6, 7])
})
