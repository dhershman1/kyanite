import ensureArray from '../../src/array/ensureArray.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('ensureArray -- Basic functionality', () => {
  assert.deepEqual(ensureArray([1]), [1])
  assert.deepEqual(ensureArray(1), [1])
  assert.deepEqual(ensureArray(), [])
  assert.deepEqual(ensureArray(null), [])
  assert.deepEqual(ensureArray('test'), ['test'])
})
