import even from '../../src/number/even'
import test from 'tape'

test('even -- Handles checking for even numbers', t => {
  t.true(even(2))
  t.true(even(12))
  t.true(even(4))
  t.false(even(1))
  t.false(even(-1))
  t.false(even(NaN))
  t.false(even('h'))
  t.end()
})
