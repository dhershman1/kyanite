import { test } from 'node:test'
import assert from 'node:assert/strict'
import sum from '../../src/number/sum.js'

test('sum -- Adds array of numbers', () => {
  assert.deepEqual(sum([1, 2, 3]), 6)
  assert.deepEqual(sum([1, 2, -3]), 0)
})

test('sum -- Technically works with strings', () => {
  assert.deepEqual(sum(['a', 'b', 'c']), 'cba0')
})
