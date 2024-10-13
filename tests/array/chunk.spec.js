import test from 'tape'
import chunk from '../../src/array/chunk.js'

test('chunk -- Basics', t => {
  t.same(chunk(2, [1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
  t.same(chunk(2, [1, 2, 3, 4, 5, 6]), [[1, 2], [3, 4], [5, 6]])
  t.end()
})

test('chunk -- Is curried', t => {
  const fn = chunk(2)

  t.same(fn([1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
  t.same(fn([1, 2, 3, 4, 5, 6]), [[1, 2], [3, 4], [5, 6]])
  t.end()
})

test('chunk -- Handles same length arrays', t => {
  const fn = chunk(3)
  t.same(fn([1, 2, 3]), [[1, 2, 3]])
  t.end()
})
