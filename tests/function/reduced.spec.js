import { test } from 'node:test'
import assert from 'node:assert/strict'
import reduce from '../../src/function/reduce.js'
import reduced from '../../src/function/reduced.js'

test('reduced -- Basic functionality (mimiced from reduce)', () => {
  const tmp = [1, 2, 3, 4, 5]

  assert.deepEqual(reduce((item, acc) => item > 3 ? reduced(acc) : acc.concat(item), [], tmp), [1, 2, 3])
  assert.deepEqual(reduce((x, acc) => acc.length === 3 ? reduced(acc) : acc.concat(x * 2), [], tmp), [2, 4, 6])
})

test('reduced -- Test directly', () => {
  const x = {
    '@@transducer/reduced': true
  }

  assert.deepEqual(reduced(x), x)
})
