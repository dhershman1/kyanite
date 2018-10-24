import difference from '../../src/array/difference'
import test from 'tape'

test('difference -- Returns the difference in arrays', t => {
  t.same(difference([1, 2, 3], [1]), [2, 3])
  t.same(difference(['foo', 'bar', 'baz', 'oops', 'charlie'], ['oops', 'baz', 'bobby']), ['foo', 'bar', 'charlie', 'bobby'])
  t.same(difference([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4, 5, 6])
  t.end()
})

test('difference -- Is curried', t => {
  const diff = difference([1, 4, 13, 'test'])

  t.same(diff([1, 4, 13]), ['test'])
  t.same(diff(['test', 1, 3]), [4, 13, 3])
  t.same(diff([1, 1, 4, 4, 3, 3]), [13, 'test', 3])
  t.end()
})

test('difference -- Handles dupes in both arrays', t => {
  const fn = difference([1, 2, 3, 3, 4, 2])

  t.same(fn([1, 1, 2, 3, 3]), [4])
  t.same(fn([2, 2, 22, 44, 1]), [3, 4, 22, 44])
  t.end()
})
