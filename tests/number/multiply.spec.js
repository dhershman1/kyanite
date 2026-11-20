import mul from '../../src/number/multiply.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('mul -- Multiplies numbers', () => {
  assert.equal(mul(5, 5), 25)
})

test('mul -- Converts string and multiplies anyway', () => {
  assert.equal(mul(1, '2'), 2)
})

test('mul -- Converts number to negative if a passed value is negative', () => {
  assert.equal(mul(3, -1), -3)
})

test('mul -- Is curried', () => {
  const multiply = mul(5)

  assert.equal(multiply(3), 15)
  assert.equal(multiply('4'), 20)
})
