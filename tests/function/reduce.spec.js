import reduce from '../../src/function/reduce.js'
import reduced from '../../src/function/reduced.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('reduce -- Basic Functionality', () => {
  assert.equal(reduce((n, acc) => acc + n, 0, [1, 2, 3, 4, 5]), 15)
  assert.deepEqual(reduce((n, acc) => {
    if (typeof n === 'number') {
      acc.push(n)
    }

    return acc
  }, [], ['', 1, 2, '0', 3]), [1, 2, 3])
})

test('reduce() with maps', () => {
  const data = new Map([['a', 1], ['b', 2], ['c', 3]])
  const results = reduce((val, acc) => {
    acc.push(val)

    return acc
  }, [], data)

  assert.deepEqual(results, [['a', 1], ['b', 2], ['c', 3]])
})

test('reduce() with Sets', () => {
  const data = new Set([1, 2, 3, 4])
  const results = reduce((val, acc) => acc.concat(val * 2), [], data)

  assert.deepEqual(results, [2, 4, 6, 8])
})

test('reduce -- Is curried', () => {
  const r = reduce((n, acc) => acc + n, 0)

  assert.equal(r([1, 2, 3, 4, 5]), 15)
})

test('reduce -- Understands how to use reduced', () => {
  const tmp = [1, 2, 3, 4, 5]

  assert.deepEqual(reduce((item, acc) => item > 3 ? reduced(acc) : acc.concat(item), [], tmp), [1, 2, 3])
  assert.deepEqual(reduce((x, acc) => acc.length === 3 ? reduced(acc) : acc.concat(x * 2), [], tmp), [2, 4, 6])
})

test('reduce -- Handling Set data types', () => {
  const fn = reduce((x, acc) => x > 3 ? reduced(acc) : acc.concat(x), [])

  assert.deepEqual(fn(new Set([1, 2, 3, 4, 5])), [1, 2, 3])
})

test('reduce -- Handling Map data types', () => {
  const fn = reduce(([k, v], acc) => k === 'c' ? reduced(acc) : acc.concat(v), [])

  assert.deepEqual(fn(new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4]])), [1, 2])
})
