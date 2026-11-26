import prop from '../../src/object/prop.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('prop -- Returns the desired property value', () => {
  assert.equal(prop('thing', { thing: 'test' }), 'test')
})

test('prop -- Is curried', () => {
  const proper = prop('a')

  assert.equal(proper({ a: 1 }), 1)
})

test('prop -- Use it as a function for mapping', () => {
  assert.deepEqual([{ a: 1 }, { a: 2 }, { a: 3 }].map(prop('a')), [1, 2, 3])
})

test('prop -- Returns undefined for empty value', () => {
  assert.equal(prop('x', {}), undefined)
})

test('prop -- Returns null when object does not exist', () => {
  assert.equal(prop('x', null), undefined)
})
