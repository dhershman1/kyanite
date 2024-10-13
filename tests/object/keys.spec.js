import test from 'tape'

import keys from '../../src/object/keys.js'

test('keys -- Basic usage', t => {
  const obj = { a: 1, b: 2, c: 3, d: { x: 100, y: 200 } }
  t.same(keys(
    obj
  ), ['a', 'b', 'c', 'd'])
  t.end()
})

test('keys -- Works with primitives', t => {
  t.same(keys(null), [])
  t.same(keys(undefined), [])
  t.same(keys(55), [])
  t.same(keys('foo'), [])
  t.same(keys(true), [])
  t.same(keys(false), [])
  t.same(keys(NaN), [])
  t.same(keys(Infinity), [])
  t.same(keys([]), [])
  t.end()
})

test('keys -- Works with hasOwnProperty override', t => {
  t.same(keys({
    hasOwnProperty: false
  }), ['hasOwnProperty'])

  t.end()
})

test('keys -- Should not pick up prototypes', t => {
  function C () {
    this.a = 100
    this.b = 200
  }
  C.prototype.x = function () { return 'x' }
  C.prototype.y = 'y'
  const cobj = new C()

  t.same(keys(cobj), ['a', 'b'])
  t.end()
})
