import gte from '../../src/function/gte.js'
import test from 'tape'

test('gte -- Value is greater than', t => {
  t.true(gte(1, 2))
  t.true(gte(2, 2))
  t.false(gte('xyz', 'abc'))
  t.true(gte('abc', 'abcd'))
  t.end()
})

test('gte -- Value is not greater than or equal to', t => {
  t.false(gte(2, 1))
  t.end()
})

test('gte -- Is curried', t => {
  const g = gte(1)

  t.true(g(1))
  t.true(g(2))
  t.end()
})
