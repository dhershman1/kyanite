import sort from '../src/sort'
import test from 'tape'

test('Sorts basic array', t => {
  t.deepEqual(sort((a, b) => a - b, [99, 23, 10, 53, 1]), [1, 10, 23, 53, 99])
  t.end()
})

test('Is curried', t => {
  const sorter = sort((a, b) => a - b)

  t.deepEqual(sorter([99, 23, 10, 53, 1]), [1, 10, 23, 53, 99])
  t.end()
})
