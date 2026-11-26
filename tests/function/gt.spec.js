import gt from '../../src/function/gt.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('gt -- Determines if the numbers are gt', () => {
  assert.ok(gt(1, 2))
  assert.ok(!gt(7.0, 7.0))
})

test('gt -- Determines if the letters are gt', () => {
  assert.ok(gt('a', 'b'))
  assert.ok(gt('abc', 'abcd'))
})

test('gt -- It is curried', () => {
  const g = gt(1)

  assert.ok(g(2))
})

test('gt -- Compares equal values', () => {
  assert.ok(!gt(1, 1))
})
