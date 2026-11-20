import { test } from 'node:test'
import assert from 'node:assert/strict'
import fn from '../../src/string/test.js'

test('test -- Basic functionality works', () => {
  assert.deepEqual(fn(/^a/, 'abc'), true)
  assert.deepEqual(fn(/^b/, 'abc'), false)
})

test('test -- Is curried', () => {
  const f = fn(/^a/)

  assert.deepEqual(f('abc'), true)
  assert.deepEqual(f('bca'), false)
})
