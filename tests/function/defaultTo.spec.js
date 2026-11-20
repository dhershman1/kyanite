import { test } from 'node:test'
import assert from 'node:assert/strict'
import defaultTo from '../../src/function/defaultTo.js'

test('defaultTo -- Basic functionality', () => {
  assert.deepEqual(defaultTo('foo', null), 'foo')
  assert.deepEqual(defaultTo('foo', NaN), 'foo')
  assert.deepEqual(defaultTo('foo', 'bar'), 'bar')
  assert.deepEqual(defaultTo('foo', undefined), 'foo')
})

test('defaultTo -- Is curried', () => {
  const fn = defaultTo('foo')

  assert.deepEqual(fn(null), 'foo')
  assert.deepEqual(fn(NaN), 'foo')
  assert.deepEqual(fn(undefined), 'foo')
  assert.deepEqual(fn('bar'), 'bar')
})
