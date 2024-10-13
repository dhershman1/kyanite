import pow from '../../src/number/pow.js'
import test from 'tape'

test('pow -- Takes a number and brings its value to the exponent', t => {
  t.is(pow(3, 7), 343)
  t.is(pow(0.5, 4), 2)
  t.end()
})

test('pow -- Converts string and gets power anyway', t => {
  t.is(pow(3, '7'), 343)
  t.is(pow('0.5', 4), 2)
  t.end()
})

test('pow -- Handles invalid powers', t => {
  t.true(isNaN(pow(0.5, -7)))
  t.end()
})

test('pow -- Is curried', t => {
  const p = pow(3)

  t.is(p(7), 343)
  t.end()
})
