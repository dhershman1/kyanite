import lcm from '../../src/number/lcm.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('lcm -- Gets the lcm of two numbers', () => {
  assert.equal(lcm(90, 70), 630)
})

test('lcm -- Is curried', () => {
  const x = lcm(90)

  assert.equal(x(4), 180)
})
