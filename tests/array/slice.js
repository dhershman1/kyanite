import slice from '../../src/array/slice'
import test from 'tape'

test('slice -- Handles basic array', t => {
  t.deepEqual(slice(1, 3, [1, 2, 3, 4, 5]), [2, 3])
  t.end()
})

test('slice -- Is curried', t => {
  const slicer = slice(1, 3)

  t.deepEqual(slicer([1, 2, 3, 4, 5]), [2, 3])
  t.end()
})
