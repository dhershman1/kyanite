import reverse from '../src/reverse'
import test from 'tape'

test('Returns reversed array', t => {
  t.deepEqual(reverse([1, 2, 3]), [3, 2, 1])
  t.end()
})

test('Returns empty array when given an empty array', t => {
  t.deepEqual(reverse([]), [])
  t.end()
})

test('Does not mutate original array', t => {
  const x = [1, 2, 3]

  t.deepEqual(reverse(x), [3, 2, 1])
  t.deepEqual(x, x)
  t.end()
})
