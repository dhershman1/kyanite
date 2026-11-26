import or from '../../src/function/or.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('or -- Returns true when both params are true', () => {
  assert.ok(or(true, true))
})

test('or -- Returns true when one param is false', () => {
  assert.ok(or(true, false))
})

test('or -- Returns false when both params are false', () => {
  assert.ok(!or(false, false))
})

test('or -- gives back a value', () => {
  assert.deepEqual(or(1, 0), 1)
  assert.deepEqual(or('truly', ''), 'truly')
})

test('or -- Is curried true', () => {
  const a = or(true)

  assert.ok(a(true))
  assert.ok(a(false))
})

test('or -- Is curried false', () => {
  const a = or(false)

  assert.deepEqual(a(true), true)
  assert.deepEqual(a(false), false)
})
