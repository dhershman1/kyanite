import factors from '../../src/number/factors.js'
import test from 'tape'

test('factors -- Find the factors of the provided numbers', t => {
  t.same(factors(36), [1, 2, 3, 4, 6, 9, 12, 18, 36])
  t.same(factors(102), [1, 2, 3, 6, 17, 34, 51, 102])
  t.same(factors(5), [1, 5])
  t.same(factors(900), [1, 2, 3, 4, 5, 6, 9, 10, 12, 15, 18, 20, 25, 30, 36, 45, 50, 60, 75, 90, 100, 150, 180, 225, 300, 450, 900])
  t.end()
})

test('factors -- Handles invalid data', t => {
  t.same(factors(0), [], 'Empty array for zero')
  t.same(factors(), [], 'Empty array for undefined')
  t.same(factors(NaN), [], 'Empty array for NaN')
  t.end()
})
