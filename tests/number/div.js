import div from '../../src/number/div'
import test from 'tape'

test('Divides the numbers', t => {
  t.is(div(5, 5), 1)
  t.end()
})

test('Converts string and multiplies anyway', t => {
  t.is(div('2', 1), 0.5)
  t.end()
})

test('Converts number to negative if a passed value is negative', t => {
  t.is(div(-1, 3), -3)
  t.end()
})

test('Is curried', t => {
  const d = div(3)
  const d2 = div('5')

  t.is(d(15), 5)
  t.is(d2(15), 3)
  t.end()
})
