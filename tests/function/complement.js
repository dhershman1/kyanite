import complement from '../../src/function/complement'
import test from 'tape'

test('complement -- Basic functionality', t => {
  t.false(complement(Array.isArray, []))
  t.true(complement(Array.isArray, 10))
  t.same(complement(Number.isInteger, 42), false)
  t.same(complement(x => x > 10, 11), false)
  t.same(complement(x => x < 10, 11), true)
  t.end()
})

test('complement -- Curried functionality', t => {
  const isNot = complement(Array.isArray)

  t.false(isNot([]))
  t.true(isNot(10))
  t.end()
})
