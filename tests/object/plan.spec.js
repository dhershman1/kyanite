import plan from '../../src/object/plan.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

const testFns = {
  a: x => x * 2,
  b: x => x + 10
}

test('plan -- Applies the schema functions accordingly', () => {
  const results = plan(testFns, {
    a: 2,
    b: 15
  })

  assert.deepEqual(results, { a: 4, b: 25 })
})

test('plan -- Is curried', () => {
  const p = plan(testFns)
  const results = p({ a: 5, b: 10 })

  assert.deepEqual(results, { a: 10, b: 20 })
})

test('plan -- Handles missing properties', () => {
  const results = plan(testFns, { a: 5 })

  assert.deepEqual(results, { a: 10 })
  assert.deepEqual(plan(testFns, { a: 5, c: 10 }), { a: 10, c: 10 })
})

test('plan -- Handles if the object has the own prop', () => {
  const data = {
    id: 123,
    firstName: '   Test ',
    data: {
      elapsed: 100,
      remaining: 1000
    }
  }
  const result = plan({
    firstName: x => x.trim(),
    lastName: x => x.trim(),
    data: plan({
      elapsed: x => x + 1,
      remaining: x => x - 1
    })
  })

  assert.deepEqual(result(data), {
    id: 123,
    firstName: 'Test',
    data: {
      elapsed: 101,
      remaining: 999
    }
  })
})
