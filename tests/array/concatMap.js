import concatMap from '../../src/array/concatMap.js'
import test from 'tape'

test('concatMap -- Apples function to values and merges arrays', t => {
  const result = concatMap(x => [x, x], [1, 2, 3])

  t.deepEqual(result, [1, 1, 2, 2, 3, 3])
  t.end()
})

test('concatMap -- Shrinks the array', t => {
  const results = concatMap(x => x, [[1, 2], [3, 4], [5, 6]])

  t.same(results, [1, 2, 3, 4, 5, 6])
  t.end()
})

test('concatMap -- Is properly curried', t => {
  const con = concatMap(x => [x, x])

  t.deepEqual(con([1, 2, 3]), [1, 1, 2, 2, 3, 3])
  t.end()
})
