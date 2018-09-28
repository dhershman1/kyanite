import dropWhile from '../../src/array/dropWhile'
import test from 'tape'

test('dropWhile -- Basic usage tests', t => {
  t.same(dropWhile(x => x <= 2, [1, 2, 3, 4, 3, 2, 1]), [3, 4, 3, 2, 1])
  t.end()
})

test('dropWhile -- Is curried', t => {
  const fn = dropWhile(x => x <= 2)

  t.same(fn([1, 2, 3, 4, 3, 2, 1]), [3, 4, 3, 2, 1])
  t.same(fn([-1, 0, 1, 2, 3]), [3])
  t.end()
})
