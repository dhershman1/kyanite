import gcd from '../../src/number/gcd.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('gcd -- Returns the gcd of two numbers', () => {
  assert.equal(gcd(80, 90), 10)
})

test('gcd -- Is curried', () => {
  const x = gcd(80)

  assert.equal(x(90), 10)
})
