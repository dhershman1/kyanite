import isOdd from '../../src/number/isOdd.js'
import test from 'tape'

test('isOdd -- Checks numbers for odds', t => {
  t.true(isOdd(1))
  t.true(isOdd(3))
  t.true(isOdd(15))
  t.false(isOdd(2))
  t.false(isOdd(4))
  t.false(isOdd(NaN))
  t.false(isOdd('h'))
  t.end()
})
