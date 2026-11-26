import { test } from 'node:test'
import assert from 'node:assert/strict'
import into from '../../src/function/into.js'
import filter from '../../src/array/filter.js'
import map from '../../src/array/map.js'
import take from '../../src/array/take.js'

test('into -- Collects into an array', () => {
  assert.deepEqual(into([], [map(n => n + 1), filter(n => n % 2 === 0)], [1, 2, 3, 4]), [2, 4])
  assert.deepEqual(into([0], [take(2)], [1, 2, 3]), [0, 1, 2], 'Adds to the end of the starting array')
})

test('into -- Collects into a string', () => {
  assert.equal(into('', [map(c => c.toUpperCase()), take(3)], 'kyanite'), 'KYA')
  assert.equal(into('n: ', [map(n => n * 2)], [1, 2]), 'n: 24')
})

test('into -- Collects key value pairs into an object', () => {
  const users = [{ id: 1, name: 'Abby' }, { id: 2, name: 'Brad' }]

  assert.deepEqual(into({}, [map(u => [u.id, u.name])], users), { 1: 'Abby', 2: 'Brad' })
  assert.deepEqual(into({ 0: 'Zed' }, [map(u => [u.id, u.name]), take(1)], users), { 0: 'Zed', 1: 'Abby' })
})

test('into -- Never changes the starting value', () => {
  const arr = [0]
  const obj = { a: 1 }

  into(arr, [map(n => n)], [1, 2])
  into(obj, [map(n => [n, n])], ['b'])
  assert.deepEqual(arr, [0])
  assert.deepEqual(obj, { a: 1 })
})

test('into -- Can be reused without results leaking between runs', () => {
  const doubled = into([], [map(n => n * 2)])

  assert.deepEqual(doubled([1, 2]), [2, 4])
  assert.deepEqual(doubled([3]), [6])
})

test('into -- Takes a single transducer without an array', () => {
  assert.deepEqual(into([], map(n => n * 2), [1, 2]), [2, 4])
})

test('into -- Works with any iterable', () => {
  assert.deepEqual(into([], [take(2)], new Set([5, 10, 15])), [5, 10])
})

test('into -- Is curried', () => {
  assert.deepEqual(into([])([take(2)])([1, 2, 3]), [1, 2])
  assert.deepEqual(into([])([take(2)], [1, 2, 3]), [1, 2])
  assert.deepEqual(into([], [take(2)])([1, 2, 3]), [1, 2])
})

test('into -- Throws on types it cannot collect into', () => {
  assert.throws(() => into(5, [take(1)], [1]), { name: 'TypeError', message: 'Unsupported type: Number' })
  assert.throws(() => into(new Map(), [take(1)], [1]), { name: 'TypeError', message: 'Unsupported type: Map' })
})
