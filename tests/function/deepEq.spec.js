import deepEq from '../../src/function/deepEq.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

/* eslint-disable no-new-wrappers */

test('deepEq -- Compares Promise objects by identity', () => {
  const p1 = Promise.resolve(42)
  const p2 = Promise.resolve(42)

  assert.ok(!deepEq(p1, p2), 'Different Promises should not equal')
  assert.ok(deepEq(p1, p1), 'Same Promise objects are equal by memory')
})

test('deepEq -- Handles number types nicely', () => {
  const q = 1

  assert.ok(deepEq(0, 0))
  assert.ok(deepEq(1, 1))
  assert.ok(deepEq(1, q))
  assert.ok(deepEq(q, q))
  assert.ok(!deepEq(1, 2))
  assert.ok(!deepEq(1, '1'))
})

test('deepEq -- Handles string types nicely', () => {
  const q = 'hi'

  assert.ok(deepEq('', ''))
  assert.ok(deepEq('hi', 'hi'))
  assert.ok(deepEq('hi', q))
  assert.ok(deepEq(q, q))
  assert.ok(!deepEq('hi', 'bye'))
  assert.ok(!deepEq('hi', 1))
})

test('deepEq -- Handles boolean types nicely', () => {
  const q = true

  assert.ok(deepEq(true, true))
  assert.ok(deepEq(true, q))
  assert.ok(deepEq(q, q))
  assert.ok(deepEq(false, false))
  assert.ok(!deepEq(true, false))
  assert.ok(!deepEq(true, 1))
  assert.ok(!deepEq(false, 0))
})

test('deepEq -- Test handles regex', () => {
  assert.ok(deepEq(/\s/, /\s/), 'handles whitespace regex')
  assert.ok(deepEq(/a/gi, /a/gi), 'handles flags')
  assert.ok(deepEq(/a/mgi, /a/img), 'handles mixed flags')
  assert.ok(deepEq(/[A-Z]/, new RegExp('[A-Z]')), 'Regex is generated the same so they are equal') // eslint-disable-line prefer-regex-literals
  assert.ok(!deepEq(/\s/, /\d/), 'whitespace regex is not equal to digit regex')
  assert.ok(!deepEq(/a/gi, /a/i), 'Handles not equal flags')
})

test('deepEq -- Handles equivalent argument objects', () => {
  const a = (function () { return arguments }())
  const b = (function () { return arguments }())
  const c = (function () { return arguments }(1, 2, 3))
  const d = (function () { return arguments }(1, 2, 3))

  assert.equal(deepEq(a, b), true)
  assert.equal(deepEq(b, a), true)
  assert.equal(deepEq(c, d), true)
  assert.equal(deepEq(d, c), true)
  assert.equal(deepEq(a, c), false)
  assert.equal(deepEq(c, a), false)
})

test('deepEq -- Primitives compared against their object wrappers', () => {
  assert.equal(deepEq(true, new Boolean(true)), false, 'true is not equal to object true')
  assert.equal(deepEq(false, new Boolean(false)), false, 'false is not equal to object false')
  assert.equal(deepEq(false, new Boolean(true)), false, 'false is not equal to true')
  assert.equal(deepEq('test', new String('test')), false, 'String is not equal to Object String')
  assert.equal(deepEq('12', new String(12)), false, 'String is not equal to Object String')
  assert.equal(deepEq(12, new Number(12)), false, 'Number is not equal to Object Number')
  assert.equal(deepEq(12, new Number('12')), false, 'Number is not equal to Object Number')
})

test('deepEq -- Handles primitive boolean object types', () => {
  assert.equal(deepEq(new Boolean(true), new Boolean(true)), true, 'Object true is equal to object true')
  assert.equal(deepEq(new Boolean(false), new Boolean(false)), true, 'Object false is equal to object false')
  assert.equal(deepEq(new Boolean(true), new Boolean(false)), false, 'Object true is not equal to object false')
  assert.equal(deepEq(new Boolean(false), new Boolean(true)), false, 'Object false is equal to object true')
})

test('deepEq -- Handles primitive number object types', () => {
  assert.equal(deepEq(new Number(0), new Number(0)), true)
  assert.equal(deepEq(new Number(0), new Number(1)), false)
  assert.equal(deepEq(new Number(1), new Number(0)), false)
})

test('deepEq -- Handles primitive string object types', () => {
  assert.equal(deepEq(new String(''), new String('')), true)
  assert.equal(deepEq(new String(''), new String('x')), false)
  assert.equal(deepEq(new String('x'), new String('')), false)
  assert.equal(deepEq(new String('foo'), new String('foo')), true)
  assert.equal(deepEq(new String('foo'), new String('bar')), false)
  assert.equal(deepEq(new String('bar'), new String('foo')), false)
})

