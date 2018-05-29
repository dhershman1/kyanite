import isEmpty from '../src/isEmpty'
import test from 'tape'

test('isEmpty Handles String Values', t => {
  t.true(isEmpty(''), 'Returns true for an empty string')
  t.false(isEmpty(' '), 'Returns false for string with only whitespace')
  t.false(isEmpty('hi'), 'Returns false for string with content')
  t.end()
})

test('isEmpty Handles array values', t => {
  t.true(isEmpty([]), 'Returns true for empty array')
  t.false(isEmpty([[]]), 'Returns false when array has another empty array inside')
  t.false(isEmpty(['']), 'Returns false if array has empty string inside')
  t.end()
})

test('isEmpty Handles object values', t => {
  const a = 'thing'

  t.true(isEmpty({}), 'Returns true for empty object')
  t.false(isEmpty({ x: 0 }), 'Returns false when object contains property inside')
  t.false(isEmpty({ [a]: 'test' }), 'Returns false for dynamically created objects')
  t.end()
})

test('isEmpty Handles numeric values', t => {
  t.true(isEmpty(0), 'Returns true for 0')
  t.true(isEmpty(10), 'Returns true for any number')
  t.end()
})

test('isEmpty Handles falsy values', t => {
  t.true(isEmpty(NaN), 'Returns true for NaN')
  t.true(isEmpty(undefined), 'Returns true for undefined')
  t.true(isEmpty(null), 'Returns true for null')
  t.end()
})

test('isEmpty Handles boolean values', t => {
  t.true(isEmpty(false), 'Returns true when passed false boolean')
  t.true(isEmpty(true), 'Returns true when passed true boolean')
  t.end()
})
