import reject from '../../src/array/reject'
import test from 'tape'

const even = x => x % 2 === 0

test('reject -- Reduces an array to the ones not matching a filter', t => {
  t.deepEqual(reject(even, [1, 2, 3, 4, 5]), [1, 3, 5])
  t.end()
})

test('reject -- Returns an empty array if no elements passes function test', t => {
  t.deepEqual(reject(x => x < 100, [1, 90, 99]), [])
  t.end()
})

test('reject -- Returns an empty array when an empty array is passed in', t => {
  t.deepEqual(reject(even, []), [])
  t.end()
})

test('reject -- Is curried', t => {
  const rejecter = reject(even)

  t.deepEqual(rejecter([1, 2, 3, 4, 5]), [1, 3, 5])
  t.end()
})
