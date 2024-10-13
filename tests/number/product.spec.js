import test from 'tape'
import product from '../../src/number/product.js'

test('product -- Combines array', t => {
  t.same(product([1, 2, 3]), 6)
  t.same(product([2, 3, 0]), 0)
  t.end()
})
