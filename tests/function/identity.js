import filter from '../../src/array/filter'
import identity from '../../src/function/identity'
import test from 'tape'

test('identity -- Returns value given to it', t => {
  t.is(identity(10), 10)
  t.end()
})

test('identity -- Handles being used as a function callback', t => {
  t.deepEqual(filter(identity, [0, 'cool', null, 1]), ['cool', 1])
  t.end()
})

test('identity -- Returns with ability to access as argument type', t => {
  const results = identity(10)

  t.ok(results)
  t.is(typeof results.constructor, 'function')
  t.end()
})
