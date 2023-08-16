import lte from '../../src/function/lte.js'
import test from 'tape'

test('lte -- Value is greater than', t => {
  t.true(lte(2, 1))
  t.end()
})

test('lte -- Value is equal to', t => {
  t.true(lte(2, 2))
  t.end()
})

test('lte -- Value is not greater than or equal to', t => {
  t.false(lte(1, 2))
  t.end()
})

test('lte -- Is curried', t => {
  const g = lte(3)

  t.true(g(2))
  t.true(g(3))
  t.end()
})
