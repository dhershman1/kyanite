import isPrime from '../../src/number/isPrime'
import test from 'tape'

test('isPrime -- Basic functionality', t => {
  t.true(isPrime(2))
  t.true(isPrime(5))
  t.true(isPrime(3))
  t.false(isPrime(4))

  t.end()
})

test('isPrime -- Larger numbers', t => {
  t.true(isPrime(2671))
  t.true(isPrime(5009))
  t.true(isPrime(7877))
  t.false(isPrime(7878))
  t.false(isPrime(5010))
  t.end()
})

test('isPrime -- Handles zero & NaN', t => {
  t.false(isPrime(0))
  t.false(isPrime(NaN))

  t.end()
})
