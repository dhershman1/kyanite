import { test } from 'node:test'
import assert from 'node:assert/strict'
import converge from '../../src/function/converge.js'

function sum (nums) {
  return nums.reduce((acc, v) => acc + v, 0)
}

function length (list) {
  return list.length
}

function divide (a, b) {
  return a / b
}

test('converge() -- Basic', () => {
  const average = converge(divide, [sum, length], [1, 2, 3, 4, 5, 6, 7])

  assert.deepEqual(average, 4, 'Gets the average of 4 from the array')
})

test('converge() -- Is curried', () => {
  const fn = converge(divide, [sum, length])
  const interchange = converge(divide)

  assert.deepEqual(typeof interchange, 'function', 'Interchange is a function')
  assert.deepEqual(typeof interchange([sum, length]), 'function', 'Calling interchange with 1 param returns function')
  assert.deepEqual(typeof fn, 'function', 'fn is a function')
  assert.deepEqual(interchange([sum, length], [1, 2, 3]), 2, 'Giving 2 params to interchange runs the converge function fully')
  assert.deepEqual(fn([1, 2, 3, 4, 5, 6, 7]), 4, 'Average of 4')
  assert.deepEqual(fn([1, 2, 3]), 2, 'Average of 2')
  assert.deepEqual(fn([90, 47, 20, 13, 12]), 36.4, 'Average of 36.4')
})
