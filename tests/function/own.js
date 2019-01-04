import test from 'tape'
import own from '../../src/function/own'

test('own -- Basic functionality', t => {
  t.same(own('foo', { foo: 1 }), true, 'Object has key provided')
  t.same(own('foo', ['bar', 'foo', 'baz']), true, 'Array has value provided')
  t.same(own('foo', 'barfoobaz'), true, 'String contains key provided')
  t.same(own('foo', new Map([['foo', 1], ['bar', 2]])), true, 'foo exsists in the map')
  t.same(own('foo', new Set(['bar', 'foo', 'baz'])), true, 'foo is inside the Set')
  t.end()
})

test('own -- False returned when data not found', t => {
  t.same(own('test', { foo: 1 }), false, 'Object does not have the key provided')
  t.same(own('test', ['bar', 'foo', 'baz']), false, 'Array does not have the value provided')
  t.same(own('test', 'barfoobaz'), false, 'String does not contain the key provided')
  t.same(own('test', new Map([['foo', 1], ['bar', 2]])), false, 'Map does not have the key')
  t.same(own('test', new Set(['bar', 'foo', 'baz'])), false, 'Key does not exist in Set')
  t.end()
})

test('own -- Is curried', t => {
  const fn = own('foo')

  t.same(fn({ foo: 1 }), true)
  t.same(fn(new Map([['foo', 1]])), true)
  t.same(fn(['bar']), false)
  t.end()
})
