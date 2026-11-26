import rem from '../../src/number/rem.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('rem -- Handles obtaining remainders', () => {
  assert.equal(rem(5, 12), 2)
  assert.equal(rem(2, -1), -1)
  assert.equal(rem(2, 5.5), 1.5)
  assert.ok(isNaN(rem(2, NaN)))
})

test('rem -- Is curried', () => {
  const r = rem(5)

  assert.equal(r(12), 2)
})
