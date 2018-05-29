import test from 'tape'
import type from '../src/type'

test('Array is given back when given array literal', t => {
  t.is(type([]), 'Array')
  t.end()
})

test('Object is given back when given object literal', t => {
  t.is(type({}), 'Object')
  t.end()
})

test('RegExp is given back when given regexp literal', t => {
  t.is(type(/[A-z]/), 'RegExp')
  t.end()
})

test('Number is given back when given number value', t => {
  t.is(type(1), 'Number')
  t.end()
})

test('Number is given back when given NaN value', t => {
  t.is(type(NaN), 'Number')
  t.end()
})

test('String is given back when given string value', t => {
  t.is(type('testing'), 'String')
  t.end()
})

test('String given if given a String object', t => {
  t.is(type(new String('I am a String object')), 'String')
  t.end()
})

test('Null if given the null value', t => {
  t.is(type(null), 'Null')
  t.end()
})

test('Undefined if given the undefined value', t => {
  t.is(type(undefined), 'Undefined')
  t.end()
})
