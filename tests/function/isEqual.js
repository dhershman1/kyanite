import isEqual from '../../src/function/isEqual'
import test from 'tape'

/* eslint-disable no-new-wrappers */

test('isEqual -- Compares Promise objects by identity', t => {
  const p1 = Promise.resolve(42)
  const p2 = Promise.resolve(42)

  t.notOk(isEqual(p1, p2), 'Different Promises should not equal')
  t.ok(isEqual(p1, p1), 'Same Promise objects are equal by memory')
  t.end()
})

test('isEqual -- Handles number types nicely', t => {
  const q = 1

  t.true(isEqual(0, 0))
  t.true(isEqual(1, 1))
  t.true(isEqual(1, q))
  t.true(isEqual(q, q))
  t.false(isEqual(1, 2))
  t.false(isEqual(1, '1'))
  t.end()
})

test('isEqual -- Handles string types nicely', t => {
  const q = 'hi'

  t.true(isEqual('', ''))
  t.true(isEqual('hi', 'hi'))
  t.true(isEqual('hi', q))
  t.true(isEqual(q, q))
  t.false(isEqual('hi', 'bye'))
  t.false(isEqual('hi', 1))
  t.end()
})

test('isEqual -- Handles boolean types nicely', t => {
  const q = true

  t.true(isEqual(true, true))
  t.true(isEqual(true, q))
  t.true(isEqual(q, q))
  t.true(isEqual(false, false))
  t.false(isEqual(true, false))
  t.false(isEqual(true, 1))
  t.false(isEqual(false, 0))
  t.end()
})

test('isEqual -- Test handles regex', t => {
  t.ok(isEqual(/\s/, /\s/), 'handles whitespace regex')
  t.ok(isEqual(/a/gi, /a/gi), 'handles flags')
  t.ok(isEqual(/a/mgi, /a/img), 'handles mixed flags')
  t.ok(isEqual(/[A-Z]/, new RegExp('[A-Z]')), 'Regex is generated the same so they are equal')
  t.notOk(isEqual(/\s/, /\d/), 'whitespace regex is not equal to digit regex')
  t.notOk(isEqual(/a/gi, /a/i), 'Handles not equal flags')
  t.end()
})

test('isEqual -- Primitives compared against their object wrappers', t => {
  t.is(isEqual(true, new Boolean(true)), true, 'true is equal to object true')
  t.is(isEqual(false, new Boolean(false)), true, 'flase is equal to object false')
  t.is(isEqual(false, new Boolean(true)), false, 'false is not equal to true')
  t.is(isEqual('test', new String('test')), true, 'String is equal to Object String')
  t.is(isEqual('12', new String(12)), true, 'String is equal to Object String')
  t.is(isEqual(12, new Number(12)), true, 'Number is equal to Object Number')
  t.is(isEqual(12, new Number('12')), true, 'Number is equal to Object Number')
  t.end()
})

test('isEqual -- Handles Object types nicely', t => {
  const q = { a: 1 }

  t.same(isEqual({}, {}), true, 'Empty Objects are equal')
  t.same(isEqual({ a: 1 }, { a: 1 }), true, 'Identical Objects are equal')
  t.same(isEqual({ a: 1 }, q), true, 'Object compared to var of same object are equal')
  t.same(isEqual(q, q), true, 'Object var compared against itself is equal')
  t.same(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 }), true, 'Stacked Object is equal')
  t.same(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 }), true, 'Stacked but switched object is equal')
  t.same(isEqual({ 'a': 1 }, { a: 1 }), true)
  t.same(isEqual({}, { a: 1 }), false)
  t.same(isEqual({}, { b: 2 }), false)
  t.same(isEqual({ a: 1 }, { a: '1' }), false)
  t.same(isEqual({ a: 1 }, { b: 1 }), false)
  t.same(isEqual({ a: 1, b: 2 }, { a: 2, b: 1 }), false)
  t.same(isEqual({ a: 1, b: 2 }, { b: 1, a: 2 }), false)
  t.end()
})

