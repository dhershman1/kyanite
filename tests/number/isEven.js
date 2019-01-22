import isEven from '../../src/number/isEven'
import test from 'tape'

test('isEven -- Handles checking for even numbers', t => {
  t.true(isEven(2))
  t.true(isEven(12))
  t.true(isEven(4))
  t.false(isEven(1))
  t.false(isEven(-1))
  t.false(isEven(NaN))
  t.false(isEven('h'))
  t.end()
})
