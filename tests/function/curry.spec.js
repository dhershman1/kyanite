import curry from '../../src/function/curry.js'
import update from '../../src/array/update.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('curry -- Basic Curry test', () => {
  const add = curry((a, b, c) => a + b + c)
  const results = add(2)(4)(10)

  assert.ok(results, 'Results came by')
  assert.equal(results, 16, 'Results are equal to 16')
  assert.equal(typeof results, 'number', 'Result is a number')
})

test('curry -- Testing curry with another function', () => {
  const first = curry(update)(0)
  const results = first('brown', [1, 2, 3, 4])

  assert.ok(results)
  assert.deepEqual(results, ['brown', 2, 3, 4])
})

test('curry -- Testing curry with another function again', () => {
  const second = curry(update)(1)('brown')
  const results = second([1, 2, 3, 4])

  assert.ok(results)
  assert.deepEqual(results, [1, 'brown', 3, 4])
})
