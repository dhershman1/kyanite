import test from 'tape'
import tail from '../../src/list/tail.js'

test('tail() Basics', t => {
  t.same(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5], 'Gives back tail end of array')
  t.same(tail('wow'), ['o', 'w'], 'Works properly with strings')
  t.end()
})
