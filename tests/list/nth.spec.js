import nth from '../../src/list/nth.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('nth -- Test base functionality', () => {
  const list = ['foo', 'bar', 'baz', 'quux']

  assert.equal(nth(1, list), 'bar')
  assert.equal(nth(-1, list), 'quux')
  assert.ok(!nth(-99, list))
})

test('nth -- Test string functionality', () => {
  assert.equal(nth(1, 'abc'), 'b')
  assert.equal(nth(3, 'abc'), undefined)
  assert.equal(nth(0, 'abc'), 'a')
})

test('nth -- Test curried nth', () => {
  const third = nth(2)

  assert.equal(third([1, 2, 3, 4]), 3)
  assert.equal(third('abcd'), 'c')
})
