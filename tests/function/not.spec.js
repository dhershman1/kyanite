import not from '../../src/function/not.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('not -- Test not() functionality', () => {
  assert.ok(!not(true))
  assert.ok(not(false))
  assert.ok(!not(1))
  assert.ok(not(0))
})
