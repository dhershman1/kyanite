import test from 'tape'
import values from '../../src/object/values.js'

test('values -- basic test', t => {
  t.same(values({ a: 1, b: 2, c: 3 }), [1, 2, 3])
  t.same(values([1, 2, 3]), [1, 2, 3])
  t.end()
})
