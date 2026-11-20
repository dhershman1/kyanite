import sortBy from '../../src/array/sortBy.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('sortBy -- Sorts using provided function', () => {
  const results = sortBy(x => x.name, [
    { name: 'bob' },
    { name: 'amanda' },
    { name: 'carl' },
    { name: 'amanda' }
  ])

  assert.deepEqual(results, [
    { name: 'amanda' },
    { name: 'amanda' },
    { name: 'bob' },
    { name: 'carl' }
  ])
})

test('sortBy -- Is curried', () => {
  const sb = sortBy(x => x.name)
  const results = sb([
    { name: 'bob' },
    { name: 'amanda' },
    { name: 'carl' },
    { name: 'amanda' }
  ])

  assert.deepEqual(results, [{ name: 'amanda' }, { name: 'amanda' }, { name: 'bob' }, { name: 'carl' }])
})
