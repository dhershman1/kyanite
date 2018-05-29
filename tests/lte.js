import lte from '../src/lte'
import test from 'tape'

test('Value is greater than', t => {
  t.true(lte(1, 2))
  t.end()
})

test('Value is equal to', t => {
  t.true(lte(2, 2))
  t.end()
})

test('Value is not greater than or equal to', t => {
  t.false(lte(2, 1))
  t.end()
})

test('Is curried', t => {
  const g = lte(2)

  t.true(g(2))
  t.true(g(3))
  t.end()
})
