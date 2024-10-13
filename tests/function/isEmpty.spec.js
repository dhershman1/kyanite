import isEmpty from '../../src/function/isEmpty.js'
import test from 'tape'

test('isEmpty -- empty Handles String Values', t => {
  t.true(isEmpty(''), 'Returns true for an empty string')
  t.false(isEmpty(' '), 'Returns false for string with only whitespace')
  t.false(isEmpty('hi'), 'Returns false for string with content')
  t.end()
})

test('isEmpty -- empty Handles array values', t => {
  t.true(isEmpty([]), 'Returns true for empty array')
  t.false(isEmpty([[]]), 'Returns false when array has another empty array inside')
  t.false(isEmpty(['']), 'Returns false if array has empty string inside')
  t.end()
})

test('isEmpty -- empty Handles object values', t => {
  const a = 'thing'

  t.true(isEmpty({}), 'Returns true for empty object')
  t.false(isEmpty({ x: 0 }), 'Returns false when object contains property inside')
  t.false(isEmpty({ [a]: 'test' }), 'Returns false for dynamically created objects')
  t.end()
})

test('isEmpty -- empty Handles nil values', t => {
  t.true(isEmpty(undefined), 'Returns true for undefined')
  t.true(isEmpty(null), 'Returns true for null')
  t.end()
})

test('isEmpty -- Handles Maps and Sets', t => {
  t.same(isEmpty(new Map()), true)
  t.same(isEmpty(new Set()), true)
  t.same(isEmpty(new Map([['a', 1]])), false)
  t.same(isEmpty(new Set([1, 2])), false)
  t.end()
})

test('isEmpty -- Works with undefined and null', t => {
  t.same(isEmpty(undefined), true)
  t.same(isEmpty(null), true)
  t.end()
})

test('isEmpty -- empty Errors on numeric values', t => {
  try {
    isEmpty(10)
  } catch ({ message }) {
    t.same(message, 'Unsupported type: Number')
    t.end()
  }
})

test('isEmpty -- Errors on NaN', t => {
  try {
    isEmpty(NaN)
  } catch ({ message }) {
    t.same(message, 'Unsupported type: Number')
    t.end()
  }
})

test('isEmpty -- Errors on boolean', t => {
  try {
    isEmpty(false)
  } catch ({ message }) {
    t.same(message, 'Unsupported type: Boolean')
    t.end()
  }
})
