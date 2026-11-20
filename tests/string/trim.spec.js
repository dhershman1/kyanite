import { test } from 'node:test'
import assert from 'node:assert/strict'
import trim from '../../src/string/trim.js'

test('trim -- Returns a trimmed string', () => {
  assert.equal(trim('my brown cow   '), 'my brown cow')
  assert.equal(trim('   new things   '), 'new things')
})
