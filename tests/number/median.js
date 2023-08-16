import test from 'tape'
import median from '../../src/number/median.js'

test('median -- Gets the median of a number array', t => {
  t.same(median([2, 9, 7]), 7)
  t.same(median([7, 2, 10, 9]), 8)
  t.same(median([3, 13, 7, 5, 21, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29]), 23)
  t.same(median([3, 13, 7, 5, 21, 23, 23, 40, 23, 14, 12, 56, 23, 29]), 22)
  t.same(Number.isNaN(median([])), true)
  t.end()
})
