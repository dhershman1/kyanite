import isNil from '../../src/function/isNil'
import test from 'tape'

test('isNil -- Basic functionality', t => {
  t.true(isNil(null), 'null results returned true')
  t.end()
})

test('isNil -- Returns true for undefined', t => {
  t.true(isNil(undefined))
  t.end()
})

test('isNil -- Returns false for actual values', t => {
  t.false(isNil([]))
  t.end()
})
