import min from '../src/min'
import test from 'tape'

test('Returns min for numbers', t => {
  t.is(min([1, 3, 2, 5, 4]), 1)
  t.end()
})

test('Returns sorted list of double digit numbers', t => {
  t.is(min([11, 9, 32, 16, 27]), 9)
  t.end()
})

test('Returns min for string numbers', t => {
  t.is(min(['1', '3', '2', '5', '4']), '1')
  t.end()
})

test('Returns min for letter strings', t => {
  t.is(min(['c', 'a', 'b', 'f']), 'a')
  t.end()
})

test('Returns the min of a date list', t => {
  const d1 = new Date('2018-01-01')
  const d2 = new Date('2018-02-01')

  t.is(min([d1, d2]), d1)
  t.is(min([d2, d1]), d1)
  t.end()
})
