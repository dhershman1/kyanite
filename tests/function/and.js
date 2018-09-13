import and from '../../src/function/and'
import test from 'tape'

test('and -- Returns true when both params are true', t => {
  t.true(and(true, true))
  t.end()
})

test('and -- Returns false when one param is false', t => {
  t.false(and(true, false))
  t.end()
})

test('and -- Returns false when both params are false', t => {
  t.false(and(false, false))
  t.end()
})

test('and -- Is curried', t => {
  const a = and(true)

  t.true(a(true))
  t.false(a(false))
  t.end()
})
