import endsWith from '../../src/list/endsWith.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('endsWith -- Basic Usage on lists', () => {
  assert.ok(endsWith('c', 'abc'))
  assert.ok(endsWith(['a'], ['c', 'b', 'a']))
  assert.ok(!endsWith('b', 'abc'))
})

test('endsWith -- Is curried', () => {
  const fn = endsWith('c')

  assert.ok(fn('abc'))
  assert.ok(fn('c'))
  assert.ok(!fn('a'))
})
