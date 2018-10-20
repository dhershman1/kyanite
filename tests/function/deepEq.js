import deepEq from '../../src/function/deepEq'
import test from 'tape'

/* eslint-disable no-new-wrappers */

test('deepEq -- Compares Promise objects by identity', t => {
  const p1 = Promise.resolve(42)
  const p2 = Promise.resolve(42)

  t.notOk(deepEq(p1, p2), 'Different Promises should not equal')
  t.ok(deepEq(p1, p1), 'Same Promise objects are equal by memory')
  t.end()
})

test('deepEq -- Handles number types nicely', t => {
  const q = 1

  t.true(deepEq(0, 0))
  t.true(deepEq(1, 1))
  t.true(deepEq(1, q))
  t.true(deepEq(q, q))
  t.false(deepEq(1, 2))
  t.false(deepEq(1, '1'))
  t.end()
})

test('deepEq -- Handles string types nicely', t => {
  const q = 'hi'

  t.true(deepEq('', ''))
  t.true(deepEq('hi', 'hi'))
  t.true(deepEq('hi', q))
  t.true(deepEq(q, q))
  t.false(deepEq('hi', 'bye'))
  t.false(deepEq('hi', 1))
  t.end()
})

test('deepEq -- Handles boolean types nicely', t => {
  const q = true

  t.true(deepEq(true, true))
  t.true(deepEq(true, q))
  t.true(deepEq(q, q))
  t.true(deepEq(false, false))
  t.false(deepEq(true, false))
  t.false(deepEq(true, 1))
  t.false(deepEq(false, 0))
  t.end()
})

test('deepEq -- Test handles regex', t => {
  t.ok(deepEq(/\s/, /\s/), 'handles whitespace regex')
  t.ok(deepEq(/a/gi, /a/gi), 'handles flags')
  t.ok(deepEq(/a/mgi, /a/img), 'handles mixed flags')
  t.ok(deepEq(/[A-Z]/, new RegExp('[A-Z]')), 'Regex is generated the same so they are equal')
  t.notOk(deepEq(/\s/, /\d/), 'whitespace regex is not equal to digit regex')
  t.notOk(deepEq(/a/gi, /a/i), 'Handles not equal flags')
  t.end()
})

test('deepEq -- Primitives compared against their object wrappers', t => {
  t.is(deepEq(true, new Boolean(true)), true, 'true is equal to object true')
  t.is(deepEq(false, new Boolean(false)), true, 'flase is equal to object false')
  t.is(deepEq(false, new Boolean(true)), false, 'false is not equal to true')
  t.is(deepEq('test', new String('test')), true, 'String is equal to Object String')
  t.is(deepEq('12', new String(12)), true, 'String is equal to Object String')
  t.is(deepEq(12, new Number(12)), true, 'Number is equal to Object Number')
  t.is(deepEq(12, new Number('12')), true, 'Number is equal to Object Number')
  t.end()
})

test('deepEq -- Handles Object types nicely', t => {
  const q = { a: 1 }

  t.same(deepEq({}, {}), true, 'Empty Objects are equal')
  t.same(deepEq({ a: 1 }, { a: 1 }), true, 'Identical Objects are equal')
  t.same(deepEq({ a: 1 }, q), true, 'Object compared to var of same object are equal')
  t.same(deepEq(q, q), true, 'Object var compared against itself is equal')
  t.same(deepEq({ a: 1, b: 2 }, { a: 1, b: 2 }), true, 'Stacked Object is equal')
  t.same(deepEq({ a: 1, b: 2 }, { b: 2, a: 1 }), true, 'Stacked but switched object is equal')
  t.same(deepEq({ 'a': 1 }, { a: 1 }), true)
  t.same(deepEq({}, { a: 1 }), false)
  t.same(deepEq({}, { b: 2 }), false)
  t.same(deepEq({ a: 1 }, { a: '1' }), false)
  t.same(deepEq({ a: 1 }, { b: 1 }), false)
  t.same(deepEq({ a: 1, b: 2 }, { a: 2, b: 1 }), false)
  t.same(deepEq({ a: 1, b: 2 }, { b: 1, a: 2 }), false)
  t.end()
})

test('deepEq -- Handles array types nicely', t => {
  const q = []

  t.same(deepEq([], []), true, 'Empty array is equal to empty array')
  t.same(deepEq([1], [1]), true, 'Single index array with same number are equal')
  t.same(deepEq([1, 2], [1, 2]), true, 'Multi index arrays equal')
  t.same(deepEq(q, []), true, 'Variable empty array equal to empty array')
  t.same(deepEq(q, q), true, 'Variable array equal to variable array')
  t.same(deepEq([1], []), false, 'Single index array not equal to empty array')
  t.same(deepEq([1, 2], [2, 1]), false, 'Out of order arrays are not equal')
  t.same(deepEq([1, 3], [1, 2]), false, 'Different valued arrays are not equal')
  t.same(deepEq([1], q), false, 'Single index array not equal to empty variable array')
  t.end()
})

