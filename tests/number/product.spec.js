import { test } from 'node:test'
import assert from 'node:assert/strict'
import product from '../../src/number/product.js'

test('product -- Combines array', () => {
  assert.deepEqual(product([1, 2, 3]), 6)
  assert.deepEqual(product([2, 3, 0]), 0)
})
