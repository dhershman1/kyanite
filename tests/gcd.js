import gcd from '../src/gcd'
import test from 'tape'

test('Returns the gcd of two numbers', t => {
  t.is(gcd(80, 90), 10)
  t.end()
})

test('Is curried', t => {
  const x = gcd(80)

  t.is(x(90), 10)
  t.end()
})
