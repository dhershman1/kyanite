import slice from '../../src/list/slice.js'
import test from 'tape'

test('slice -- Handles basic lists', t => {
  t.deepEqual(slice(1, 3, [1, 2, 3, 4, 5]), [2, 3])
  t.end()
})

test('slice -- Is curried', t => {
  const slicer = slice(1, 3)

  t.deepEqual(slicer([1, 2, 3, 4, 5]), [2, 3])
  t.end()
})
