import test from 'tape'
import type from '../../src/function/type.js'

/* eslint-disable no-new-wrappers, no-new-object */

test('type -- Handles data type literals', t => {
  t.is(type([]), 'Array')
  t.is(type({}), 'Object')
  t.is(type(/[A-z]/), 'RegExp')
  t.is(type(1), 'Number')
  t.is(type(NaN), 'Number')
  t.is(type('testing'), 'String')
  t.is(type(null), 'Null')
  t.is(type(undefined), 'Undefined')
  t.end()
})

test('type -- Handles new keyword for data types', t => {
  t.is(type(new String('I am a String object')), 'String')
  t.is(type(new Number(2)), 'Number')
  t.is(type(new Date('01-12-19')), 'Date')
  t.is(type(new RegExp('[A-Z]')), 'RegExp')
  t.is(type(new Array(3)), 'Array')
  t.is(type(new Object({})), 'Object')
  t.end()
})
