import { test } from 'node:test'
import assert from 'node:assert/strict'
import fold from '../../src/array/fold.js'

test('fold -- Basic functionality', () => {
  const results = fold((a, acc) => a <= acc ? a : acc, [5, 6, 3, 9, 1])

  assert.deepEqual(results, 1)
  assert.deepEqual(fold((a, acc) => a + acc, [1, 2, 3, 4, 5]), 15)
})

test('fold -- Is curried', () => {
  const fn = fold((a, acc) => a <= acc ? a : acc)

  assert.deepEqual(fn([5, 4, 19, 20, 32, 1]), 1)
  assert.deepEqual(fn(['z', 'x', 'd', 'p']), 'd')
})
