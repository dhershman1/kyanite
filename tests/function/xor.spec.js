import { test } from 'node:test'
import assert from 'node:assert/strict'
import xor from '../../src/function/xor.js'

test('xor -- Returns true when both params are true', () => {
  assert.deepEqual(xor(true, true), false, 'Returns false when both params are true')
  assert.deepEqual(xor(false, false), false, 'Returns false when both params are false')
  assert.deepEqual(xor(true, false), true, 'Returns true when the first param is true and the 2nd is false')
  assert.deepEqual(xor(false, true), true, 'Returns true when the first param is false and the 2nd is true')
})

test('xor -- Is curried', () => {
  const a = xor(true)
  const b = xor(false)

  assert.deepEqual(a(true), false, 'Returned false when both params are true')
  assert.deepEqual(a(false), true, 'Returned true when only one param was true')
  assert.deepEqual(b(true), true, 'Returned true when only one param was true')
  assert.deepEqual(b(false), false, 'Returned false when both params are false')
})
