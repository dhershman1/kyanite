import nil from '../../src/function/nil'
import test from 'tape'

test('nil -- Basic functionality', t => {
  t.true(nil(null), 'null results returned true')
  t.end()
})

test('nil -- Returns true for undefined', t => {
  t.true(nil(undefined))
  t.end()
})

test('nil -- Returns false for actual values', t => {
  t.false(nil([]))
  t.end()
})
