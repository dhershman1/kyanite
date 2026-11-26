import some from '../../src/array/some.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('some -- Basic functionality', () => {
  const runner = x => typeof x === 'string'

  assert.ok(some(runner, ['foo', 'bar']))
  assert.ok(some(runner, ['foo', 'bar', 1]))
  assert.ok(!some(runner, [1, 2, 3]))
})

test('some -- Basic curried functionality', () => {
  const a = some(x => typeof x === 'string')

  assert.ok(a(['foo', 'bar']))
  assert.ok(a(['foo', 'bar', 1]))
  assert.ok(!a([1, 2, 3]))
})

test('some -- Run against objects', () => {
  const runner = ({ val }) => val === 'test'

  assert.ok(some(runner, [{ val: 'thing' }, { val: 'test' }]))
  assert.ok(!some(runner, [{ val: 'thing' }, { val: 100 }]))
})
