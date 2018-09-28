import endsWith from '../../src/list/endsWith'
import test from 'tape'

test('endsWith -- Basic Usage on lists', t => {
  t.true(endsWith('c', 'abc'))
  t.true(endsWith(1, [3, 2, 1]))
  t.false(endsWith(1, [3, 2, 12]))
  t.end()
})

test('endsWith -- Is curried', t => {
  const fn = endsWith('c')

  t.true(fn('abc'))
  t.true(fn(['a', 'b', 'c']))
  t.true(fn('c'))
  t.true(fn(['c']))
  t.false(fn('a'))
  t.false(fn([12]))
  t.end()
})
