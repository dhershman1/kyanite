import test from 'tape'
import dec from '../../src/number/dec'

test('dec -- Decrements a number', t => {
  t.same(dec(1), 0)
  t.same(dec(dec(3)), 1)
  t.end()
})
