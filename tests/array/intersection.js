import intersection from '../../src/array/intersection'
import test from 'tape'

test('intersection -- Returns an array with items from both arrays', t => {
  t.deepEqual(intersection([1, 2, 3, 4], [3, 4, 5, 6]), [3, 4])
  t.end()
})

test('intersection -- Its curried', t => {
  const inter = intersection([1, 2, 3, 4])

  t.deepEqual(inter([3, 4, 5, 6]), [3, 4])
  t.end()
})
