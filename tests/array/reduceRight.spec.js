import reduceRight from '../../src/array/reduceRight.js'
import reduced from '../../src/function/reduced.js'
import test from 'tape'

test('reduceRight -- Reduces an addition array', t => {
  t.is(reduceRight((n, acc) => acc + n, 0, [1, 2, 3, 4, 5]), 15)
  t.end()
})

test('reduceRight -- Reduces down to another array', t => {
  t.deepEqual(reduceRight((n, acc) => {
    if (typeof n === 'number') {
      acc.push(n)
    }

    return acc
  }, [], ['', 1, 2, '0', 3]), [3, 2, 1])
  t.end()
})

test('reduceRight -- Is curried', t => {
  const r = reduceRight((n, acc) => acc + n, 0)

  t.is(r([1, 2, 3, 4, 5]), 15)
  t.end()
})

test('reduce -- Understands how to use reduced', t => {
  const tmp = [1, 2, 3, 4, 5]

  t.same(reduceRight((item, acc) => item <= 3 ? reduced(acc) : acc.concat(item), [], tmp), [5, 4])
  t.same(reduceRight((x, acc) => acc.length === 3 ? reduced(acc) : acc.concat(x * 2), [], tmp), [10, 8, 6])
  t.end()
})