test('isEqual -- Handles array types nicely', t => {
  const q = []

  t.same(isEqual([], []), true, 'Empty array is equal to empty array')
  t.same(isEqual([1], [1]), true, 'Single index array with same number are equal')
  t.same(isEqual([1, 2], [1, 2]), true, 'Multi index arrays equal')
  t.same(isEqual(q, []), true, 'Variable empty array equal to empty array')
  t.same(isEqual(q, q), true, 'Variable array equal to variable array')
  t.same(isEqual([1], []), false, 'Single index array not equal to empty array')
  t.same(isEqual([1, 2], [2, 1]), false, 'Out of order arrays are not equal')
  t.same(isEqual([1, 3], [1, 2]), false, 'Different valued arrays are not equal')
  t.same(isEqual([1], q), false, 'Single index array not equal to empty variable array')
  t.end()
})

test('isEqual -- Handles date objects nicely', t => {
  t.same(isEqual(new Date(), new Date()), true, 'Current Date is equal to current date')
  t.same(isEqual(new Date('12/14/1992'), new Date('12/14/1992')), true, 'Statically set dates are equal')
  t.same(isEqual(new Date('09/14/1992'), new Date('09/14/2018')), false, 'Different year dates not equal')
  t.end()
})

test('isEqual -- Handles nested objects nicely', t => {
  const q = { a: 1 }

  t.same(isEqual({ q }, { q }), true, 'Single nested object')
  t.same(isEqual({ a: { q } }, { a: { q } }), true, 'Double nested object')
  t.end()
})

test('isEqual -- Handles more complex object combinations', t => {
  const q = {
    a: [1]
  }

  t.same(isEqual(q, q), true, 'Object with array is equal')
  t.same(isEqual({
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

test('isEqual -- Handles circular data', t => {
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

  t.same(isEqual(c, d), true)
  t.same(isEqual(e, f), true)
  t.same(isEqual(nestA, nestB), true)
  t.same(isEqual(nestA, nestC), false)
  t.end()
})

test('isEqual -- Handles basic Set data types', t => {
  const setA = new Set([1, 2, 3])
  const setB = new Set([1, 2, 3])

  t.same(isEqual(setA, setB), true)
  t.same(isEqual(setA, [1, 2, 3]), false)
  t.same(isEqual([1, 2, 3], setB), false)
  t.end()
})

test('isEqual -- Handles more complex Set data types', t => {
  const setA = new Set([1, 2, { a: 1, b: 2 }])
  const setB = new Set([1, 2, { a: 1, b: 2 }])

  t.same(isEqual(setA, setB), true)
  t.same(isEqual(setA, [1, 2, { a: 1, b: 2 }]), false)
  t.same(isEqual(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([3])])])), true)
  t.same(isEqual(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([4])])])), false)
  t.same(isEqual([1, 2, { a: 1, b: 2 }], setB), false)
  t.end()
})

test('isEqual -- Dispatches to `isEqual` method recursively in Set', t => {
  const a = new Set()
  const b = new Set()

  a.add(a, a)
  t.same(isEqual(a, b), false)
  a.add(b)
  b.add(b)
  b.add(a)
  t.same(isEqual(a, b), true)
  t.end()
})

test('isEqual -- Handles Map data types', t => {
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

  t.same(isEqual(mapA, mapB), true, 'Compared maps are equal')
  t.same(isEqual(mapA, mapC), false, 'Two different maps are not equal')
  t.same(isEqual(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [4, 5, 6]]])), true)
  t.same(isEqual(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'd']])]])), false)
  t.same(isEqual(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'c']])]])), true)
  t.same(isEqual(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [7, 8, 9]]])), false)
  t.end()
})

test('isEqual -- Dispatches to `isEqual` method recursively in Map', t => {
  const a = new Map()
  const b = new Map()

  a.set(a, a)
  t.same(isEqual(a, b), false)
  a.set(b, b)
  b.set(b, b)
  b.set(a, a)
  t.same(isEqual(a, b), true)
  t.end()
})

test('isEqual -- Is commutative', t => {
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

  t.same(isEqual(new Point(2, 2), new ColorPoint(2, 2, 'red')), false)
  t.same(isEqual(new ColorPoint(2, 2, 'red'), new Point(2, 2)), false)
  t.end()
})

test('isEqual -- Is curried', t => {
  const fn = isEqual([])

  t.same(fn([]), true)
  t.end()
})
