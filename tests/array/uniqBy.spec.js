import { test } from 'node:test'
import assert from 'node:assert/strict'
import uniqBy from '../../src/array/uniqBy.js'

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
