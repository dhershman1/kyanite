import mul from '../../src/number/mul'
import test from 'tape'

test('mul -- Multiplies numbers', t => {
  t.is(mul(5, 5), 25)
  t.end()
})

test('mul -- Converts string and multiplies anyway', t => {
  t.is(mul(1, '2'), 2)
  t.end()
})

test('mul -- Converts number to negative if a passed value is negative', t => {
  t.is(mul(3, -1), -3)
  t.end()
})

test('mul -- Is curried', t => {
  const multiply = mul(5)

  t.is(multiply(3), 15)
  t.is(multiply('4'), 20)
  t.end()
})
