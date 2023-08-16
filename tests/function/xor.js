import test from 'tape'
import xor from '../../src/function/xor.js'

test('xor -- Returns true when both params are true', t => {
  t.same(xor(true, true), false, 'Returns false when both params are true')
  t.same(xor(false, false), false, 'Returns false when both params are false')
  t.same(xor(true, false), true, 'Returns true when the first param is true and the 2nd is false')
  t.same(xor(false, true), true, 'Returns true when the first param is false and the 2nd is true')
  t.end()
})

test('xor -- Is curried', t => {
  const a = xor(true)
  const b = xor(false)

  t.same(a(true), false, 'Returned false when both params are true')
  t.same(a(false), true, 'Returned true when only one param was true')
  t.same(b(true), true, 'Returned true when only one param was true')
  t.same(b(false), false, 'Returned false when both params are false')
  t.end()
})
