import pow from '../../src/number/pow'
import test from 'tape'

test('Takes a number and brings its value to the exponent', t => {
  t.is(pow(3, 7), 343)
  t.is(pow(0.5, 4), 2)
  t.end()
})

test('Converts string and gets power anyway', t => {
  t.is(pow(3, '7'), 343)
  t.is(pow('0.5', 4), 2)
  t.end()
})

test('Handles invalid powers', t => {
  t.true(isNaN(pow(0.5, -7)))
  t.end()
})

test('Is curried', t => {
  const p = pow(3)

  t.is(p(7), 343)
  t.end()
})
