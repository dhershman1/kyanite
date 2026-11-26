import { test } from 'node:test'
import assert from 'node:assert/strict'
import pluck from '../../src/array/pluck.js'
import into from '../../src/function/into.js'
import filter from '../../src/array/filter.js'

test('pluck()', () => {
  const results = pluck('age', [{ name: 'george', age: 19 }, { name: 'gavin', age: 26 }])

  assert.deepEqual(results, [19, 26])
  assert.deepEqual(pluck(0, [[1, 2], [3, 4]]), [1, 3])
})

test('pluck() is curried', () => {
  const fn = pluck('age')

  assert.deepEqual(fn([{ name: 'george', age: 19 }, { name: 'gavin', age: 26 }]), [19, 26])
})

test('pluck -- Works as a transducer', () => {
  const people = [{ name: 'george', age: 19 }, { name: 'gavin', age: 26 }]

  assert.deepEqual(into([], [pluck('age')], people), [19, 26])
  assert.deepEqual(into([], [pluck('age'), filter(age => age > 20)], people), [26])
})
