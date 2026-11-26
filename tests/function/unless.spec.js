import { test } from 'node:test'
import assert from 'node:assert/strict'
import unless from '../../src/function/unless.js'

test('unless -- Basic usage', () => {
  assert.deepEqual(unless(x => x > 2, x => x * 2, 5), 5)
  assert.deepEqual(unless(x => x > 5, x => x * 2, 5), 10)
})

test('unless -- Is curried', () => {
  const un = unless(x => x > 2, x => x * 2)

  assert.deepEqual(un(5), 5)
  assert.deepEqual(un(1), 2)
})
