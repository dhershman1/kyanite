import descend from '../src/descend'
import test from 'tape'

test('Sorts in descending order', t => {
  const result = [4, 10, 1, 6, 7, 12].sort(descend)

  t.same(result, [12, 10, 7, 6, 4, 1])
  t.end()
})
