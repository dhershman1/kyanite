import reduceRight from '../../src/array/reduceRight'
import test from 'tape'

test('reduceRight -- Reduces an addition array', t => {
  t.is(reduceRight((acc, n) => acc + n, 0, [1, 2, 3, 4, 5]), 15)
  t.end()
})

test('reduceRight -- Reduces down to another array', t => {
  t.deepEqual(reduceRight((acc, n) => {
    if (typeof n === 'number') {
      acc.push(n)
    }

    return acc
  }, [], ['', 1, 2, '0', 3]), [3, 2, 1])
  t.end()
})

test('reduceRight -- Is curried', t => {
  const r = reduceRight((acc, n) => acc + n, 0)

  t.is(r([1, 2, 3, 4, 5]), 15)
  t.end()
})
