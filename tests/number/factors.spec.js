import factors from '../../src/number/factors.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('factors -- Find the factors of the provided numbers', () => {
  assert.deepEqual(factors(36), [1, 2, 3, 4, 6, 9, 12, 18, 36])
  assert.deepEqual(factors(102), [1, 2, 3, 6, 17, 34, 51, 102])
  assert.deepEqual(factors(5), [1, 5])
  assert.deepEqual(factors(900), [1, 2, 3, 4, 5, 6, 9, 10, 12, 15, 18, 20, 25, 30, 36, 45, 50, 60, 75, 90, 100, 150, 180, 225, 300, 450, 900])
})

test('factors -- Handles invalid data', () => {
  assert.deepEqual(factors(0), [], 'Empty array for zero')
  assert.deepEqual(factors(), [], 'Empty array for undefined')
  assert.deepEqual(factors(NaN), [], 'Empty array for NaN')
})
