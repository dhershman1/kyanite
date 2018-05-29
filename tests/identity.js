import filter from '../src/filter'
import identity from '../src/identity'
import test from 'tape'

test('Returns value given to it', t => {
  t.is(identity(10), 10)
  t.end()
})

test('Handles being used as a function callback', t => {
  t.deepEqual(filter(identity, [0, 'cool', null, 1]), ['cool', 1])
  t.end()
})

test('Returns with ability to access as argument type', t => {
  const results = identity(10)

  t.ok(results)
  t.is(typeof results.constructor, 'function')
  t.end()
})
