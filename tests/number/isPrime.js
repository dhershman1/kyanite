import isPrime from '../../src/number/isPrime'
import test from 'tape'

test('isPrime -- Basic functionality', t => {
  t.same(isPrime(2), true)
  t.same(isPrime(5), true)
  t.same(isPrime(3), true)
  t.same(isPrime(4), false)

  t.end()
})

test('isPrime -- Larger numbers', t => {
  t.same(isPrime(2671), true)
  t.same(isPrime(5009), true)
  t.same(isPrime(7877), true)
  t.same(isPrime(7878), false)
  t.same(isPrime(5010), false)
  t.same(isPrime(10543000), false)
  t.end()
})

test('isPrime -- Handles some edge cases', t => {
  t.same(isPrime(0), false)
  t.same(isPrime(undefined), false)
  t.same(isPrime(NaN), false)
  t.same(isPrime(-2), false)

  t.end()
})
