import max from '../../src/array/max'
import test from 'tape'

test('max -- Returns max for numbers', t => {
  t.is(max([1, 3, 2, 5, 4]), 5)
  t.end()
})

test('max -- Returns sorted list of double digit numbers', t => {
  t.is(max([11, 9, 32, 16, 27]), 32)
  t.end()
})

test('max -- Returns max for string numbers', t => {
  t.is(max(['1', '3', '2', '5', '4']), '5')
  t.end()
})

test('max -- Returns max for letter strings', t => {
  t.is(max(['c', 'a', 'b', 'f']), 'f')
  t.end()
})

test('max -- Returns the max of a date list', t => {
  const d1 = new Date('2018-01-01')
  const d2 = new Date('2018-02-01')

  t.is(max([d1, d2]), d2)
  t.is(max([d2, d1]), d2)
  t.end()
})
