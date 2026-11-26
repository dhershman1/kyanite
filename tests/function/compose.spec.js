import compose from '../../src/function/compose.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('compose -- Handles basic data', () => {
  assert.deepEqual(compose(Math.sqrt, x => x + 1, 99), 10)
  assert.deepEqual(compose(Math.sqrt, x => x + 1, 399), 20)
})

test('compose -- Is curried', () => {
  const comp = compose(Math.sqrt, x => x + 1)

  assert.deepEqual(comp(99), 10)
  assert.deepEqual(comp(399), 20)
  assert.deepEqual(comp(143), 12)
})
