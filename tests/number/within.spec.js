import { test } from 'node:test'
import assert from 'node:assert/strict'
import within from '../../src/number/within.js'

test('within -- Handles within main numbers', () => {
  assert.ok(within(1, 10, 9))
  assert.ok(within(1, 10, 3))
  assert.ok(!within(1, 10, 13))
  assert.ok(!within(1, 10, NaN))
  assert.ok(!within(1, 10, 10))
})

test('within -- Is curried teir 1', () => {
  const b = within(1)

  assert.ok(b(10, 9))
  assert.ok(!b(10, 11))
})

test('within -- Is curried teir 2', () => {
  const b = within(1, 10)

  assert.ok(b(9))
  assert.ok(!b(11))
})
