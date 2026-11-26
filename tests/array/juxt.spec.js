import juxt from '../../src/array/juxt.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('juxt -- Test basic functionality', () => {
  const res = juxt([Math.min, Math.max], [3, 4, 9, -3])

  assert.deepEqual(res, [-3, 9])
})

test('juxt -- Works with a single function and a single value', () => {
  assert.deepEqual(juxt([x => x + 2], [3]), [5])
})

test('juxt -- Works with a function and multiple values', () => {
  assert.deepEqual(juxt([(x, y) => x + y], [2, 3]), [5])
})

test('juxt -- Works with multiple functions', () => {
  const testy = () => 5
  const thing = () => 8

  assert.deepEqual(juxt([testy, thing], []), [5, 8])
})

test('juxt -- Works with multiple functions and a single value', () => {
  const add = x => x + 2
  const multiply = x => x * 2

  assert.deepEqual(juxt([add, multiply], [2]), [4, 4])
})

test('juxt -- Its curried', () => {
  const add = (x, y) => x + y
  const multiply = (x, y) => x * y

  assert.deepEqual(juxt([add, multiply])([2, 3]), [5, 6])
})
