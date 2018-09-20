import factors from '../../src/number/factors'
import test from 'tape'

test('factors -- Find the factors of the provided numbers', t => {
  t.same(factors(36), [1, 2, 3, 4, 6, 9, 12, 18])
  t.same(factors(102), [1, 2, 3, 6, 17, 34, 51])
  t.same(factors(0), [])
  t.same(factors(-1), [])
  t.same(factors(), [])
  t.end()
})

test('factors -- Should throw an error when values are NaN', t => {
  try {
    factors('h')
  } catch (err) {
    t.is(err.message, 'Arguments should be Numbers')
    t.end()
  }
})
