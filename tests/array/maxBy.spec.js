import maxBy from '../../src/array/maxBy.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('maxBy -- Grabs the max number', () => {
  const result = maxBy(x => x.size, [{ size: 4 }, { size: 2 }, { size: 6 }, { size: 3 }])

  assert.deepEqual(result, { size: 6 })
})

test('maxBy -- Grabs the max letter', () => {
  const result = maxBy(x => x.alpha, [{ alpha: 'b' }, { alpha: 'c' }, { alpha: 'a' }])

  assert.deepEqual(result, { alpha: 'c' })
})

test('maxBy -- It is curried', () => {
  const m = maxBy(x => x.size)
  const result = m([{ size: 4 }, { size: 2 }, { size: 6 }, { size: 3 }])

  assert.deepEqual(result, { size: 6 })
})
