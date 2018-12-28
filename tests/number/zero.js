import test from 'tape'
import zero from '../../src/number/zero'

test('zero -- Basic functionality', t => {
  t.same(zero(1), false)
  t.same(zero('0'), false)
  t.same(zero(0), true)
  t.end()
})
