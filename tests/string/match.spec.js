import { test } from 'node:test'
import assert from 'node:assert/strict'
import match from '../../src/string/match.js'

test('match -- Matches strings', () => {
  assert.deepEqual(match(/([a-z]a)/g, 'bananas'), ['ba', 'na', 'na'])
  assert.deepEqual(match(/a/, 'b'), null)
})

test('match -- Is curried', () => {
  const fn = match(/([a-z]a)/g)

  assert.deepEqual(fn('bananas'), ['ba', 'na', 'na'])
  assert.deepEqual(fn('why'), null)
})
