import path from '../../src/object/path.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('path -- Returns back value when found', () => {
  const result = path(['a', 'b'], { a: { b: 2 } })

  assert.equal(result, 2, 'Found the value of 2 from the object')
})

test('path -- Safely Navigates bad objects', () => {
  const result = path(['a', 'b', 'c'], { a: 2 })

  assert.ok(!result, 'Returns a falsy value for bad objects')
})

test('path -- Navigates tricky broken objects', () => {
  const result = path(['a', 'b', 'c'], { a: { c: { b: 4 } } })

  assert.ok(!result, 'Correctly did not find the value with the given path')
})

test('path -- Is curried', () => {
  const fn = path(['foo', 'bar'])

  assert.deepEqual(fn({ foo: { bar: 1 } }), 1)
})

test('path -- Returns a null value instead of undefined', () => {
  assert.equal(path(['a', 'b'], { a: { b: null } }), null)
  assert.equal(path(['a'], { a: null }), null)
})

test('path -- Returns undefined when the path goes through null', () => {
  assert.equal(path(['a', 'b'], { a: null }), undefined)
})

test('path -- Returns falsy values', () => {
  assert.equal(path(['a', 'b'], { a: { b: 0 } }), 0)
  assert.equal(path(['a'], { a: false }), false)
})
