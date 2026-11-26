import min from '../../src/array/min.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('min -- Returns min for numbers', () => {
  assert.equal(min([1, 3, 2, 5, 4]), 1)
})

test('min -- Returns sorted list of double digit numbers', () => {
  assert.equal(min([11, 9, 32, 16, 27]), 9)
})

test('min -- Returns min for string numbers', () => {
  assert.equal(min(['1', '3', '2', '5', '4']), '1')
})

test('min -- Returns min for letter strings', () => {
  assert.equal(min(['c', 'a', 'b', 'f']), 'a')
})

test('min -- Returns the min of a date list', () => {
  const d1 = new Date('2018-01-01')
  const d2 = new Date('2018-02-01')

  assert.equal(min([d1, d2]), d1)
  assert.equal(min([d2, d1]), d1)
})

test('min -- Returns undefined for an empty list', () => {
  assert.equal(min([]), undefined)
})

test('min -- Handles a single value', () => {
  assert.equal(min([7]), 7)
})

test('min -- Works with any iterable', () => {
  assert.equal(min(new Set([3, 1, 2])), 1)
  assert.equal(min(new Set()), undefined)
  assert.equal(min('cab'), 'a')
})

test('min -- Handles negative numbers', () => {
  assert.equal(min([-1, -2]), -2)
})
