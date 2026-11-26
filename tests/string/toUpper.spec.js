import { test } from 'node:test'
import assert from 'node:assert/strict'
import toUpper from '../../src/string/toUpper.js'

test('toUpper -- Transforms provided string', () => {
  assert.equal(toUpper('hi'), 'HI')
  assert.equal(toUpper('test.123.hello'), 'TEST.123.HELLO')
})
