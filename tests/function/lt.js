import lt from '../../src/function/lt'
import test from 'tape'

test('lt -- Determines if the numbers are lt', t => {
  t.true(lt(1, 2))
  t.end()
})

test('lt -- Determines if the letters are lt', t => {
  t.true(lt('a', 'b'))
  t.end()
})

test('lt -- It is curried', t => {
  const g = lt(1)

  t.true(g(2))
  t.end()
})

test('lt -- Compares equal values', t => {
  t.false(lt(1, 1))
  t.end()
})
