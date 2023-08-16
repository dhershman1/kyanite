import test from 'tape'
import negate from '../../src/number/negate.js'

test('negate -- Basic functionality', t => {
  t.is(negate(1), -1)
  t.is(negate(-1), 1)
  t.is(negate(0), -0)
  t.end()
})
