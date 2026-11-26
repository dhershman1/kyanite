import flip from '../../src/function/flip.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('flip -- Basic functionlity', () => {
  assert.deepEqual(flip((a, b) => b > a, 2, 1), true)
  assert.deepEqual(flip((a, b) => b > a, 1, 2), false)
})

test('flip -- Is curried', () => {
  const _gt = flip((a, b) => b > a)

  assert.deepEqual(_gt(1, 2), false)
  assert.deepEqual(_gt(2, 1), true)
})
