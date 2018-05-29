import reduce from '../src/reduce'
import test from 'tape'

test('Reduces an addition array', t => {
  t.is(reduce((acc, n) => acc + n, 0, [1, 2, 3, 4, 5]), 15)
  t.end()
})

test('Reduces down to another array', t => {
  t.deepEqual(reduce((acc, n) => {
    if (typeof n === 'number') {
      acc.push(n)
    }

    return acc
  }, [], ['', 1, 2, '0', 3]), [1, 2, 3])
  t.end()
})

test('Is curried', t => {
  const r = reduce((acc, n) => acc + n, 0)

  t.is(r([1, 2, 3, 4, 5]), 15)
  t.end()
})
