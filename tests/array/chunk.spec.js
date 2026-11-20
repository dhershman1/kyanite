import { test } from 'node:test'
import assert from 'node:assert/strict'
import chunk from '../../src/array/chunk.js'

test('chunk -- Basics', () => {
  assert.deepEqual(chunk(2, [1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
  assert.deepEqual(chunk(2, [1, 2, 3, 4, 5, 6]), [[1, 2], [3, 4], [5, 6]])
})

test('chunk -- Is curried', () => {
  const fn = chunk(2)

  assert.deepEqual(fn([1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
  assert.deepEqual(fn([1, 2, 3, 4, 5, 6]), [[1, 2], [3, 4], [5, 6]])
})

test('chunk -- Handles same length arrays', () => {
  const fn = chunk(3)
  assert.deepEqual(fn([1, 2, 3]), [[1, 2, 3]])
})
