import test from 'tape'
import type from '../../src/function/type'

test('type -- Array is given back when given array literal', t => {
  t.is(type([]), 'Array')
  t.end()
})

test('type -- Object is given back when given object literal', t => {
  t.is(type({}), 'Object')
  t.end()
})

test('type -- RegExp is given back when given regexp literal', t => {
  t.is(type(/[A-z]/), 'RegExp')
  t.end()
})

test('type -- Number is given back when given number value', t => {
  t.is(type(1), 'Number')
  t.end()
})

test('type -- Number is given back when given NaN value', t => {
  t.is(type(NaN), 'Number')
  t.end()
})

test('type -- String is given back when given string value', t => {
  t.is(type('testing'), 'String')
  t.end()
})

test('type -- String given if given a String object', t => {
  t.is(type(new String('I am a String object')), 'String')
  t.end()
})

test('type -- Null if given the null value', t => {
  t.is(type(null), 'Null')
  t.end()
})

test('type -- Undefined if given the undefined value', t => {
  t.is(type(undefined), 'Undefined')
  t.end()
})
