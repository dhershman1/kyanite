import gte from '../../src/function/gte'
import test from 'tape'

test('gte -- Value is greater than', t => {
  t.true(gte(2, 1))
  t.end()
})

test('gte -- Value is equal to', t => {
  t.true(gte(2, 2))
  t.end()
})

test('gte -- Value is not greater than or equal to', t => {
  t.false(gte(1, 2))
  t.end()
})

test('gte -- Is curried', t => {
  const g = gte(2)

  t.true(g(1))
  t.true(g(2))
  t.end()
})
