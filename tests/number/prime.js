import prime from '../../src/number/prime'
import test from 'tape'

test('prime -- Basic functionality', t => {
  t.true(prime(2))
  t.true(prime(5))
  t.true(prime(3))
  t.false(prime(4))

  t.end()
})

test('prime -- Larger numbers', t => {
  t.true(prime(2671))
  t.true(prime(5009))
  t.true(prime(7877))
  t.false(prime(7878))
  t.false(prime(5010))
  t.end()
})

test('prime -- Handles zero & NaN', t => {
  t.false(prime(0))
  t.false(prime(NaN))

  t.end()
})
