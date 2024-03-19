import test from 'tape'
import values from '../../src/object/values.js'

test('values -- basic test', t => {
  t.same(values({ a: 1, b: 2, c: 3 }), [1, 2, 3])
  t.same(values([1, 2, 3]), [1, 2, 3])
  t.end()
})

test('values -- Returns empty array for primitives', t => {
  t.same(values(null), [])
  t.same(values(undefined), [])
  t.same(values(55), [])
  t.same(values('foo'), [])
  t.same(values(true), [])
  t.same(values(false), [])
  t.same(values(NaN), [])
  t.same(values(Infinity), [])
  t.same(values([]), [])
  t.end()
})

test('values -- returns an array of given objects values', t => {
  const obj = { a: 100, b: [1, 2, 3], c: { x: 200, y: 300 }, d: 'D', e: null, f: undefined }
  const vs = values(obj).sort()
  const ts = [[1, 2, 3], 100, 'D', { x: 200, y: 300 }, null, undefined]

  t.same(vs.length, ts.length, 'Values grabbed all of the object vals')
  t.same(vs[0], ts[0])
  t.same(vs[1], ts[1])
  t.same(vs[2], ts[2])
  t.same(vs[3], ts[3])
  t.same(vs[4], ts[4])
  t.same(vs[5], ts[5])

  t.same(
    values({ hasOwnProperty: false }),
    [false]
  )

  t.end()
})

test('values -- Does not include the given objects prototype values', t => {
  function C () {
    this.a = 100
    this.b = 200
  }
  C.prototype.x = function () { return 'x' }
  C.prototype.y = 'y'
  const cobj = new C()

  t.same(values(cobj), [100, 200])
  t.end()
})
