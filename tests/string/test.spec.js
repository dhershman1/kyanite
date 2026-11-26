import { test } from 'node:test'
import assert from 'node:assert/strict'
import fn from '../../src/string/test.js'

test('test -- Basic functionality works', () => {
  assert.deepEqual(fn(/^a/, 'abc'), true)
  assert.deepEqual(fn(/^b/, 'abc'), false)
})

test('test -- Is curried', () => {
  const f = fn(/^a/)

  assert.deepEqual(f('abc'), true)
  assert.deepEqual(f('bca'), false)
})

test('test -- A global regex gives the same answer every call', () => {
  const reg = /a/g

  assert.equal(fn(reg, 'a'), true)
  assert.equal(fn(reg, 'a'), true)
  assert.equal(reg.lastIndex, 0, 'The regex lastIndex is left alone')
})

test('test -- A sticky regex gives the same answer every call', () => {
  const reg = /a/y

  assert.equal(fn(reg, 'a'), true)
  assert.equal(fn(reg, 'a'), true)
})

test('test -- Turns a non string value into a string, like RegExp.prototype.test', () => {
  assert.equal(fn(/1/, 123), true)
  assert.equal(fn(/null/, null), true)
})
