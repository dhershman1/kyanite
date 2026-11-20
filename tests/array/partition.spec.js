import type from '../../src/function/type.js'
import partition from '../../src/array/partition.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

const check = x => type(x) === 'String'

test('partition -- Basic functionality', () => {
  assert.deepEqual(partition(check, []), [[], []])
  assert.deepEqual(partition(check, ['foo', 'bar', 100]), [['foo', 'bar'], [100]])
  assert.deepEqual(partition(check, ['foo', 'bar']), [['foo', 'bar'], []])
})

test('partition -- Is curried', () => {
  const part = partition(check)

  assert.deepEqual(part(['foo', 'bar', 100]), [['foo', 'bar'], [100]])
})
