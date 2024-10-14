import test from 'tape'

import adjust from '../../src/array/adjust.js'

test('adjust -- Basic usage', t => {
  const results = adjust(
    1,
    x => x.toUpperCase(),
    ['a', 'b', 'c', 'd']
  )

  t.same(results, ['a', 'B', 'c', 'd'], 'Results were adjusted to capitlaized B')
  t.end()
})

test('adjust -- offsets negative indexes from the end of the array', t => {
  t.same(adjust(
    -3,
    x => x + 1,
    [0, 1, 2, 3]
  ), [0, 2, 2, 3], 'Array negative offset')
  t.end()
})

test('adjust -- Basic usage strings', t => {
  t.same(adjust(
    1,
    x => x.toUpperCase(),
    'abcd'
  ), ['a', 'B', 'c', 'd'])

  t.end()
})

test('adjust -- returns the original array if the supplied index is out of bounds', t => {
  const list = [0, 1, 2, 3]
  adjust(4, x => x + 1, list)
  t.same(adjust(4, x => x + 1, list), list, 'Returned back list for out of bounds index')
  t.same(adjust(-6, x => x + 1, list), list, 'Returned back list for out of bounds index')

  t.end()
})

test('adjust -- Does not mutate original array', t => {
  const list = [0, 1, 2, 3]

  t.same(adjust(2, x => x + 1, list), [0, 1, 3, 3], 'List updated as expected')
  t.same(list, [0, 1, 2, 3], 'Original list was not mutated')
  t.end()
})
