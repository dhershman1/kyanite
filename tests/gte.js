import gte from '../src/gte'
import test from 'tape'

test('Value is greater than', t => {
  t.true(gte(2, 1))
  t.end()
})

test('Value is equal to', t => {
  t.true(gte(2, 2))
  t.end()
})

test('Value is not greater than or equal to', t => {
  t.false(gte(1, 2))
  t.end()
})

test('Is curried', t => {
  const g = gte(2)

  t.true(g(1))
  t.true(g(2))
  t.end()
})
