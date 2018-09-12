import sort from '../../src/array/sort'
import test from 'tape'

test('sort -- Sorts basic array', t => {
  t.deepEqual(sort((a, b) => a - b, [99, 23, 10, 53, 1]), [1, 10, 23, 53, 99])
  t.end()
})

test('sort -- Is curried', t => {
  const sorter = sort((a, b) => a - b)

  t.deepEqual(sorter([99, 23, 10, 53, 1]), [1, 10, 23, 53, 99])
  t.end()
})
