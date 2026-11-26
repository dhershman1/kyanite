import mean from '../../src/number/mean.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('mean -- Test base functionality', () => {
  const results = mean([1, 2, 3, 2])

  assert.ok(results)
  assert.equal(results, 2)
})

test('mean -- Returns mean of a single value list', () => {
  assert.equal(mean([2]), 2)
})

test('mean -- Returns NaN for empty lists', () => {
  assert.deepEqual(Number.isNaN(mean([])), true)
})
