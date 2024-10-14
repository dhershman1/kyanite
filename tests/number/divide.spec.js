import divide from '../../src/number/divide.js'
import test from 'tape'

test('divide -- Divides the numbers', t => {
  t.is(divide(5, 5), 1)
  t.end()
})

test('divide -- Converts string and multiplies anyway', t => {
  t.is(divide('2', 1), 0.5)
  t.end()
})

test('divide -- Converts number to negative if a passed value is negative', t => {
  t.is(divide(-1, 3), -3)
  t.end()
})

test('divide -- Is curried', t => {
  const d = divide(3)
  const d2 = divide('5')

  t.is(d(15), 5)
  t.is(d2(15), 3)
  t.end()
})
