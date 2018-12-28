import empty from '../../src/function/empty'
import test from 'tape'

test('empty -- empty Handles String Values', t => {
  t.true(empty(''), 'Returns true for an empty string')
  t.false(empty(' '), 'Returns false for string with only whitespace')
  t.false(empty('hi'), 'Returns false for string with content')
  t.end()
})

test('empty -- empty Handles array values', t => {
  t.true(empty([]), 'Returns true for empty array')
  t.false(empty([[]]), 'Returns false when array has another empty array inside')
  t.false(empty(['']), 'Returns false if array has empty string inside')
  t.end()
})

test('empty -- empty Handles object values', t => {
  const a = 'thing'

  t.true(empty({}), 'Returns true for empty object')
  t.false(empty({ x: 0 }), 'Returns false when object contains property inside')
  t.false(empty({ [a]: 'test' }), 'Returns false for dynamically created objects')
  t.end()
})

test('empty -- empty Handles numeric values', t => {
  t.true(empty(0), 'Returns true for 0')
  t.true(empty(10), 'Returns true for any number')
  t.end()
})

test('empty -- empty Handles falsy values', t => {
  t.true(empty(NaN), 'Returns true for NaN')
  t.true(empty(undefined), 'Returns true for undefined')
  t.true(empty(null), 'Returns true for null')
  t.end()
})

test('empty -- empty Handles boolean values', t => {
  t.true(empty(false), 'Returns true when passed false boolean')
  t.true(empty(true), 'Returns true when passed true boolean')
  t.end()
})
