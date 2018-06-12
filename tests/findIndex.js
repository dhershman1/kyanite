import findIndex from '../src/findIndex'
import test from 'tape'

test('Returns the index number of the given value', t => {
  t.same(findIndex(x => x > 5, [1, 3, 4, 5, 6]), 4)
  t.end()
})

test('Returns the index number of the First value which passes', t => {
  t.same(findIndex(x => x > 5, [1, 3, 4, 5, 6, 7]), 4)
  t.end()
})

test('Gives back -1 if no value matches', t => {
  t.same(findIndex(x => x < 0, [1, 3, 4, 5, 6]), -1)
  t.end()
})

test('It is curried', t => {
  const f = findIndex(x => x > 5)

  t.same(f([1, 2, 3, 4, 5, 6]), 5)
  t.end()
})
