import gt from '../../src/function/gt.js'
import test from 'tape'

test('gt -- Determines if the numbers are gt', t => {
  t.true(gt(1, 2))
  t.false(gt(7.0, 7.0))
  t.end()
})

test('gt -- Determines if the letters are gt', t => {
  t.true(gt('a', 'b'))
  t.true(gt('abc', 'abcd'))
  t.end()
})

test('gt -- It is curried', t => {
  const g = gt(1)

  t.true(g(2))
  t.end()
})

test('gt -- Compares equal values', t => {
  t.false(gt(1, 1))
  t.end()
})
