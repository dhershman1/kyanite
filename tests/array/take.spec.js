import take from '../../src/array/take.js'
import into from '../../src/function/into.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('take -- Handles taking values from an array', () => {
  const results = take(3, [1, 2, 3, 4, 5])

  assert.deepEqual(results, [1, 2, 3])
})

test('take -- Handles empty arrays passed in', () => {
  const results = take(3, [])

  assert.deepEqual(results, [])
})

test('take -- Is curried', () => {
  const ta = take(3)

  assert.deepEqual(ta([1, 2, 3, 4, 5]), [1, 2, 3], 'curried result returned [1, 2, 3]')
  assert.deepEqual(ta([]), [], 'curried result returned an empty array')
})

test('take -- Works as a transducer', () => {
  assert.deepEqual(into([], [take(2)], [1, 2, 3]), [1, 2])
  assert.deepEqual(into([], [take(5)], [1, 2, 3]), [1, 2, 3], 'Asking for more than there are takes them all')
})

test('take -- As a transducer, asking for 0 or less takes nothing', () => {
  assert.deepEqual(into([], [take(0)], [1, 2, 3]), [])
  assert.deepEqual(into([], [take(-1)], [1, 2, 3]), [])
})

test('take -- As a transducer, stops reading once it has enough', () => {
  let reads = 0
  function * counted () {
    while (true) {
      reads++
      yield reads
    }
  }

  assert.deepEqual(into([], [take(3)], counted()), [1, 2, 3])
  assert.equal(reads, 3)
})
