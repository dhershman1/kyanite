import lte from '../../src/function/lte.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('lte -- Value is greater than', () => {
  assert.ok(lte(2, 1))
})

test('lte -- Value is equal to', () => {
  assert.ok(lte(2, 2))
})

test('lte -- Value is not greater than or equal to', () => {
  assert.ok(!lte(1, 2))
})

test('lte -- Is curried', () => {
  const g = lte(3)

  assert.ok(g(2))
  assert.ok(g(3))
})
