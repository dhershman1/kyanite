import reverse from '../../src/list/reverse'
import test from 'tape'

test('reverse -- Returns reversed array', t => {
  t.same(reverse([1, 2, 3]), [3, 2, 1])
  t.same(reverse('abc'), 'cba')
  t.end()
})

test('reverse -- Returns empty array when given an empty array', t => {
  t.same(reverse([]), [])
  t.same(reverse(''), '')
  t.end()
})

test('reverse -- Does not mutate original array', t => {
  const x = [1, 2, 3]

  t.same(reverse(x), [3, 2, 1])
  t.same(x, x)
  t.end()
})
