import { test } from 'node:test'
import assert from 'node:assert/strict'
import propOr from '../../src/object/propOr.js'

test('propOr -- Basic functionality', () => {
  assert.deepEqual(propOr('N/A', 'foo', { bar: 1, foo: 2 }), 2)
  assert.deepEqual(propOr('N/A', 'foo', { bar: 1 }), 'N/A')
})

test('propOr -- Handles null objects', () => {
  assert.deepEqual(propOr('N/A', 'foo', null), 'N/A')
})

test('propOr -- Is curried', () => {
  const fn = propOr('N/A')
  const gn = fn('foo')

  assert.deepEqual(fn('bar', { bar: 1 }), 1)
  assert.deepEqual(fn('bar', { foo: 1 }), 'N/A')
  assert.deepEqual(gn({ foo: 1 }), 1)
  assert.deepEqual(gn({ baz: 1 }), 'N/A')
})
