import isNil from '../src/isNil'
import test from 'tape'

test('Basic functionality', t => {
  t.true(isNil(null), 'null results returned true')
  t.end()
})

test('Returns true for undefined', t => {
  t.true(isNil(undefined))
  t.end()
})

test('Returns false for actual values', t => {
  t.false(isNil([]))
  t.end()
})
