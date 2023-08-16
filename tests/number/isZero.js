import test from 'tape'
import isZero from '../../src/number/isZero.js'

test('isZero -- Basic functionality', t => {
  t.same(isZero(1), false)
  t.same(isZero('0'), false)
  t.same(isZero(0), true)
  t.end()
})
