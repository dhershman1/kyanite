import capitalize from '../../src/string/capitalize.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('capitalize -- Capitalizes first letter of string', () => {
  assert.equal(capitalize('test'), 'Test')
})

test('capitalize -- Capitalizes multi word strings', () => {
  assert.equal(capitalize('small brown cow'), 'Small brown cow')
})

test('capitalize -- Handles empty strings', () => {
  assert.equal(capitalize(''), '')
})
