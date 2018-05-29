import intersection from '../src/intersection'
import test from 'tape'

test('Returns an array with items from both arrays', t => {
  t.deepEqual(intersection([1, 2, 3, 4], [3, 4, 5, 6]), [3, 4])
  t.end()
})

test('Its curried', t => {
  const inter = intersection([1, 2, 3, 4])

  t.deepEqual(inter([3, 4, 5, 6]), [3, 4])
  t.end()
})