test('deepEq -- Handles error objects', () => {
  assert.equal(deepEq(new Error('XXX'), new Error('XXX')), true)
  assert.equal(deepEq(new Error('XXX'), new Error('YYY')), false)
  assert.equal(deepEq(new Error('XXX'), new TypeError('XXX')), false)
  assert.equal(deepEq(new Error('XXX'), new TypeError('YYY')), false)
})

test('deepEq -- Handles Object types nicely', () => {
  const q = { a: 1 }

  assert.deepEqual(deepEq({}, {}), true, 'Empty Objects are equal')
  assert.deepEqual(deepEq({ a: 1 }, { a: 1 }), true, 'Identical Objects are equal')
  assert.deepEqual(deepEq({ a: 1 }, q), true, 'Object compared to var of same object are equal')
  assert.deepEqual(deepEq(q, q), true, 'Object var compared against itself is equal')
  assert.deepEqual(deepEq({ a: 1, b: 2 }, { a: 1, b: 2 }), true, 'Stacked Object is equal')
  assert.deepEqual(deepEq({ a: 1, b: 2 }, { b: 2, a: 1 }), true, 'Stacked but switched object is equal')
  assert.deepEqual(deepEq({ a: 1 }, { a: 1 }), true)
  assert.deepEqual(deepEq({}, { a: 1 }), false)
  assert.deepEqual(deepEq({}, { b: 2 }), false)
  assert.deepEqual(deepEq({ a: 1 }, { a: '1' }), false)
  assert.deepEqual(deepEq({ a: 1 }, { b: 1 }), false)
  assert.deepEqual(deepEq({ a: 1, b: 2 }, { a: 2, b: 1 }), false)
  assert.deepEqual(deepEq({ a: 1, b: 2 }, { b: 1, a: 2 }), false)
})

test('deepEq -- Handles array types nicely', () => {
  const q = []

  assert.deepEqual(deepEq([], []), true, 'Empty array is equal to empty array')
  assert.deepEqual(deepEq([1], [1]), true, 'Single index array with same number are equal')
  assert.deepEqual(deepEq([1, 2], [1, 2]), true, 'Multi index arrays equal')
  assert.deepEqual(deepEq(q, []), true, 'Variable empty array equal to empty array')
  assert.deepEqual(deepEq(q, q), true, 'Variable array equal to variable array')
  assert.deepEqual(deepEq([1], []), false, 'Single index array not equal to empty array')
  assert.deepEqual(deepEq([1, 2], [2, 1]), false, 'Out of order arrays are not equal')
  assert.deepEqual(deepEq([1, 3], [1, 2]), false, 'Different valued arrays are not equal')
  assert.deepEqual(deepEq([1], q), false, 'Single index array not equal to empty variable array')
  assert.deepEqual(deepEq([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 2 }]), true, 'Array of objects are equal')
})

test('deepEq -- Requires that both objects have the same enum properties', () => {
  const a1 = []
  const a2 = []
  a2.x = 0

  const b1 = new Boolean(false)
  const b2 = new Boolean(false)
  b2.x = 0

  const d1 = new Date(0)
  const d2 = new Date(0)
  d2.x = 0

  const n1 = new Number(0)
  const n2 = new Number(0)
  n2.x = 0

  const r1 = /(?:)/
  const r2 = /(?:)/
  r2.x = 0

  const s1 = new String('')
  const s2 = new String('')
  s2.x = 0

  assert.equal(deepEq(a1, a2), false)
  assert.equal(deepEq(b1, b2), false)
  assert.equal(deepEq(d1, d2), false)
  assert.equal(deepEq(n1, n2), false)
  assert.equal(deepEq(r1, r2), false)
  assert.equal(deepEq(s1, s2), false)
})

test('deepEq -- Handles date objects nicely', () => {
  assert.deepEqual(deepEq(new Date(), new Date()), true, 'Current Date is equal to current date')
  assert.deepEqual(deepEq(new Date('12/14/1992'), new Date('12/14/1992')), true, 'Statically set dates are equal')
  assert.deepEqual(deepEq(new Date('09/14/1992'), new Date('09/14/2018')), false, 'Different year dates not equal')
})

test('deepEq -- Handles nested objects nicely', () => {
  const q = { a: 1 }

  assert.deepEqual(deepEq({ q }, { q }), true, 'Single nested object')
  assert.deepEqual(deepEq({ a: { q } }, { a: { q } }), true, 'Double nested object')
})

test('deepEq -- Handles more complex object combinations', () => {
  const q = {
    a: [1]
  }

  assert.deepEqual(deepEq(q, q), true, 'Object with array is equal')
  assert.deepEqual(deepEq({
    a: [{
      b: 1
    }]
  }, {
    a: [{
      b: 1
    }]
  }), true, 'Overly complex data is equal')
})

