import or from '../src/or'
import test from 'tape'

test('Returns true when both params are true', t => {
  t.true(or(true, true))
  t.end()
})

test('Returns true when one param is false', t => {
  t.true(or(true, false))
  t.end()
})

test('Returns false when both params are false', t => {
  t.false(or(false, false))
  t.end()
})

test('Is curried true', t => {
  const a = or(true)

  t.true(a(true))
  t.true(a(false))
  t.end()
})

test('Is curried false', t => {
  const a = or(false)

  t.true(a(true))
  t.false(a(false))
  t.end()
})
