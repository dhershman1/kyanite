import between from '../../src/number/between.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('between -- Handles between main numbers', () => {
  assert.ok(between(1, 10, 9))
  assert.ok(between(1, 10, 3))
  assert.ok(!between(1, 10, 13))
  assert.ok(!between(1, 10, NaN))
})

test('between -- Is curried teir 1', () => {
  const b = between(1)

  assert.ok(b(10, 9))
  assert.ok(!b(10, 11))
})

test('between -- Is curried teir 2', () => {
  const b = between(1, 10)

  assert.ok(b(9))
  assert.ok(!b(11))
})
