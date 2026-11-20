import isNil from '../../src/function/isNil.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('isNil -- Basic functionality', () => {
  assert.ok(isNil(null), 'null results returned true')
})

test('isNil -- Returns true for undefined', () => {
  assert.ok(isNil(undefined))
})

test('isNil -- Returns false for actual values', () => {
  assert.ok(!isNil([]))
})