test('deepEq -- Handles date objects nicely', t => {
  t.same(deepEq(new Date(), new Date()), true, 'Current Date is equal to current date')
  t.same(deepEq(new Date('12/14/1992'), new Date('12/14/1992')), true, 'Statically set dates are equal')
  t.same(deepEq(new Date('09/14/1992'), new Date('09/14/2018')), false, 'Different year dates not equal')
  t.end()
})

test('deepEq -- Handles nested objects nicely', t => {
  const q = { a: 1 }

  t.same(deepEq({ q }, { q }), true, 'Single nested object')
  t.same(deepEq({ a: { q } }, { a: { q } }), true, 'Double nested object')
  t.end()
})

test('deepEq -- Handles more complex object combinations', t => {
  const q = {
    a: [1]
  }

  t.same(deepEq(q, q), true, 'Object with array is equal')
  t.same(deepEq({
    a: [{
      b: 1
    }]
  }, {
    a: [{
      b: 1
    }]
  }), true, 'Overly complex data is equal')
  t.end()
})

test('deepEq -- Handles circular data', t => {
  const c = {}
  const d = {}
  const e = []
  const f = []
  const nestA = { a: [1, 2, { c: 1 }], b: 1 }
  const nestB = { a: [1, 2, { c: 1 }], b: 1 }
  const nestC = { a: [1, 2, { c: 2 }], b: 1 }

  c.v = c
  d.v = d
  e.push(e)
  f.push(f)

  t.same(deepEq(c, d), true)
  t.same(deepEq(e, f), true)
  t.same(deepEq(nestA, nestB), true)
  t.same(deepEq(nestA, nestC), false)
  t.end()
})

test('deepEq -- Handles basic Set data types', t => {
  const setA = new Set([1, 2, 3])
  const setB = new Set([1, 2, 3])

  t.same(deepEq(setA, setB), true)
  t.same(deepEq(setA, [1, 2, 3]), false)
  t.same(deepEq([1, 2, 3], setB), false)
  t.end()
})

test('deepEq -- Handles more complex Set data types', t => {
  const setA = new Set([1, 2, { a: 1, b: 2 }])
  const setB = new Set([1, 2, { a: 1, b: 2 }])

  t.same(deepEq(setA, setB), true)
  t.same(deepEq(setA, [1, 2, { a: 1, b: 2 }]), false)
  t.same(deepEq(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([3])])])), true)
  t.same(deepEq(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([4])])])), false)
  t.same(deepEq([1, 2, { a: 1, b: 2 }], setB), false)
  t.end()
})

test('deepEq -- Dispatches to `deepEq` method recursively in Set', t => {
  const a = new Set()
  const b = new Set()

  a.add(a, a)
  t.same(deepEq(a, b), false)
  a.add(b)
  b.add(b)
  b.add(a)
  t.same(deepEq(a, b), true)
  t.end()
})

test('deepEq -- Handles Map data types', t => {
  const mapA = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
  ])
  const mapB = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
  ])
  const mapC = new Map([
    [1, 'uno'],
    [2, 'dos']
  ])

  t.same(deepEq(mapA, mapB), true, 'Compared maps are equal')
  t.same(deepEq(mapA, mapC), false, 'Two different maps are not equal')
  t.same(deepEq(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [4, 5, 6]]])), true)
  t.same(deepEq(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'd']])]])), false)
  t.same(deepEq(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'c']])]])), true)
  t.same(deepEq(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [7, 8, 9]]])), false)
  t.end()
})

test('deepEq -- Dispatches to `deepEq` method recursively in Map', t => {
  const a = new Map()
  const b = new Map()

  a.set(a, a)
  t.same(deepEq(a, b), false)
  a.set(b, b)
  b.set(b, b)
  b.set(a, a)
  t.same(deepEq(a, b), true)
  t.end()
})

test('deepEq -- Is commutative', t => {
  function Point (x, y) {
    this.x = x
    this.y = y
  }
  Point.prototype.equals = function (point) {
    return point instanceof Point &&
      this.x === point.x && this.y === point.y
  }

  function ColorPoint (x, y, color) {
    this.x = x
    this.y = y
    this.color = color
  }
  ColorPoint.prototype = new Point(0, 0)
  ColorPoint.prototype.equals = function (point) {
    return point instanceof ColorPoint &&
      this.x === point.x && this.y === point.y &&
      this.color === point.color
  }

  t.same(deepEq(new Point(2, 2), new ColorPoint(2, 2, 'red')), false)
  t.same(deepEq(new ColorPoint(2, 2, 'red'), new Point(2, 2)), false)
  t.end()
})

test('deepEq -- Is curried', t => {
  const fn = deepEq([])

  t.same(fn([]), true)
  t.end()
})
