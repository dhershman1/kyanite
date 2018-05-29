import isEqual from '../src/isEqual'
import test from 'tape'

test('Test simple types', t => {
  t.ok(isEqual('testing', 'testing'))
  t.ok(isEqual(1, 1))
  t.ok(isEqual(true, true))
  t.notOk(isEqual('1', 1))
  t.end()
})

test('Test Array Type', t => {
  t.ok(isEqual([], []))
  t.ok(isEqual([1, 2, 3], [1, 2, 3]))
  t.ok(isEqual(['test'], ['test']))
  t.notOk(isEqual([], {}))
  t.end()
})

test('Test Object Type', t => {
  t.ok(isEqual({}, {}))
  t.ok(isEqual({ test: 1 }, { test: 1 }))
  t.ok(isEqual({
    test: 1,
    again: 'test'
  }, {
    test: 1,
    again: 'test'
  }))
  t.notOk(isEqual({ test: 1 }, { test: 2 }))
  t.end()
})

test('Test isEqual() primatives', t => {
  const a = []
  const b = a

  t.ok(isEqual(100, 100), 'number 100 equals number 100')
  t.notOk(isEqual(100, '100'), 'number 100 is not equal to string 100')
  t.ok(isEqual([], []), '2 empty arrays are equal')
  t.ok(isEqual(a, b), 'variable b is equal to a')
  t.ok(isEqual('test', 'test'), 'strings are equal')
  t.end()
})

test('Test primitive booleans', t => {
  t.ok(isEqual(true, true), 'simple booleans true, true are equal')
  t.ok(isEqual(false, false), 'simple booleans false, false are equal')
  t.notOk(isEqual(true, false), 'simple booleans true, false are not equal')
  t.notOk(isEqual(false, true), 'simple booleans false, true are not equal')
  t.end()
})

test('Test Boolean Objects', t => {
  t.ok(isEqual(new Boolean(true), new Boolean(true)), 'Object true and object true are equal')
  t.ok(isEqual(new Boolean(false), new Boolean(false)), 'Object false and object false are equal')
  t.notOk(isEqual(new Boolean(false), new Boolean(true)), 'Object false and object true are not equal')
  t.notOk(isEqual(new Boolean(true), new Boolean(false)), 'Object true and object false are not equal')
  t.end()
})

test('Test boolean primitive do not equal boolean objects', t => {
  t.notOk(isEqual(true, new Boolean(true)), 'true is not equal to object true')
  t.notOk(isEqual(false, new Boolean(false)), 'flase is not equal to object false')
  t.end()
})

test('Test can handle objects', t => {
  t.ok(isEqual({}, {}), 'empty object is equal to empty object')
  t.ok(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 }), 'simple object is equal to simple object')
  t.notOk(isEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }), 'the two provided objects are not equal')
  t.end()
})

test('Test arguments objects', t => {
  const a = (function (...args) { return args }())
  const b = (function (...args) { return args }())
  const c = (function (...args) { return args }('a', 'b', 'c'))
  const d = (function (...args) { return args }('a', 'b', 'c'))

  t.ok(isEqual(a, b), 'no args is equal')
  t.ok(isEqual(c, d), '3 args is equal')
  t.notOk(isEqual(a, c), 'no args isnt equal to 3 args')
  t.end()
})

test('Test error objects are equal', t => {
  t.ok(isEqual(new Error('Test'), new Error('Test')), 'Test error is equal')
  t.ok(isEqual(new TypeError('Test'), new TypeError('Test')), 'Test type error is equal')
  t.notOk(isEqual(new Error('Test'), new TypeError('Test')), 'Test type error is not equal to regular error')
  t.end()
})

test('Test handles regex', t => {
  t.ok(isEqual(/\s/, /\s/), 'handles whitespace regex')
  t.ok(isEqual(/a/gi, /a/gi), 'handles flags')
  t.notOk(isEqual(/\s/, /\d/), 'whitespace regex is not equal to digit regex')
  t.ok(isEqual(/a/mgi, /a/img), 'handles mixed flags')
  t.notOk(isEqual(/a/gi, /a/i), 'Handles not equal flags')
  t.end()
})

