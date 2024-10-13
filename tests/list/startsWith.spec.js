import startsWith from '../../src/list/startsWith.js'
import test from 'tape'

test('startsWith -- Basic Usage on lists', t => {
  t.true(startsWith('c', 'cab'))
  t.true(startsWith(['a'], ['a', 'b', 'c']))
  t.false(startsWith('b', 'abc'))
  t.end()
})

test('startsWith -- Is curried', t => {
  const fn = startsWith('c')

  t.true(fn('cab'))
  t.true(fn('c'))
  t.false(fn('a'))
  t.end()
})
