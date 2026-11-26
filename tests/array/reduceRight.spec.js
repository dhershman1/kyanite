import reduceRight from '../../src/array/reduceRight.js'
import reduced from '../../src/function/reduced.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('reduceRight -- Reduces an addition array', () => {
  assert.equal(reduceRight((n, acc) => acc + n, 0, [1, 2, 3, 4, 5]), 15)
})

test('reduceRight -- Reduces down to another array', () => {
  assert.deepEqual(reduceRight((n, acc) => {
    if (typeof n === 'number') {
      acc.push(n)
    }

    return acc
  }, [], ['', 1, 2, '0', 3]), [3, 2, 1])
})

test('reduceRight -- Is curried', () => {
  const r = reduceRight((n, acc) => acc + n, 0)

  assert.equal(r([1, 2, 3, 4, 5]), 15)
})

test('reduce -- Understands how to use reduced', () => {
  const tmp = [1, 2, 3, 4, 5]

  assert.deepEqual(reduceRight((item, acc) => item <= 3 ? reduced(acc) : acc.concat(item), [], tmp), [5, 4])
  assert.deepEqual(reduceRight((x, acc) => acc.length === 3 ? reduced(acc) : acc.concat(x * 2), [], tmp), [10, 8, 6])
})
