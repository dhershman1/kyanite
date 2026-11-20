import filter from '../../src/array/filter.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('filter -- Basic functionality', () => {
  const isEven = n => n % 2 === 0

  assert.deepEqual(filter(isEven, [1, 2, 3, 4]), [2, 4])
})

test('filter -- Returns an empty array if no element matches', () => {
  assert.deepEqual(filter(x => x > 100, [1, 3, 4, 56, 90]), [])
})
