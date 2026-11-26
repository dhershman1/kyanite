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

test('startsWith -- An empty value is at the start of everything', () => {
  assert.ok(startsWith('', 'abc'))
  assert.ok(startsWith([], [1, 2]))
  assert.ok(startsWith([], []))
})

test('startsWith -- Checks every item, and a longer value never matches', () => {
  assert.ok(startsWith([1, 2], [1, 2, 3]))
  assert.ok(!startsWith([1, 3], [1, 2, 3]))
  assert.ok(!startsWith([1, 2, 3, 4], [1, 2, 3]))
  assert.ok(!startsWith('abcd', 'abc'))
})

test('startsWith -- Compares items with SameValueZero', () => {
  const obj = { a: 1 }

  assert.ok(startsWith([NaN], [NaN, 1]), 'NaN matches NaN')
  assert.ok(startsWith([0], [-0]), '0 matches -0')
  assert.ok(startsWith([obj], [obj, 2]), 'The same object matches')
  assert.ok(!startsWith([{ a: 1 }], [{ a: 1 }, 2]), 'An object that looks the same does not')
  assert.ok(!startsWith(['1'], [1]))
})
