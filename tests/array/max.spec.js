import max from '../../src/array/max.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('max -- Returns max for numbers', () => {
  assert.equal(max([1, 3, 2, 5, 4]), 5)
})

test('max -- Returns sorted list of double digit numbers', () => {
  assert.equal(max([11, 9, 32, 16, 27]), 32)
})

test('max -- Returns max for string numbers', () => {
  assert.equal(max(['1', '3', '2', '5', '4']), '5')
})

test('max -- Returns max for letter strings', () => {
  assert.equal(max(['c', 'a', 'b', 'f']), 'f')
})

test('max -- Returns the max of a date list', () => {
  const d1 = new Date('2018-01-01')
  const d2 = new Date('2018-02-01')

  assert.equal(max([d1, d2]), d2)
  assert.equal(max([d2, d1]), d2)
})

test('max -- Handles lists of only negative numbers', () => {
  assert.equal(max([-1, -2]), -1)
  assert.equal(max([-5]), -5)
})

test('max -- Returns undefined for an empty list', () => {
  assert.equal(max([]), undefined)
})
