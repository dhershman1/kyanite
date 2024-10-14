import takeWhile from '../../src/array/takeWhile.js'
import test from 'tape'

test('takeWhile -- Basic usage', t => {
  t.same(takeWhile(x => x < 4, [1, 2, 3, 4, 5, 6]), [1, 2, 3])
  t.same(takeWhile(x => x % 2 !== 0, [1, 3, 5]), [1, 3, 5])
  t.same(takeWhile(x => x === 2, [0, 1, 9]), [])
  t.end()
})

test('takeWhile -- Is curried', t => {
  const fn = takeWhile(x => x < 4)

  t.same(fn([1, 2, 3, 4, 5]), [1, 2, 3])
  t.same(fn([3, 4, 5]), [3])
  t.end()
})
