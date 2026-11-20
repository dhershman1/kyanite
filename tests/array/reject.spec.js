import reject from '../../src/array/reject.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

const even = x => x % 2 === 0

test('reject -- Reduces an array to the ones not matching a filter', () => {
  assert.deepEqual(reject(even, [1, 2, 3, 4, 5]), [1, 3, 5])
})

test('reject -- Returns an empty array if no elements passes function test', () => {
  assert.deepEqual(reject(x => x < 100, [1, 90, 99]), [])
})

test('reject -- Returns an empty array when an empty array is passed in', () => {
  assert.deepEqual(reject(even, []), [])
})

test('reject -- Is curried', () => {
  const rejecter = reject(even)

  assert.deepEqual(rejecter([1, 2, 3, 4, 5]), [1, 3, 5])
})
