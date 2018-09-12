import gcd from '../../src/number/gcd'
import test from 'tape'

test('gcd -- Returns the gcd of two numbers', t => {
  t.is(gcd(80, 90), 10)
  t.end()
})

test('gcd -- Is curried', t => {
  const x = gcd(80)

  t.is(x(90), 10)
  t.end()
})
