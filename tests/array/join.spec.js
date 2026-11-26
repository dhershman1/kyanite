import join from '../../src/array/join.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('join -- Joins an array together', () => {
  const results = join(' ', ['test', 'this', 'thing'])

  assert.deepEqual(results, 'test this thing')
})

test('join -- It is curried', () => {
  const j = join(' ')
  const results = j(['test', 'this', 'thing'])

  assert.deepEqual(results, 'test this thing')
})
