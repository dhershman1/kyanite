import { test } from 'node:test'
import assert from 'node:assert/strict'
import when from '../../src/function/when.js'

test('when -- Handles simple types', () => {
  const testFn = when(x => x > 3, x => x * 2)
  const strTest = when(x => x.length > 3, x => x.length * 2)

  assert.equal(testFn(5), 10)
  assert.equal(testFn(2), 2)
  assert.equal(strTest('foobar'), 12)
  assert.equal(strTest('foo'), 'foo')
})

test('when -- Handles array complex types', () => {
  assert.deepEqual(when(x => x.length === 3, x => x.concat(4), [1, 2, 3]), [1, 2, 3, 4])
})
