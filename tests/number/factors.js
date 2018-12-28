import factors from '../../src/number/factors'
import test from 'tape'

test('factors -- Find the factors of the provided numbers', t => {
  t.same(factors(36), [1, 2, 3, 4, 6, 9, 12, 18, 36])
  t.same(factors(102), [1, 2, 3, 6, 17, 34, 51, 102])
  t.same(factors(5), [1, 5])
  t.end()
})

test('factors -- Finds the factors of negative numbers', t => {
  t.same(factors(-36), [1, 2, 3, 4, 6, 9, 12, 18, 36])
  t.same(factors(-102), [1, 2, 3, 6, 17, 34, 51, 102])
  t.same(factors(-1), [1])
  t.end()
})

test('factors -- Handles invalid data', t => {
  t.same(factors(0), [], 'Empty array for zero')
  t.same(factors(), [], 'Empty array for undefined')
  t.same(factors(NaN), [], 'Empty array for NaN')
  t.end()
})
