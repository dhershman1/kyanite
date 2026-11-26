import { test } from 'node:test'
import assert from 'node:assert/strict'
import uniqBy from '../../src/array/uniqBy.js'
import into from '../../src/function/into.js'
import take from '../../src/array/take.js'

test('uniqBy -- Creates a unique array', () => {
  const results = uniqBy(x => x.length, ['and', 'here', 'are', 'some', 'words'])

  assert.deepEqual(results, ['and', 'here', 'words'])
})

test('uniqBy -- Is curried', () => {
  const uq = uniqBy(x => x.length)

  assert.deepEqual(uq(['and', 'here', 'are', 'some', 'words']), ['and', 'here', 'words'])
})

test('uniqBy -- Does not turn the keys into strings', () => {
  assert.deepEqual(uniqBy(x => x.id, [{ id: 1 }, { id: '1' }, { id: 1 }]), [{ id: 1 }, { id: '1' }])
})

test('uniqBy -- Keeps the first value of each key in order', () => {
  assert.deepEqual(uniqBy(Math.floor, [3.1, 1.2, 3.9, 2.5, 1.7]), [3.1, 1.2, 2.5])
})

test('uniqBy -- Works as a transducer', () => {
  const words = ['and', 'here', 'are', 'some', 'words']

  assert.deepEqual(into([], [uniqBy(x => x.length)], words), ['and', 'here', 'words'])
  assert.deepEqual(into([], [uniqBy(x => x.length), take(2)], words), ['and', 'here'])
})

test('uniqBy -- As a transducer, forgets what it has seen between runs', () => {
  const unique = into([], [uniqBy(x => x)])

  assert.deepEqual(unique([1, 1, 2]), [1, 2])
  assert.deepEqual(unique([1, 2, 2]), [1, 2])
})
