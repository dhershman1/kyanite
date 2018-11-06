import or from '../../src/function/or'
import test from 'tape'

test('or -- Returns true when both params are true', t => {
  t.true(or(true, true))
  t.end()
})

test('or -- Returns true when one param is false', t => {
  t.true(or(true, false))
  t.end()
})

test('or -- Returns false when both params are false', t => {
  t.false(or(false, false))
  t.end()
})

test('or -- Is curried true', t => {
  const a = or(true)

  t.true(a(true))
  t.true(a(false))
  t.end()
})

test('or -- Is curried false', t => {
  const a = or(false)

  t.same(a(true), true)
  t.same(a(false), false)
  t.end()
})
