import { test } from 'node:test'
import assert from 'node:assert/strict'
import count from '../../src/function/count.js'

test('count -- Counts Array', () => {
  assert.deepEqual(count([1, 2, 3]), 3)
  assert.deepEqual(count([1]), 1)
  assert.deepEqual(count([]), 0)
})

test('count -- Counts Objects', () => {
  assert.deepEqual(count({ a: 1, b: 2, c: 3 }), 3)
  assert.deepEqual(count({ a: 1 }), 1)
  assert.deepEqual(count({}), 0)
})

test('count -- Counts Strings', () => {
  assert.deepEqual(count('coolkid'), 7)
  assert.deepEqual(count('quick brown fox'), 15)
  assert.deepEqual(count(''), 0)
})

test('count -- Counts Maps', () => {
  assert.deepEqual(count(new Map([['a', 1], ['b', 2], ['c', 3]])), 3)
  assert.deepEqual(count(new Map([['a', 1]])), 1)
  assert.deepEqual(count(new Map()), 0)
})

test('count -- Counts Sets', () => {
  assert.deepEqual(count(new Set([1, 2, 3])), 3)
  assert.deepEqual(count(new Set([1])), 1)
  assert.deepEqual(count(new Set()), 0)
})

test('count -- Throws on unsupported types', () => {
  assert.throws(() => count(9), { name: 'TypeError', message: 'Unsupported type: Number' })
  assert.throws(() => count(new Date()), { name: 'TypeError', message: 'Unsupported type: Date' })
  assert.throws(() => count(/a/), { name: 'TypeError', message: 'Unsupported type: RegExp' })
})
