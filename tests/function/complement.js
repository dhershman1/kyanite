import complement from '../../src/function/complement'
import test from 'tape'

test('Basic functionality', t => {
  t.false(complement(Array.isArray, []))
  t.true(complement(Array.isArray, 10))
  t.end()
})

test('Curried functionality', t => {
  const isNot = complement(Array.isArray)

  t.false(isNot([]))
  t.true(isNot(10))
  t.end()
})
