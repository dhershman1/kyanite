import find from '../../src/array/find.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('find -- Test base functionality', () => {
  const result = find(val => val === 1, [2, 32, 1])

  assert.ok(result)
  assert.equal(result, 1)
})

test('find -- Test array of objects functionality', () => {
  const result = find(({ val }) => val === 1, [{ val: 2 }, { val: 32 }, { val: 1 }])

  assert.ok(result)
  assert.deepEqual(result, { val: 1 })
})

test('find -- Test undefined not found', () => {
  const results = find(x => x.val > 2, [{ val: 1 }, { val: 2 }])

  assert.deepEqual(results, undefined)
})

test('find -- Stops at the first value to pass the function', () => {
  const results = find(x => x.val > 2, [{ val: 1 }, { val: 3 }, { val: 4 }])

  assert.deepEqual(results, { val: 3 })
})

test('find -- Test curried find', () => {
  const finder = find(({ val }) => val === 1)
  const result = finder([{ val: 2 }, { val: 32 }, { val: 1 }])
  const deeperResults = finder([
    { val: 2 },
    { val: 32 },
    {
      val: 1,
      thing: 2
    },
    { val: 1 }
  ])

  assert.ok(result)
  assert.deepEqual(result, { val: 1 })
  assert.deepEqual(deeperResults, {
    val: 1,
    thing: 2
  })
})

test('find -- Stops at the first element that passes our function', () => {
  const runner = x => x > 100

  assert.equal(find(runner, [1, 101, 3, 200, 4]), 101)
  assert.equal(find(runner, [1, 3, 200, 4]), 200)
})

test('find -- Returns false if value not found', () => {
  const runner = x => x > 100

  assert.ok(!find(runner, [1, 2, 3, 4]), 'Value not found')
})

test('find -- Works on Set data types', () => {
  const data = new Set([1, 200, 4, 5, 0])
  const runner = x => x > 100

  assert.equal(find(runner, data), 200, 'return 200 back')
})
