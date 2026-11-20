import { test } from 'node:test'
import assert from 'node:assert/strict'
import type from '../../src/function/type.js'

/* eslint-disable no-new-wrappers */

test('type -- Handles data type literals', () => {
  assert.equal(type([]), 'Array')
  assert.equal(type({}), 'Object')
  assert.equal(type(/[A-z]/), 'RegExp')
  assert.equal(type(1), 'Number')
  assert.equal(type(NaN), 'Number')
  assert.equal(type('testing'), 'String')
  assert.equal(type(null), 'Null')
  assert.equal(type(undefined), 'Undefined')
})

test('type -- Handles new keyword for data types', () => {
  assert.equal(type(new String('I am a String object')), 'String')
  assert.equal(type(new Number(2)), 'Number')
  assert.equal(type(new Date('01-12-19')), 'Date')
  assert.equal(type(new RegExp('[A-Z]')), 'RegExp') // eslint-disable-line prefer-regex-literals
  assert.equal(type(new Array(3)), 'Array')
  assert.equal(type(new Object({})), 'Object')
})
