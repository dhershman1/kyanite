import filter from '../../src/array/filter'
import test from 'tape'

test('filter -- Basic functionality', t => {
  const isEven = n => n % 2 === 0

  t.deepEqual(filter(isEven, [1, 2, 3, 4]), [2, 4])
  t.end()
})

test('filter -- Returns an empty array if no element matches', t => {
  t.deepEqual(filter(x => x > 100, [1, 3, 4, 56, 90]), [])
  t.end()
})
