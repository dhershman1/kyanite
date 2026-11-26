import isPrime from '../../src/number/isPrime.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('isPrime -- Basic functionality', () => {
  assert.deepEqual(isPrime(2), true)
  assert.deepEqual(isPrime(5), true)
  assert.deepEqual(isPrime(3), true)
  assert.deepEqual(isPrime(4), false)
})

test('isPrime -- Larger numbers', () => {
  assert.deepEqual(isPrime(2671), true)
  assert.deepEqual(isPrime(5009), true)
  assert.deepEqual(isPrime(7877), true)
  assert.deepEqual(isPrime(7878), false)
  assert.deepEqual(isPrime(5010), false)
  assert.deepEqual(isPrime(10543000), false)
})

test('isPrime -- Handles some edge cases', () => {
  assert.deepEqual(isPrime(0), false)
  assert.deepEqual(isPrime(undefined), false)
  assert.deepEqual(isPrime(NaN), false)
  assert.deepEqual(isPrime(-2), false)
})
