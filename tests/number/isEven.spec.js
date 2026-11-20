import isEven from '../../src/number/isEven.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('isEven -- Handles checking for even numbers', () => {
  assert.ok(isEven(2))
  assert.ok(isEven(12))
  assert.ok(isEven(4))
  assert.ok(!isEven(1))
  assert.ok(!isEven(-1))
  assert.ok(!isEven(NaN))
  assert.ok(!isEven('h'))
})
