import sort from '../../src/array/sort.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('sort -- Sorts basic array', () => {
  assert.deepEqual(sort((a, b) => a - b, [99, 23, 10, 53, 1]), [1, 10, 23, 53, 99])
})

test('sort -- Is curried', () => {
  const sorter = sort((a, b) => a - b)

  assert.deepEqual(sorter([99, 23, 10, 53, 1]), [1, 10, 23, 53, 99])
})
