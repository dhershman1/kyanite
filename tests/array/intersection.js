import intersection from '../../src/array/intersection.js'
import test from 'tape'

test('intersection -- Returns an array with items from both arrays', t => {
  t.same(intersection([1, 2, 3, 4], [3, 4, 5, 6]), [3, 4])
  t.same(intersection(['foo', 'bar', 'baz', 'oops', 'charlie'], ['oops', 'baz', 'bobby']), ['baz', 'oops'])
  t.same(intersection([1, 2, 3], [4, 5, 6]), [])
  t.end()
})

test('intersection -- Its curried', t => {
  const inter = intersection([1, 2, 3, 4])

  t.same(inter([3, 4, 5, 6]), [3, 4])
  t.same(inter([11, 44, 3]), [3])
  t.same(inter([3, 3, 4]), [3, 4])
  t.end()
})

test('intersection -- Handles dupes in both arrays', t => {
  const fn = intersection([1, 2, 2, 3, 4, 4])
  const fn2 = intersection(['foo', 'bar', 'bar', 'baz', 'boat', 'boat'])

  t.same(fn([4, 4, 2, 3, 3]), [2, 3, 4])
  t.same(fn2(['baz', 'baz', 'bar', 'bar', 'foo']), ['foo', 'bar', 'baz'])
  t.end()
})
