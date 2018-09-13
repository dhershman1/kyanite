import test from 'tape'
import union from '../../src/array/union'

test('union -- Combines two arrays together without dupes', t => {
  const result = union([1, 2, 3, 4, 5], [4, 5, 6, 7])

  t.deepEqual(result, [1, 2, 3, 4, 5, 6, 7])
  t.end()
})

test('union -- Handles multiple arrays being sent in', t => {
  const result = union([1, 2, 3, 4, 5], [[4, 5, 6, 7], [6, 7, 8, 9]])

  t.deepEqual(result, [1, 2, 3, 4, 5, [4, 5, 6, 7], [6, 7, 8, 9]])
  t.end()
})

test('union -- Is curried', t => {
  const un = union([1, 2, 3, 4, 5])

  t.deepEqual(un([4, 5, 6, 7]), [1, 2, 3, 4, 5, 6, 7])
  t.end()
})
