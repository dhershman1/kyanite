import startsWith from '../../src/list/startsWith.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('startsWith -- Basic Usage on lists', () => {
  assert.ok(startsWith('c', 'cab'))
  assert.ok(startsWith(['a'], ['a', 'b', 'c']))
  assert.ok(!startsWith('b', 'abc'))
})

test('startsWith -- Is curried', () => {
  const fn = startsWith('c')

  assert.ok(fn('cab'))
  assert.ok(fn('c'))
  assert.ok(!fn('a'))
})
