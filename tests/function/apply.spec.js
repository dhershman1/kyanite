import apply from '../../src/function/apply.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('apply -- Basic usage', () => {
  assert.equal(apply(x => x * 2, 2), 4)
})

test('apply -- Is curried', () => {
  const fn = apply(x => x > 5)

  assert.equal(fn(5), false)
  assert.equal(fn(8), true)
})
