import { test } from 'node:test'
import assert from 'node:assert/strict'
import median from '../../src/number/median.js'

test('median -- Gets the median of a number array', () => {
  assert.deepEqual(median([2, 9, 7]), 7)
  assert.deepEqual(median([7, 2, 10, 9]), 8)
  assert.deepEqual(median([3, 13, 7, 5, 21, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29]), 23)
  assert.deepEqual(median([3, 13, 7, 5, 21, 23, 23, 40, 23, 14, 12, 56, 23, 29]), 22)
  assert.deepEqual(Number.isNaN(median([])), true)
})
