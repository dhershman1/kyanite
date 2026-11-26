import pow from '../../src/number/pow.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('pow -- Takes a number and brings its value to the exponent', () => {
  assert.equal(pow(3, 7), 343)
  assert.equal(pow(0.5, 4), 2)
})

test('pow -- Converts string and gets power anyway', () => {
  assert.equal(pow(3, '7'), 343)
  assert.equal(pow('0.5', 4), 2)
})

test('pow -- Handles invalid powers', () => {
  assert.ok(isNaN(pow(0.5, -7)))
})

test('pow -- Is curried', () => {
  const p = pow(3)

  assert.equal(p(7), 343)
})