test('Test handles recursive data', t => {
  const c = {}
  const d = {}
  const e = []
  const f = []

  c.v = c
  d.v = d
  e.push(e)
  f.push(f)

  const nestA = {
    a: [1, 2, { c: 1 }],
    b: 1
  }
  const nestB = {
    a: [1, 2, { c: 1 }],
    b: 1
  }
  const nestC = {
    a: [1, 2, { c: 2 }],
    b: 1
  }

  t.ok(isEqual(c, d), 'objects are equal')
  t.ok(isEqual(e, f), 'arrays are equal')
  t.notOk(isEqual(c, f), 'objects are not equal to arrays')
  t.notOk(isEqual(d, e), 'objects are not equal to arrays')
  t.ok(isEqual(nestA, nestB), 'nested A matches other nested data B')
  t.notOk(isEqual(nestA, nestC), 'nested A does not match other nested data C')
  t.end()
})

test('Test handles dates', t => {
  t.ok(isEqual(new Date(0), new Date(0)), 'New dates of 0 match')
  t.ok(isEqual(new Date(1), new Date(1)), 'New dates of 1 match')
  t.notOk(isEqual(new Date(1), new Date(0)), 'New dates of 1 and 0 do not match')
  t.end()
})

test('Test requires both objects to have the same enumerable properties with the same value', t => {

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

  t.notOk(isEqual(a1, a2), 'Array enumerables not equal')
  t.notOk(isEqual(b1, b2), 'Boolean enumerables not equal')
  t.notOk(isEqual(d1, d2), 'Date enumerables not equal')
  t.notOk(isEqual(n1, n2), 'Number enumerables not equal')
  t.notOk(isEqual(r1, r2), 'Regex enumerables not equal')
  t.notOk(isEqual(s1, s2), 'String enumerables not equal')
  t.end()
})

test('Test handles typed arrays', t => {
  if (typeof ArrayBuffer !== 'undefined' && typeof Int8Array !== 'undefined') {
    const typArr1 = new ArrayBuffer(10)
    const typArr2 = new ArrayBuffer(10)
    const typArr3 = new ArrayBuffer(10)

    typArr1[0] = 1
    typArr2[0] = 1
    typArr3[0] = 0
    const intTypArr = new Int8Array(typArr1)

    t.ok(isEqual(typArr1, typArr2), 'type array buffer is equal to another array buffer')
    t.notOk(isEqual(typArr1, typArr3), 'Type array buffer 3 has different index 0')
    t.notOk(isEqual(typArr1, intTypArr), 'Type array not equal to int type array')
    t.end()
  }
})

test('Test handles promise objects with identity', t => {
  const p = Promise.resolve(10)
  const q = Promise.resolve(10)

  t.ok(isEqual(p, p), 'First promise identity matches second promise')
  t.notOk(isEqual(p, q), 'First promise does not match second promise identity')
  t.end()
})

test('Test compares map objects by value', t => {
  t.ok(isEqual(new Map([]), new Map([])), 'Empty map equals empty map')
  t.notOk(isEqual(new Map([]), new Map([[1, 'a']])), 'Empty map does not equal item map')
  t.ok(isEqual(new Map([[1, 'a']]), new Map([[1, 'a']])), 'Item map with same data equals other item map')
  t.ok(isEqual(new Map([[1, 'a'], [2, 'b']]), new Map([[1, 'a'], [2, 'b']])), 'Multi position data still matches')
  t.ok(isEqual(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'c']])]])), 'mapception')
  t.end()
})

test('Compares Promise objects by identity', t => {
  const p1 = Promise.resolve(42)
  const p2 = Promise.resolve(42)

  t.notOk(isEqual(p1, p2), 'Different Promises should not equal')
  t.ok(isEqual(p1, p1), 'Same Promise objects are equal by memory')
  t.end()
})
