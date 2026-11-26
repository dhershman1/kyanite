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

test('endsWith -- An empty value is at the end of everything', () => {
  assert.ok(endsWith('', 'abc'))
  assert.ok(endsWith([], [1, 2]))
  assert.ok(endsWith([], []))
})

test('endsWith -- Checks every item, and a longer value never matches', () => {
  assert.ok(endsWith([2, 3], [1, 2, 3]))
  assert.ok(!endsWith([1, 3], [1, 2, 3]))
  assert.ok(!endsWith([0, 1, 2, 3], [1, 2, 3]))
  assert.ok(!endsWith('zabc', 'abc'))
})

test('endsWith -- Compares items with SameValueZero', () => {
  const obj = { a: 1 }

  assert.ok(endsWith([NaN], [1, NaN]), 'NaN matches NaN')
  assert.ok(endsWith([obj], [1, obj]), 'The same object matches')
  assert.ok(!endsWith([{ a: 1 }], [1, { a: 1 }]), 'An object that looks the same does not')
})
