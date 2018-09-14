import difference from '../../src/array/difference'
import test from 'tape'

test('difference -- Returns the difference in arrays', t => {
  t.deepEqual(difference([1, 2, 3], [1]), [2, 3])
  t.end()
})

test('difference -- Handles multiple arrays being passed in to it', t => {
  t.deepEqual(difference([1, 2, 3, 4, 5], [1, 2]), [3, 4, 5])
  t.end()
})

test('difference -- Is curried', t => {
  const diff = difference([1, 4, 13, 'test'])

  t.deepEqual(diff([1, 4, 13]), ['test'])
  t.end()
})
