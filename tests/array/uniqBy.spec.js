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
