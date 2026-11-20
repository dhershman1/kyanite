import eqBy from '../../src/function/eqBy.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('eqBy -- Compares basic values', () => {
  assert.deepEqual(eqBy(x => x + 1, 1, 1), true)
  assert.deepEqual(eqBy(x => x.length, 'foo', 'bar'), true)
  assert.deepEqual(eqBy(Math.abs, 5, -5), true)
  assert.deepEqual(eqBy(x => x.length, 'foo', 'fo'), false)
  assert.deepEqual(eqBy(Number, 'h', 'h'), true)
})

test('eqBy -- Compares more complex types', () => {
  assert.deepEqual(eqBy(x => x.foo, { foo: 1 }, { foo: 1 }), true)
  assert.deepEqual(eqBy(x => x.foo, { foo: {} }, { foo: {} }), false)
  assert.deepEqual(eqBy(x => x.length, [1], [1]), true)
})

test('eqBy -- Is curried', () => {
  const fn = eqBy(Math.abs)

  assert.deepEqual(fn(5, -5), true)
  assert.deepEqual(fn(5, -3), false)
})
