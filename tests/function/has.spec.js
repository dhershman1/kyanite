import { test } from 'node:test'
import assert from 'node:assert/strict'
import has from '../../src/function/has.js'

test('has -- Basic functionality', () => {
  assert.deepEqual(has('foo', { foo: 1 }), true, 'Object has key provided')
  assert.deepEqual(has('foo', ['bar', 'foo', 'baz']), true, 'Array has value provided')
  assert.deepEqual(has('foo', 'barfoobaz'), true, 'String contains key provided')
  assert.deepEqual(has('foo', new Map([['foo', 1], ['bar', 2]])), true, 'foo exsists in the map')
  assert.deepEqual(has('foo', new Set(['bar', 'foo', 'baz'])), true, 'foo is inside the Set')
})

test('has -- False returned when data not found', () => {
  assert.deepEqual(has('test', { foo: 1 }), false, 'Object does not have the key provided')
  assert.deepEqual(has('test', ['bar', 'foo', 'baz']), false, 'Array does not have the value provided')
  assert.deepEqual(has('test', 'barfoobaz'), false, 'String does not contain the key provided')
  assert.deepEqual(has('test', new Map([['foo', 1], ['bar', 2]])), false, 'Map does not have the key')
  assert.deepEqual(has('test', new Set(['bar', 'foo', 'baz'])), false, 'Key does not exist in Set')
})

test('has -- Is curried', () => {
  const fn = has('foo')

  assert.deepEqual(fn({ foo: 1 }), true)
  assert.deepEqual(fn(new Map([['foo', 1]])), true)
  assert.deepEqual(fn(['bar']), false)
})

test('has -- Throws error for bad type (Number)', () => {
  try {
    has('foo', 1)
  } catch (e) {
    assert.deepEqual(e.message, 'Unsupported type: Number')
  }
})

test('has -- Throws error for bad type (RegExp)', () => {
  try {
    has('foo', /[A-Z]/)
  } catch (e) {
    assert.deepEqual(e.message, 'Unsupported type: RegExp')
  }
})
