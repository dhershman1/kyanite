import takeWhile from '../../src/array/takeWhile.js'
import into from '../../src/function/into.js'
import map from '../../src/array/map.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('takeWhile -- Basic usage', () => {
  assert.deepEqual(takeWhile(x => x < 4, [1, 2, 3, 4, 5, 6]), [1, 2, 3])
  assert.deepEqual(takeWhile(x => x % 2 !== 0, [1, 3, 5]), [1, 3, 5])
  assert.deepEqual(takeWhile(x => x === 2, [0, 1, 9]), [])
})

test('takeWhile -- Is curried', () => {
  const fn = takeWhile(x => x < 4)

  assert.deepEqual(fn([1, 2, 3, 4, 5]), [1, 2, 3])
  assert.deepEqual(fn([3, 4, 5]), [3])
})

test('takeWhile -- Returns a copy when every value passes', () => {
  const list = [1, 3, 5]
  const results = takeWhile(x => x % 2 !== 0, list)

  assert.deepEqual(results, list)
  assert.notEqual(results, list)
})

test('takeWhile -- Works as a transducer', () => {
  assert.deepEqual(into([], [takeWhile(x => x < 3)], [1, 2, 3, 4, 1]), [1, 2], 'Stops at the first failure, even if later values pass')
  assert.deepEqual(into([], [takeWhile(() => true)], [1, 2]), [1, 2])
  assert.deepEqual(into([], [takeWhile(() => false)], [1, 2]), [])
  assert.equal(into('', [takeWhile(c => c !== ' ')], 'hello world'), 'hello')
})

test('takeWhile -- As a transducer, stops reading at the first failure', () => {
  let calls = 0
  const count = map(x => {
    calls++
    return x
  })

  into([], [count, takeWhile(x => x < 2)], [1, 2, 3, 4])
  assert.equal(calls, 2)
})
