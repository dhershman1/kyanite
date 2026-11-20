import applyN from '../../src/function/applyN.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('applyN -- Basic usage', () => {
  assert.equal(applyN(Math.max, [1, 2, 3, -99, 42, 6, 7]), 42)
  assert.equal(applyN(x => x * 2, [2]), 4)
})

test('applyN -- Is curried', () => {
  const fn = applyN(Math.max)

  assert.equal(fn([1, 2, 3, -99, 42, 6, 7]), 42)
  assert.equal(fn([73, 1, 16, 99, 100]), 100)
})
