import includes from '../../src/list/includes.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('includes -- Basic simple functionality', () => {
  const list = [1, 2, 3, 4]

  assert.ok(includes(2, list))
  assert.ok(includes(4, list))
})

test('includes -- Basic curry functionality', () => {
  const list = [1, 2, 3]
  const checker = includes(3)

  assert.ok(checker(list))
})

test('includes -- Returns false for invalid type comparisons', () => {
  assert.ok(!includes('1', [1]))
})
