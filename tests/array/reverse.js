import reverse from '../../src/array/reverse'
import test from 'tape'

test('reverse -- Returns reversed array', t => {
  t.deepEqual(reverse([1, 2, 3]), [3, 2, 1])
  t.end()
})

test('reverse -- Returns empty array when given an empty array', t => {
  t.deepEqual(reverse([]), [])
  t.end()
})

test('reverse -- Does not mutate original array', t => {
  const x = [1, 2, 3]

  t.deepEqual(reverse(x), [3, 2, 1])
  t.deepEqual(x, x)
  t.end()
})
