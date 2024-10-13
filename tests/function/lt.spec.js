import lt from '../../src/function/lt.js'
import test from 'tape'

test('lt -- Determines if the numbers are lt', t => {
  t.true(lt(2, 1))
  t.end()
})

test('lt -- Determines if the letters are lt', t => {
  t.true(lt('b', 'a'))
  t.end()
})

test('lt -- It is curried', t => {
  const g = lt(2)

  t.true(g(1))
  t.end()
})

test('lt -- Compares equal values', t => {
  t.false(lt(1, 1))
  t.end()
})
