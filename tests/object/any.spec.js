import any from '../../src/object/any.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

const result = any({
  x: v => v > 10,
  y: v => v < 25
})

test('any -- returns true for passing objects with all passing props', () => {
  assert.ok(result({ x: 11, y: 20 }))
})

test('any -- returns true for passing objects with some passing props', () => {
  assert.ok(result({ x: 9, y: 20 }))
})

test('any -- returns false for passing objects with no passing props', () => {
  assert.ok(!result({ x: 9, y: 26 }))
})
