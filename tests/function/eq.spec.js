import eq from '../../src/function/eq.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('eq -- Test base functionality', () => {
  assert.ok(eq(0, 0))
  assert.ok(eq('t', 't'))
})

test('eq -- Test boolean types', () => {
  assert.ok(eq(false, false))
  assert.ok(eq(true, true))
  assert.ok(!eq(true, false))
})

test('eq -- Test object types', () => {
  const o = {}

  assert.ok(eq(o, o))
  assert.ok(!eq({ test: 1 }, { test: 1 }))
  assert.ok(!eq({}, {}))
  assert.ok(!eq({ test: 1 }, { test: 2 }))
})

test('eq -- Test array types', () => {
  assert.ok(!eq([], []))
  assert.ok(!eq([1], [1]))
  assert.ok(!eq([1], [2]))
})

test('eq -- Test edge case type', () => {
  assert.ok(!eq(0, -0))
  assert.ok(eq(NaN, NaN))
})

test('eq -- Test curried eq', () => {
  const i = eq(NaN)

  assert.ok(i(NaN))
  assert.ok(!i({}))
  assert.ok(!i(0))
})
