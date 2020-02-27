import test from 'tape'
import F from '../../src/function/F'

test('F Basic Tests', t => {
  t.same(F(), false, 'Returns false')
  t.same(F(1, 2), false, 'Ignore Parameters')
  t.end()
})
