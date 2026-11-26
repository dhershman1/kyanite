import gte from '../../src/function/gte.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('gte -- Value is greater than', () => {
  assert.ok(gte(1, 2))
  assert.ok(gte(2, 2))
  assert.ok(!gte('xyz', 'abc'))
  assert.ok(gte('abc', 'abcd'))
})

test('gte -- Value is not greater than or equal to', () => {
  assert.ok(!gte(2, 1))
})

test('gte -- Is curried', () => {
  const g = gte(1)

  assert.ok(g(1))
  assert.ok(g(2))
})
