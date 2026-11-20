import { test } from 'node:test'
import assert from 'node:assert/strict'
import countBy from '../../src/array/countBy.js'

const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2]
const letters = ['a', 'b', 'A', 'a', 'B', 'c']

test('countBy -- Counts out an array', () => {
  assert.deepEqual(countBy(Math.floor, numbers), { 1: 3, 2: 2, 3: 1 })
  assert.deepEqual(countBy(x => x.toLowerCase(), letters), { a: 3, b: 2, c: 1 })
})

test('countBy -- Is curried', () => {
  const floor = countBy(Math.floor)
  const low = countBy(x => x.toLowerCase())

  assert.deepEqual(floor(numbers), { 1: 3, 2: 2, 3: 1 })
  assert.deepEqual(low(letters), { a: 3, b: 2, c: 1 })
})
