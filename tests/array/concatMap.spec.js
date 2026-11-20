import concatMap from '../../src/array/concatMap.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('concatMap -- Apples function to values and merges arrays', () => {
  const result = concatMap(x => [x, x], [1, 2, 3])

  assert.deepEqual(result, [1, 1, 2, 2, 3, 3])
})

test('concatMap -- Shrinks the array', () => {
  const results = concatMap(x => x, [[1, 2], [3, 4], [5, 6]])

  assert.deepEqual(results, [1, 2, 3, 4, 5, 6])
})

test('concatMap -- Is properly curried', () => {
  const con = concatMap(x => [x, x])

  assert.deepEqual(con([1, 2, 3]), [1, 1, 2, 2, 3, 3])
})
