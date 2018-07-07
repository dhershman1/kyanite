import ascend from '../../src/function/ascend'
import test from 'tape'

test('Sorts in ascending order', t => {
  const result = [4, 10, 1, 6, 7, 12].sort(ascend)

  t.same(result, [1, 4, 6, 7, 10, 12])
  t.end()
})
