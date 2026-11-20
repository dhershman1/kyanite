import { test } from 'node:test'
import assert from 'node:assert/strict'
import notEq from '../../src/function/notEq.js'

test('notEq -- Basics', () => {
  assert.deepEqual(notEq(1, 2), true)
  assert.deepEqual(notEq('test', 'Test'), true)
  assert.deepEqual(notEq(NaN, NaN), false)
  assert.deepEqual(notEq(1, 1), false)
})

test('notEq -- Is curried', () => {
  const fn = notEq('1')

  assert.deepEqual(fn(1), true)
  assert.deepEqual(fn(NaN), true)
  assert.deepEqual(fn('1'), false)
})
