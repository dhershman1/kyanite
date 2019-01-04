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

test('empty -- empty Handles nil values', t => {
  t.true(empty(undefined), 'Returns true for undefined')
  t.true(empty(null), 'Returns true for null')
  t.end()
})

test('empty -- Handles Maps and Sets', t => {
  t.same(empty(new Map()), true)
  t.same(empty(new Set()), true)
  t.same(empty(new Map([['a', 1]])), false)
  t.same(empty(new Set([1, 2])), false)
  t.end()
})

test('empty -- empty Errors on numeric values', t => {
  try {
    empty(10)
  } catch ({ message }) {
    t.same(message, 'Unsupported type: Number')
    t.end()
  }
})

test('empty -- Errors on NaN', t => {
  try {
    empty(NaN)
  } catch ({ message }) {
    t.same(message, 'Unsupported type: Number')
    t.end()
  }
})

test('empty -- Errors on boolean', t => {
  try {
    empty(false)
  } catch ({ message }) {
    t.same(message, 'Unsupported type: Boolean')
    t.end()
  }
})
