import test from 'tape'
import has from '../../src/function/has.js'

test('has -- Basic functionality', t => {
  t.same(has('foo', { foo: 1 }), true, 'Object has key provided')
  t.same(has('foo', ['bar', 'foo', 'baz']), true, 'Array has value provided')
  t.same(has('foo', 'barfoobaz'), true, 'String contains key provided')
  t.same(has('foo', new Map([['foo', 1], ['bar', 2]])), true, 'foo exsists in the map')
  t.same(has('foo', new Set(['bar', 'foo', 'baz'])), true, 'foo is inside the Set')
  t.end()
})

test('has -- False returned when data not found', t => {
  t.same(has('test', { foo: 1 }), false, 'Object does not have the key provided')
  t.same(has('test', ['bar', 'foo', 'baz']), false, 'Array does not have the value provided')
  t.same(has('test', 'barfoobaz'), false, 'String does not contain the key provided')
  t.same(has('test', new Map([['foo', 1], ['bar', 2]])), false, 'Map does not have the key')
  t.same(has('test', new Set(['bar', 'foo', 'baz'])), false, 'Key does not exist in Set')
  t.end()
})

test('has -- Is curried', t => {
  const fn = has('foo')

  t.same(fn({ foo: 1 }), true)
  t.same(fn(new Map([['foo', 1]])), true)
  t.same(fn(['bar']), false)
  t.end()
})

test('has -- Throws error for bad type (Number)', t => {
  try {
    has('foo', 1)
  } catch (e) {
    t.same(e.message, 'Unsupported type: Number')
    t.end()
  }
})

test('has -- Throws error for bad type (RegExp)', t => {
  try {
    has('foo', /[A-Z]/)
  } catch (e) {
    t.same(e.message, 'Unsupported type: RegExp')
    t.end()
  }
})
