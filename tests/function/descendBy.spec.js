import descendBy from '../../src/function/descendBy.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('descendBy -- Properly decends using the desired function', () => {
  const results = [
    { name: 'bob' },
    { name: 'amanda' },
    { name: 'carl' },
    { name: 'amanda' }
  ].sort(descendBy(x => x.name))

  assert.deepEqual(results, [
    { name: 'carl' },
    { name: 'bob' },
    { name: 'amanda' },
    { name: 'amanda' }
  ])
})

test('descendBy -- Is curried', () => {
  const desc = descendBy(x => x.name)
  const results = [
    { name: 'bob' },
    { name: 'amanda' },
    { name: 'carl' },
    { name: 'amanda' }
  ].sort(desc)

  assert.deepEqual(results, [
    { name: 'carl' },
    { name: 'bob' },
    { name: 'amanda' },
    { name: 'amanda' }
  ])
})
