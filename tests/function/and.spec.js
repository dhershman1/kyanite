import and from '../../src/function/and.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('and -- Returns true when both params are true', () => {
  assert.ok(and(true, true))
})

test('and -- Returns false when one param is false', () => {
  assert.ok(!and(true, false))
})

test('and -- Returns false when both params are false', () => {
  assert.ok(!and(false, false))
})

test('and -- Is curried', () => {
  const a = and(true)

  assert.deepEqual(a(true), true)
  assert.deepEqual(a(false), false)
})
