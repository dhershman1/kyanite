import length from '../../src/list/length.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('length -- Returns the length', () => {
  assert.equal(length([1, 2, 3, 4]), 4)
})

test('length -- Returns zero for empty arrays', () => {
  assert.equal(length([]), 0)
})
