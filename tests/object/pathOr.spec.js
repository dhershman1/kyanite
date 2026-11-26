import { test } from 'node:test'
import assert from 'node:assert/strict'
import pathOr from '../../src/object/pathOr.js'

test('pathOr -- Handles basic functionality', () => {
  assert.deepEqual(pathOr('N/A', ['a', 'b'], { a: { b: 1 } }), 1)
  assert.deepEqual(pathOr('N/A', ['c', 'b'], { a: { b: 1 } }), 'N/A')
})

test('pathOr -- Handles null/undefined', () => {
  assert.deepEqual(pathOr('N/A', ['foo'], null), 'N/A')
  assert.deepEqual(pathOr('N/A', ['foo'], undefined), 'N/A')
})

test('pathOr -- Its curried', () => {
  const fn = pathOr('N/A')
  const withKeys = fn(['a', 'b'])

  assert.deepEqual(fn(['c', 'd'], { c: { d: 2 } }), 2)
  assert.deepEqual(withKeys({ a: { b: 1 } }), 1)
  assert.deepEqual(fn(['c', 'd'], { d: { c: 1 } }), 'N/A')
  assert.deepEqual(withKeys({ b: { a: 1 } }), 'N/A')
})
