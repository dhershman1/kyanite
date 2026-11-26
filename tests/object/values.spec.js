import { test } from 'node:test'
import assert from 'node:assert/strict'
import values from '../../src/object/values.js'

test('values -- basic test', () => {
  assert.deepEqual(values({ a: 1, b: 2, c: 3 }), [1, 2, 3])
  assert.deepEqual(values([1, 2, 3]), [1, 2, 3])
})

test('values -- Returns empty array for primitives', () => {
  assert.deepEqual(values(null), [])
  assert.deepEqual(values(undefined), [])
  assert.deepEqual(values(55), [])
  assert.deepEqual(values('foo'), [])
  assert.deepEqual(values(true), [])
  assert.deepEqual(values(false), [])
  assert.deepEqual(values(NaN), [])
  assert.deepEqual(values(Infinity), [])
  assert.deepEqual(values([]), [])
})

test('values -- returns an array of given objects values', () => {
  const obj = { a: 100, b: [1, 2, 3], c: { x: 200, y: 300 }, d: 'D', e: null, f: undefined }
  const vs = values(obj).sort()
  const ts = [[1, 2, 3], 100, 'D', { x: 200, y: 300 }, null, undefined]

  assert.deepEqual(vs.length, ts.length, 'Values grabbed all of the object vals')
  assert.deepEqual(vs[0], ts[0])
  assert.deepEqual(vs[1], ts[1])
  assert.deepEqual(vs[2], ts[2])
  assert.deepEqual(vs[3], ts[3])
  assert.deepEqual(vs[4], ts[4])
  assert.deepEqual(vs[5], ts[5])

  assert.deepEqual(
    values({ hasOwnProperty: false }),
    [false]
  )
})

test('values -- Does not include the given objects prototype values', () => {
  function C () {
    this.a = 100
    this.b = 200
  }
  C.prototype.x = function () { return 'x' }
  C.prototype.y = 'y'
  const cobj = new C()

  assert.deepEqual(values(cobj), [100, 200])
})
