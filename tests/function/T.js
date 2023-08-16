import test from 'tape'
import T from '../../src/function/T.js'

test('T Basic Tests', t => {
  t.same(T(), true, 'Returns true')
  t.same(T(1, 2), true, 'Ignore Parameters')
  t.end()
})
