import isOdd from '../../src/number/isOdd.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('isOdd -- Checks numbers for odds', () => {
  assert.ok(isOdd(1))
  assert.ok(isOdd(3))
  assert.ok(isOdd(15))
  assert.ok(!isOdd(2))
  assert.ok(!isOdd(4))
  assert.ok(!isOdd(NaN))
  assert.ok(!isOdd('h'))
})

test('isOdd -- Handles decimals and negatives', () => {
  assert.ok(!isOdd(1.5))
  assert.ok(!isOdd(-2.5))
  assert.ok(isOdd(-3))
  assert.ok(!isOdd(-4))
  assert.ok(!isOdd(Infinity))
})
