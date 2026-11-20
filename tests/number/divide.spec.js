import divide from '../../src/number/divide.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('divide -- Divides the numbers', () => {
  assert.equal(divide(5, 5), 1)
})

test('divide -- Converts string and multiplies anyway', () => {
  assert.equal(divide('2', 1), 0.5)
})

test('divide -- Converts number to negative if a passed value is negative', () => {
  assert.equal(divide(-1, 3), -3)
})

test('divide -- Is curried', () => {
  const d = divide(3)
  const d2 = divide('5')

  assert.equal(d(15), 5)
  assert.equal(d2(15), 3)
})
