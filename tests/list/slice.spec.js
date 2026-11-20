import slice from '../../src/list/slice.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('slice -- Handles basic lists', () => {
  assert.deepEqual(slice(1, 3, [1, 2, 3, 4, 5]), [2, 3])
})

test('slice -- Is curried', () => {
  const slicer = slice(1, 3)

  assert.deepEqual(slicer([1, 2, 3, 4, 5]), [2, 3])
})
