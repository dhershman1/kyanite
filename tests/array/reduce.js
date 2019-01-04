import reduce from '../../src/array/reduce'
import reduced from '../../src/array/reduced'
import test from 'tape'

test('reduce -- Basic Functionality', t => {
  t.is(reduce((n, acc) => acc + n, 0, [1, 2, 3, 4, 5]), 15)
  t.deepEqual(reduce((n, acc) => {
    if (typeof n === 'number') {
      acc.push(n)
    }

    return acc
  }, [], ['', 1, 2, '0', 3]), [1, 2, 3])
  t.end()
})

test('reduce -- Is curried', t => {
  const r = reduce((n, acc) => acc + n, 0)

  t.is(r([1, 2, 3, 4, 5]), 15)
  t.end()
})

test('reduce -- Understands how to use reduced', t => {
  const tmp = [1, 2, 3, 4, 5]

  t.same(reduce((item, acc) => item > 3 ? reduced(acc) : acc.concat(item), [], tmp), [1, 2, 3])
  t.same(reduce((x, acc) => acc.length === 3 ? reduced(acc) : acc.concat(x * 2), [], tmp), [2, 4, 6])
  t.end()
})
