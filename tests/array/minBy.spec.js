import minBy from '../../src/array/minBy.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('minBy -- Grabs the max number', () => {
  const result = minBy(x => x.size, [{ size: 4 }, { size: 2 }, { size: 6 }, { size: 3 }])

  assert.deepEqual(result, { size: 2 })
})

test('minBy -- Grabs the max letter', () => {
  const result = minBy(x => x.alpha, [{ alpha: 'b' }, { alpha: 'c' }, { alpha: 'a' }])

  assert.deepEqual(result, { alpha: 'a' })
})

test('minBy -- It is curried', () => {
  const m = minBy(x => x.size)
  const result = m([{ size: 4 }, { size: 2 }, { size: 6 }, { size: 3 }])

  assert.deepEqual(result, { size: 2 })
})
