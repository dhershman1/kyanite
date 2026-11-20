import ascendBy from '../../src/function/ascendBy.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('ascendBy -- Properly decends using the desired function', () => {
  const results = [
    { name: 'bob' },
    { name: 'amanda' },
    { name: 'carl' },
    { name: 'amanda' }
  ].sort(ascendBy(x => x.name))

  assert.deepEqual(results, [
    { name: 'amanda' },
    { name: 'amanda' },
    { name: 'bob' },
    { name: 'carl' }
  ])
})

test('ascendBy -- Is curried', () => {
  const asc = ascendBy(x => x.name)
  const results = [
    { name: 'bob' },
    { name: 'amanda' },
    { name: 'carl' },
    { name: 'amanda' }
  ].sort(asc)

  assert.ok(results)
  assert.deepEqual(results, [
    { name: 'amanda' },
    { name: 'amanda' },
    { name: 'bob' },
    { name: 'carl' }
  ])
})
