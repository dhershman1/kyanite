import difference from '../../src/array/difference.js'
import test from 'tape'

test('difference -- Returns the difference in arrays', t => {
  t.same(difference([[1, 2, 3], [1]]), [2, 3])
  t.same(difference([[1], [1, 2, 3]]), [2, 3])
  t.same(difference([['foo', 'bar', 'baz', 'oops', 'charlie'], ['oops', 'baz', 'bobby']]), ['foo', 'bar', 'charlie', 'bobby'])
  t.same(difference([[1, 2, 3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6])
  t.end()
})

test('difference -- More than two arrays', t => {
  t.same(difference([[1], [1, 2, 3], [2, 4]]), [3, 4])
  t.end()
})

test('difference -- Complex tests', t => {
  t.same(difference([[1, 4, 13, 'test'], [1, 4, 13]]), ['test'])
  t.same(difference([[1, 4, 13, 'test'], ['test', 1, 3]]), [4, 13, 3])
  t.same(difference([[1, 4, 13, 'test'], [1, 1, 4, 4, 3, 3]]), [13, 'test', 3])
  t.end()
})

test('difference -- Handles dupes in both arrays', t => {
  t.same(difference([[1, 2, 3, 3, 4, 2], [1, 1, 2, 3, 3]]), [4])
  t.same(difference([[1, 2, 3, 3, 4, 2], [2, 2, 22, 44, 1]]), [3, 4, 22, 44])
  t.end()
})

test('difference -- Handles odd edge cases', t => {
  t.same(difference([[NaN], [NaN]]).length, 0)
  t.end()
})
