import findIndex from '../../src/array/findIndex'
import test from 'tape'

test('findIndex -- Returns the index number of the given value', t => {
  t.same(findIndex(x => x > 5, [1, 3, 4, 5, 6]), 4)
  t.end()
})

test('findIndex -- Returns the index number of the First value which passes', t => {
  t.same(findIndex(x => x > 5, [1, 3, 4, 5, 6, 7]), 4)
  t.end()
})

test('findIndex -- Gives back -1 if no value matches', t => {
  t.same(findIndex(x => x < 0, [1, 3, 4, 5, 6]), undefined)
  t.end()
})

test('findIndex -- It is curried', t => {
  const f = findIndex(x => x > 5)

  t.same(f([1, 2, 3, 4, 5, 6]), 5)
  t.end()
})
