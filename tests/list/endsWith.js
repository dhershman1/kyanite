import endsWith from '../../src/list/endsWith'
import test from 'tape'

test('endsWith -- Basic Usage on lists', t => {
  t.true(endsWith('c', 'abc'))
  t.true(endsWith(['a'], ['c', 'b', 'a']))
  t.false(endsWith('b', 'abc'))
  t.end()
})

test('endsWith -- Is curried', t => {
  const fn = endsWith('c')

  t.true(fn('abc'))
  t.true(fn('c'))
  t.false(fn('a'))
  t.end()
})
