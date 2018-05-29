import gt from '../src/gt'
import test from 'tape'

test('Determines if the numbers are gt', t => {
  t.true(gt(2, 1))
  t.end()
})

test('Determines if the letters are gt', t => {
  t.true(gt('b', 'a'))
  t.end()
})

test('It is curried', t => {
  const g = gt(2)

  t.true(g(1))
  t.end()
})

test('Compares equal values', t => {
  t.false(gt(1, 1))
  t.end()
})