test('deepEq -- Handles Array Buffer', () => {
  const typArr1 = new ArrayBuffer(10)
  typArr1[0] = 1
  const typArr2 = new ArrayBuffer(10)
  typArr2[0] = 1
  const typArr3 = new ArrayBuffer(10)
  const intTypArr = new Int8Array(typArr1)
  typArr3[0] = 0

  assert.equal(deepEq(typArr1, typArr2), true)
  assert.equal(deepEq(typArr1, typArr3), false)
  assert.equal(deepEq(typArr1, intTypArr), false)
})

test('deepEq -- Handles circular data', () => {
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

  assert.deepEqual(deepEq(c, d), true)
  assert.deepEqual(deepEq(e, f), true)
  assert.deepEqual(deepEq(nestA, nestB), true)
  assert.deepEqual(deepEq(nestA, nestC), false)
})

test('deepEq -- Handles basic Set data types', () => {
  const setA = new Set([1, 2, 3])
  const setB = new Set([1, 2, 3])

  assert.deepEqual(deepEq(setA, setB), true)
  assert.deepEqual(deepEq(setA, [1, 2, 3]), false)
  assert.deepEqual(deepEq([1, 2, 3], setB), false)
})

test('deepEq -- Handles more complex Set data types', () => {
  const setA = new Set([1, 2, { a: 1, b: 2 }])
  const setB = new Set([1, 2, { a: 1, b: 2 }])

  assert.deepEqual(deepEq(setA, setB), true)
  assert.deepEqual(deepEq(setA, [1, 2, { a: 1, b: 2 }]), false)
  assert.deepEqual(deepEq(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([3])])])), true)
  assert.deepEqual(deepEq(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([4])])])), false)
  assert.deepEqual(deepEq([1, 2, { a: 1, b: 2 }], setB), false)
})

test('deepEq -- Dispatches to `deepEq` method recursively in Set', () => {
  const a = new Set()
  const b = new Set()

  a.add(a, a)
  assert.deepEqual(deepEq(a, b), false)
  a.add(b)
  b.add(b)
  b.add(a)
  assert.deepEqual(deepEq(a, b), true)
})

test('deepEq -- Handles Map data types', () => {
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

  assert.deepEqual(deepEq(mapA, mapB), true, 'Compared maps are equal')
  assert.deepEqual(deepEq(mapA, mapC), false, 'Two different maps are not equal')
  assert.deepEqual(deepEq(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [4, 5, 6]]])), true)
  assert.deepEqual(deepEq(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'd']])]])), false)
  assert.deepEqual(deepEq(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'c']])]])), true)
  assert.deepEqual(deepEq(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [7, 8, 9]]])), false)
})

test('deepEq -- Dispatches to `deepEq` method recursively in Map', () => {
  const a = new Map()
  const b = new Map()

  a.set(a, a)
  assert.deepEqual(deepEq(a, b), false)
  a.set(b, b)
  b.set(b, b)
  b.set(a, a)
  assert.deepEqual(deepEq(a, b), true)
})

test('deepEq -- Dispatches to equals method recursively', () => {
  function Left (x) { this.value = x }
  Left.prototype.equals = function (x) {
    return x instanceof Left && deepEq(x.value, this.value)
  }

  function Right (x) { this.value = x }
  Right.prototype.equals = function (x) {
    return x instanceof Right && deepEq(x.value, this.value)
  }

  assert.deepEqual(deepEq(new Left([42]), new Left([42])), true)
  assert.deepEqual(deepEq(new Left([42]), new Left([43])), false)
  assert.deepEqual(deepEq(new Left(42), { value: 42 }), false)
  assert.deepEqual(deepEq({ value: 42 }, new Left(42)), false)
  assert.deepEqual(deepEq(new Left(42), new Right(42)), false)
  assert.deepEqual(deepEq(new Right(42), new Left(42)), false)

  assert.deepEqual(deepEq([new Left(42)], [new Left(42)]), true)
  assert.deepEqual(deepEq([new Left(42)], [new Right(42)]), false)
  assert.deepEqual(deepEq([new Right(42)], [new Left(42)]), false)
  assert.deepEqual(deepEq([new Right(42)], [new Right(42)]), true)
})

test('deepEq -- Is commutative', () => {
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

  assert.deepEqual(deepEq(new Point(2, 2), new ColorPoint(2, 2, 'red')), false)
  assert.deepEqual(deepEq(new ColorPoint(2, 2, 'red'), new Point(2, 2)), false)
})

test('deepEq -- Is curried', () => {
  const fn = deepEq([])

  assert.deepEqual(fn([]), true)
})

test('deepEq -- Promise testing', () => {
  const p = {
    constructor: function Promise () {}
  }
  const q = {
    constructor: function Promise () {}
  }

  const r = {
    constructor () {}
  }
  const s = {
    constructor () {}
  }

  assert.deepEqual(deepEq(p, q), false)
  assert.deepEqual(deepEq(r, s), false)
})
