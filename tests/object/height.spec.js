import height from '../../src/object/height.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('height -- Basic functionality', () => {
  assert.equal(height({ a: 1, b: 2 }), 2)
})

test('height -- Ignores nested objects', () => {
  assert.equal(height({ a: 1, b: { c: 2 } }), 2)
})
